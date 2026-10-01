import assert from 'node:assert/strict';
import test from 'node:test';
import { creatures, getBook, getBookCreatures, getCreature, getCreatureNeighbors, isCategory, searchCreatures, validateCreatures } from '../src/content/repository';
import { pegasus } from '../src/content/creatures/pegasus';
import { draak } from '../src/content/creatures/draak';
import { kuchisakeOnna } from '../src/content/creatures/kuchisake-onna';

test('all registered entries pass content validation', () => {
  assert.deepEqual(validateCreatures(creatures), []);
  assert.equal(new Set(creatures.map((creature) => creature.category)).size, 3);
});

test('slugs and category routes resolve; unknown routes safely return undefined', () => {
  assert.equal(getCreature('pegasus')?.id, 'pegasus');
  assert.equal(getBook('wonder')?.volume, 'I');
  assert.equal(getCreature('missing'), undefined);
  assert.equal(getCreature(undefined), undefined);
  assert.equal(getBook('invalid'), undefined);
  assert.equal(isCategory('invalid'), false);
});

test('draft content stays out of lookup and collection routes', () => {
  const draft = { ...pegasus, status: 'draft' as const };
  assert.equal(getCreature('pegasus', [draft]), undefined);
  assert.deepEqual(getBookCreatures('wonder', [draft]), []);
});

test('locked and coming-soon entries can be found but are excluded from reading neighbors', () => {
  const locked = { ...pegasus, id: 'locked', slug: 'locked', status: 'locked' as const };
  const coming = { ...pegasus, id: 'coming', slug: 'coming', status: 'coming-soon' as const };
  assert.equal(getCreature('locked', [locked])?.status, 'locked');
  assert.equal(getBookCreatures('wonder', [coming]).length, 1);
  assert.deepEqual(getCreatureNeighbors('locked', [locked]), {});
  assert.equal(getCreatureNeighbors('pegasus', [pegasus, locked, coming]).next, undefined);
});

test('search handles whitespace, case, alternate names, regions and tags', () => {
  const entries = [pegasus, draak, kuchisakeOnna];
  assert.equal(searchCreatures(entries, '  PEGASOS ').length, 1);
  assert.equal(searchCreatures(entries, 'japan')[0]?.slug, 'kuchisake-onna');
  assert.equal(searchCreatures(entries, 'vleugels').length, 2);
  assert.equal(searchCreatures(entries, 'no-such-creature').length, 0);
});

test('validation rejects broken visual references and duplicate route slugs', () => {
  const broken = structuredClone(pegasus);
  broken.chapters[0].steps[0].visualState = 'missing-state';
  assert.ok(validateCreatures([broken]).some((error) => error.includes('unknown visual state')));
  assert.ok(validateCreatures([pegasus, pegasus]).some((error) => error.includes('duplicate slug')));
});

test('validation catches empty published chapters, missing map context and unsafe annotation positions', () => {
  const broken = structuredClone(pegasus);
  broken.chapters[0].steps = [];
  broken.chapters[1].states[0].location = undefined;
  broken.chapters[0].states[1].annotations![0].x = 120;
  const errors = validateCreatures([broken]);
  assert.ok(errors.some((error) => error.includes('empty chapter')));
  assert.ok(errors.some((error) => error.includes('map needs a location')));
  assert.ok(errors.some((error) => error.includes('invalid annotation position')));
});

test('reading order has stable boundaries within each book', () => {
  assert.equal(getCreatureNeighbors('pegasus').previous, undefined);
  assert.equal(getCreatureNeighbors('pegasus').next?.slug, 'fenix');
  assert.equal(getCreatureNeighbors('baku').next, undefined);
  assert.equal(getCreatureNeighbors('draak').previous, undefined);
  assert.equal(getCreatureNeighbors('manticore').next, undefined);
  assert.equal(getCreatureNeighbors('kuchisake-onna').previous, undefined);
  assert.equal(getCreatureNeighbors('baba-yaga').next, undefined);
});
