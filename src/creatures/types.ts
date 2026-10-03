export type BookId = 'wonder' | 'adventure' | 'dark';

export interface DiscoveryStep {
  id: string;
  title: string;
  text: string;
}

export interface CreatureStory {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  tone: string;
  sections: { paragraphs: string[] }[];
}

export interface FolkloreNote {
  id: string;
  title: string;
  text: string;
}

export interface Creature {
  id: string;
  name: string;
  alternativeName?: string;
  tags?: string[];
  book: BookId;
  region: { name: string; displayName: string; tradition?: string };
  reading?: { age: string; minutes: number };
  introduction: { title: string; shortText: string; invitation: string };
  cover: string;
  anatomy: { title: string; intro: string; image: string; imageAlt: string; facts: DiscoveryStep[]; question: string };
  location: { image: string; imageAlt: string; title: string; intro: string; steps: DiscoveryStep[]; question: string };
  folklore: { title: string; intro: string; notes: FolkloreNote[]; closing: string; sources?: { title: string; url: string }[] };
  stories: CreatureStory[];
}

export const books: { id: BookId; title: string; subtitle: string; numeral: string }[] = [
  { id: 'wonder', title: 'Het boek der verwondering', subtitle: 'Licht, vleugels & wonderen', numeral: 'I' },
  { id: 'adventure', title: 'Het boek der avonturen', subtitle: 'Helden, reizen & geheimen', numeral: 'II' },
  { id: 'dark', title: 'Het boek der schaduwen', subtitle: 'Schemering, folklore & spanning', numeral: 'III' },
];
