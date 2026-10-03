import { books } from './books';
import { folderCatalog } from '../creature-book/foundationCatalog';
import { draak } from './creatures/draak';
import { kuchisakeOnna } from './creatures/kuchisake-onna';
import { categories } from './types';
import type { Category, Creature } from './types';

export const creatures: readonly Creature[] = [...folderCatalog, draak, kuchisakeOnna];

export function isCategory(value: string | undefined): value is Category {
  return categories.some((category) => category === value);
}

export function getBook(category: string | undefined) {
  return books.find((book) => book.id === category);
}

export function getCreature(slug: string | undefined, entries = creatures): Creature | undefined {
  return entries.find((creature) => creature.slug === slug && creature.status !== 'draft');
}

export function getBookCreatures(category: Category, entries = creatures): Creature[] {
  return entries.filter((creature) => creature.category === category && creature.status !== 'draft');
}

export function searchCreatures(entries: readonly Creature[], query: string): Creature[] {
  const normalized = query.trim().toLocaleLowerCase('nl');
  return entries.filter((creature) => [creature.name, creature.alternativeName ?? '', creature.region, ...creature.tags]
    .join(' ').toLocaleLowerCase('nl').includes(normalized));
}

/** Adjacent published entries across volumes; every destination keeps its own theme/gate. */
export function getCreatureNeighbors(slug: string, entries = creatures) {
  const available = entries.filter((creature) => creature.status === 'available');
  const index = available.findIndex((creature) => creature.slug === slug);
  return index < 0 ? {} : { previous: available[index - 1], next: available[index + 1] };
}

export function validateCreatures(entries: readonly Creature[]): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  const slugs = new Set<string>();
  for (const creature of entries) {
    const label = creature.slug || creature.id || 'onbekend';
    if (ids.has(creature.id)) errors.push(`${label}: duplicate id`);
    if (slugs.has(creature.slug)) errors.push(`${label}: duplicate slug`);
    ids.add(creature.id);
    slugs.add(creature.slug);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(creature.slug)) errors.push(`${label}: invalid slug`);
    if (!isCategory(creature.category)) errors.push(`${label}: invalid category`);
    if (!['draft', 'available', 'locked', 'coming-soon'].includes(creature.status)) errors.push(`${label}: invalid status`);
    if (!creature.name || !creature.summary || !creature.region || !creature.age) errors.push(`${label}: missing metadata`);
    if (creature.status === 'available' && creature.chapters.length === 0) errors.push(`${label}: available entry needs chapters`);
    if (creature.status === 'available' && creature.sources.length === 0) errors.push(`${label}: available entry needs source notes`);
    const chapterIds = new Set<string>();
    for (const chapter of creature.chapters) {
      if (chapterIds.has(chapter.id)) errors.push(`${label}: duplicate chapter id ${chapter.id}`);
      chapterIds.add(chapter.id);
      const stateIds = new Set(chapter.states.map((state) => state.id));
      if (stateIds.size !== chapter.states.length) errors.push(`${label}/${chapter.id}: duplicate state id`);
      if (chapter.steps.length === 0) errors.push(`${label}/${chapter.id}: empty chapter`);
      const stepIds = new Set<string>();
      for (const step of chapter.steps) {
        if (stepIds.has(step.id)) errors.push(`${label}/${chapter.id}: duplicate step id`);
        stepIds.add(step.id);
        if (!stateIds.has(step.visualState)) errors.push(`${label}/${chapter.id}/${step.id}: unknown visual state`);
        if (!step.title || step.paragraphs.length === 0) errors.push(`${label}/${chapter.id}/${step.id}: missing text`);
      }
      for (const state of chapter.states) {
        if (state.kind === 'map' && !state.location) errors.push(`${label}/${chapter.id}/${state.id}: map needs a location`);
        if (state.annotations?.some((annotation) => annotation.x < 0 || annotation.x > 100 || annotation.y < 0 || annotation.y > 100)) errors.push(`${label}/${chapter.id}/${state.id}: invalid annotation position`);
      }
      for (const art of [creature.artwork, ...chapter.states.map((state) => state.artwork)]) {
        if (art && (!art.alt || art.width <= 0 || art.height <= 0)) errors.push(`${label}: artwork needs alt and positive dimensions`);
      }
    }
  }
  return errors;
}
