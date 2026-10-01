export const categories = ['wonder', 'thrilling', 'frightening'] as const;
export type Category = (typeof categories)[number];
export type CreatureStatus = 'draft' | 'available' | 'locked' | 'coming-soon';

export interface Artwork {
  /** Paths are relative to public/ and resolved against Vite's BASE_URL. */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Annotation {
  label: string;
  x: number;
  y: number;
}

export interface MapLocation {
  name: string;
  context: string;
  /** Simplified SVG coordinates, not a geographic projection. */
  x: number;
  y: number;
}

export interface VisualState {
  id: string;
  kind: 'illustration' | 'anatomy' | 'map' | 'traces' | 'scene';
  caption: string;
  artwork?: Artwork;
  annotations?: Annotation[];
  location?: MapLocation;
  treatment?: 'natural' | 'distant' | 'near' | 'detail';
}

export interface StoryStep {
  id: string;
  visualState: string;
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  note?: string;
  facts?: { label: string; value: string }[];
}

export interface Chapter {
  id: string;
  title: string;
  kind: 'discovery' | 'field-notes' | 'story' | 'folklore';
  states: VisualState[];
  steps: StoryStep[];
}

export interface SourceNote {
  title: string;
  url?: string;
  note: string;
}

export interface Creature {
  id: string;
  slug: string;
  name: string;
  alternativeName?: string;
  category: Category;
  region: string;
  tradition: string;
  summary: string;
  status: CreatureStatus;
  age: string;
  readingMinutes: number;
  artwork?: Artwork;
  tags: string[];
  chapters: Chapter[];
  sources: SourceNote[];
  editorialNote: string;
  warning?: { title: string; description: string };
  packageId?: string;
  entitlementId?: string;
}

export interface Book {
  id: Category;
  volume: string;
  title: string;
  shortTitle: string;
  nickname: string;
  description: string;
  invitation: string;
  age: string;
  mood: string;
  emblem: 'pegasus' | 'dragon' | 'moon';
}
