import { test } from 'node:test';
import assert from 'node:assert/strict';
import { creatures as folders } from '../src/creatures';
import { creatures, getBookCreatures, searchCreatures, validateCreatures } from '../src/content/repository';
import { toFoundationCreature } from '../src/creature-book/foundationCatalog';

test('folder registration automatically reaches the foundation contents', () => {
  for (const creature of folders) {
    const entry = creatures.find(item => item.id === creature.id);
    assert.ok(entry);
    assert.equal(entry.summary, creature.introduction.shortText);
    assert.equal(entry.artwork?.src, creature.cover);
    assert.ok(getBookCreatures(entry.category).includes(entry));
  }
  assert.deepEqual(validateCreatures(creatures), []);
});

test('the bridge maps the canonical books without changing creature data', () => {
  const sample = folders[0];
  assert.equal(toFoundationCreature({ ...sample, book: 'adventure' }).category, 'thrilling');
  assert.equal(toFoundationCreature({ ...sample, book: 'dark' }).category, 'frightening');
  assert.equal(sample.book, 'wonder');
});

test('folder metadata also reaches the existing search', () => {
  assert.equal(searchCreatures(creatures, 'Pegasos')[0]?.id, 'pegasus');
  assert.ok(searchCreatures(creatures, 'vleugels').some(creature => creature.id === 'pegasus'));
});
