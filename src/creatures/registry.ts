import type { Creature, BookId } from './types';

export function validateCreatures(items: Creature[]): Creature[] {
  const ids = new Set<string>();
  for (const item of items) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id)) throw new Error(`Ongeldig creature-id: ${item.id}`);
    if (ids.has(item.id)) throw new Error(`Dubbel creature-id: ${item.id}`);
    if (!['wonder', 'adventure', 'dark'].includes(item.book)) throw new Error(`Onbekend boek: ${item.book}`);
    if (!item.anatomy.facts.length || !item.location.steps.length) throw new Error(`Ontdekkingsstappen ontbreken: ${item.id}`);
    for (const steps of [item.anatomy.facts, item.location.steps]) {
      const stepIds = new Set<string>();
      for (const step of steps) {
        if (!step.id || stepIds.has(step.id)) throw new Error(`Ongeldig of dubbel ontdekpunt in ${item.id}: ${step.id}`);
        stepIds.add(step.id);
      }
    }
    if (!item.stories.length) throw new Error(`Verhalen ontbreken: ${item.id}`);
    const storyIds = new Set<string>();
    for (const story of item.stories) {
      if (!story.id || storyIds.has(story.id) || !story.title || !story.sections.length || story.sections.some(section => !section.paragraphs.length)) {
        throw new Error(`Ongeldig of dubbel verhaal in ${item.id}: ${story.id}`);
      }
      storyIds.add(story.id);
    }
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
