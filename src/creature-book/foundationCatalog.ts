import { creatures } from '../creatures';
import type { Creature as FolderCreature, BookId } from '../creatures/types';
import type { Creature, Category } from '../content/types';

// The existing foundation uses different names for the same three books.
export const foundationCategories: Record<BookId, Category> = { wonder: 'wonder', adventure: 'thrilling', dark: 'frightening' };

export function toFoundationCreature(creature: FolderCreature): Creature {
  return {
    id: creature.id, slug: creature.id, name: creature.name, alternativeName: creature.alternativeName,
    category: foundationCategories[creature.book], region: creature.region.displayName,
    tradition: creature.region.tradition ?? creature.region.name, summary: creature.introduction.shortText,
    status: 'available', age: creature.reading?.age ?? 'Leeftijd niet vermeld', readingMinutes: creature.reading?.minutes ?? 5,
    tags: [...(creature.tags ?? []), creature.name, creature.region.displayName, creature.book],
    artwork: { src: creature.cover, alt: creature.anatomy.imageAlt, width: 1536, height: 1024 },
    editorialNote: creature.stories[0]?.shortDescription ?? 'Een geïllustreerde vertelling.',
    sources: creature.folklore.sources?.length ? creature.folklore.sources.map(source => ({ ...source, note: 'Bron bij de folklore; het kinderverhaal is een eigen vertelling.' })) : [{ title: 'Redactionele toelichting', note: creature.stories[0]?.shortDescription ?? 'Historische bronnen zijn nog niet toegevoegd.' }],
    // This metadata supports foundation previews; the route uses CreatureBook.
    chapters: [{ id: 'ontmoeting', title: creature.introduction.title, kind: 'discovery',
      states: [{ id: 'intro', kind: 'illustration', caption: creature.introduction.title }],
      steps: [{ id: 'intro', visualState: 'intro', title: creature.introduction.title, paragraphs: [creature.introduction.shortText] }],
    }],
  };
}

export const folderCatalog = creatures.map(toFoundationCreature);
