import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { creatures } from '../src/creatures';
import { bookCreatures, creatureNeighbors } from '../src/creatures/registry';
import { getCreatureNeighbors } from '../src/content/repository';

test('all nine entries share folder registration, full stories and geographic sequences', () => {
  assert.equal(creatures.length, 9);
  for (const creature of creatures) {
    assert.equal(creature.anatomy.facts.length, 6);
    assert.ok(creature.location.steps.length >= 3);
    for (const step of creature.location.steps) {
      assert.ok(step.atlas);
      const [w, s, e, n] = step.atlas.bounds;
      assert.ok(w < e && s < n);
      assert.ok(step.atlas.center[0] >= w && step.atlas.center[0] <= e);
      assert.ok(step.atlas.center[1] >= s && step.atlas.center[1] <= n);
    }
    const story = readFileSync(new URL(`../src/creatures/${creature.id}/story.md`, import.meta.url), 'utf8');
    const words = story.split(/\s+/).length;
    assert.ok(words >= (creature.book === 'dark' ? 1400 : creature.book === 'adventure' ? 900 : 700));
    if (creature.book === 'dark') assert.equal(story.match(/^## /gm)?.length, 4);
  }
});

test('both catalog adapters keep all neighbor transitions within one book', () => {
  for (const book of ['wonder', 'adventure', 'dark'] as const) {
    const siblings = bookCreatures(creatures, book);
    assert.equal(siblings.length, 3);
    assert.equal(creatureNeighbors(creatures, siblings[0]).previous, undefined);
    assert.equal(creatureNeighbors(creatures, siblings.at(-1)!).next, undefined);
    for (const creature of siblings) {
      const neighbors = getCreatureNeighbors(creature.id);
      for (const neighbor of [neighbors.previous, neighbors.next]) {
        if (neighbor) assert.ok(siblings.some(item => item.id === neighbor.id));
      }
    }
  }
});
