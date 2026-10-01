// Kept outside the catalog so catalog metadata also works in Node tooling.
const stories = import.meta.glob('./*/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
export function getCreatureStory(id: string, file: string): string {
  const normalized = file.replace(/^\.\//, '');
  const story = stories[`./${id}/${normalized}`];
  if (story === undefined) throw new Error(`Verhaal ontbreekt: ${id}/${normalized}. Plaats het Markdown-bestand in de creature-map.`);
  return story;
}
