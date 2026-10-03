import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseMarkdown } from '../src/lib/markdown';
import { validateCreatures, creatureNeighbors, bookCreatures } from '../src/creatures/registry';
import { pegasus } from '../src/creatures/pegasus/creature';
import { illustrationPoints } from '../src/creatures/pegasus/illustration-points';
import type { Creature } from '../src/creatures/types';

const sample = (id: string, book: Creature['book'] = 'wonder') => ({ id, book, anatomy: { facts: [{ id: 'fact', title: 'a', text: 'b' }] }, location: { steps: [{ id: 'place', title: 'a', text: 'b' }] }, stories: [{ id: 'story', title: 'A story', shortDescription: 'A summary', image: '', imageAlt: '', tone: '', sections: [{ paragraphs: ['Text.'] }] }] }) as Creature;

test('Markdown handles CRLF, chapters, paragraphs and lists without interpreting HTML', () => {
  assert.deepEqual(parseMarkdown('# Titel\r\n\r\nEerste regel.\r\nTweede regel.\r\n\r\n## Hoofdstuk\r\n- een\r\n- twee\r\n\r\n<script>alert(1)</script>'), [
    { type: 'heading', level: 1, text: 'Titel' }, { type: 'paragraph', text: 'Eerste regel. Tweede regel.' },
    { type: 'heading', level: 2, text: 'Hoofdstuk' }, { type: 'list', items: ['een', 'twee'] }, { type: 'paragraph', text: '<script>alert(1)</script>' },
  ]);
  assert.deepEqual(parseMarkdown('  \n\n'), []);
});

test('registration rejects duplicate or invalid ids and empty discovery sequences', () => {
  assert.throws(() => validateCreatures([sample('same'), sample('same')]), /Dubbel/);
  assert.throws(() => validateCreatures([sample('../bad')]), /Ongeldig/);
  const empty = sample('empty'); empty.anatomy.facts = [];
  assert.throws(() => validateCreatures([empty]), /stappen ontbreken/);
});

test('book contents and neighbors derive from registration and stay inside the book', () => {
  const a = sample('first'); const b = sample('second'); const c = sample('third', 'dark');
  const items = validateCreatures([a, c, b]);
  assert.deepEqual(bookCreatures(items, 'wonder'), [a, b]);
  assert.deepEqual(creatureNeighbors(items, a), { previous: undefined, next: b });
  assert.deepEqual(creatureNeighbors(items, b), { previous: a, next: undefined });
  assert.deepEqual(creatureNeighbors(items, c), { previous: undefined, next: undefined });
});

test('Pegasus content keeps the four-part reader, discovery maps and extensible story data', () => {
  assert.equal(pegasus.anatomy.facts.length, 6);
  assert.equal(pegasus.location.steps.length, 5);
  assert.equal(pegasus.stories.length, 1);
  assert.equal(pegasus.stories[0].title, 'Pegasus bij de bron');
  assert.deepEqual(pegasus.anatomy.facts.map(({ id }) => id).sort(), Object.keys(illustrationPoints.anatomy).sort());
  assert.deepEqual(pegasus.location.steps.map(({ id }) => id).sort(), Object.keys(illustrationPoints.world).sort());
  assert.equal(pegasus.stories[0].sections.flatMap(section => section.paragraphs).at(-1), '“Misschien is hij vannacht weer langs geweest.”');
  assert.deepEqual(validateCreatures([pegasus]), [pegasus]);
});
