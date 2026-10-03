export type BookId = 'wonder' | 'adventure' | 'dark';

export interface DiscoveryStep {
  title: string;
  text: string;
  label?: string;
  focus?: { x: number; y: number };
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
  anatomy: { title: string; image: string; imageAlt: string; facts: DiscoveryStep[] };
  location: { image: string; imageAlt: string; title: string; steps: DiscoveryStep[] };
  folklore: { title: string; origin: string; role: string; meaning: string; moral?: string; sources?: { title: string; url: string }[] };
  story: { file: string; image: string; imageAlt: string; note?: string };
}

export const books: { id: BookId; title: string; subtitle: string; numeral: string }[] = [
  { id: 'wonder', title: 'Het boek der verwondering', subtitle: 'Licht, vleugels & wonderen', numeral: 'I' },
  { id: 'adventure', title: 'Het boek der avonturen', subtitle: 'Helden, reizen & geheimen', numeral: 'II' },
  { id: 'dark', title: 'Het boek der schaduwen', subtitle: 'Schemering, folklore & spanning', numeral: 'III' },
];
