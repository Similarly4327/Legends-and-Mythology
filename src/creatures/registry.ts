import type { Creature, BookId } from './types';

export function validateCreatures(items: Creature[]): Creature[] {
  const ids = new Set<string>();
  for (const item of items) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id)) throw new Error(`Ongeldig creature-id: ${item.id}`);
    if (ids.has(item.id)) throw new Error(`Dubbel creature-id: ${item.id}`);
    if (!['wonder', 'adventure', 'dark'].includes(item.book)) throw new Error(`Onbekend boek: ${item.book}`);
    if (!item.anatomy.facts.length || !item.location.steps.length) throw new Error(`Ontdekkingsstappen ontbreken: ${item.id}`);
    ids.add(item.id);
  }
  return items;
}

export function bookCreatures(items: Creature[], book: BookId) { return items.filter(item => item.book === book); }
export function creatureNeighbors(items: Creature[], creature: Creature) {
  const siblings = bookCreatures(items, creature.book);
  const index = siblings.findIndex(item => item.id === creature.id);
  return { previous: siblings[index - 1], next: siblings[index + 1] };
}
