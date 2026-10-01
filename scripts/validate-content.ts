import { creatures, validateCreatures } from '../src/content/repository';
import { creatures as folders } from '../src/creatures';
import { readFileSync } from 'node:fs';

const errors = validateCreatures(creatures);
for (const creature of folders) {
  if (creature.anatomy.facts.length < 5 || creature.anatomy.facts.length > 7) errors.push(`${creature.id}: verwacht 5–7 anatomiestappen`);
  if (creature.location.steps.length < 3 || creature.location.steps.length > 4) errors.push(`${creature.id}: verwacht 3–4 atlasstappen`);
  for (const step of creature.location.steps) {
    const atlas = step.atlas;
    if (!atlas || atlas.bounds[0] >= atlas.bounds[2] || atlas.bounds[1] >= atlas.bounds[3]) errors.push(`${creature.id}: geografische atlasfocus ontbreekt of is ongeldig`);
  }
  try {
    const story = readFileSync(new URL(`../src/creatures/${creature.id}/story.md`, import.meta.url), 'utf8');
    const words = story.trim().split(/\s+/).length;
    const minimum = creature.book === 'dark' ? 1200 : creature.book === 'adventure' ? 800 : 600;
    if (words < minimum) errors.push(`${creature.id}: verhaal lijkt nog een teaser (${words} woorden)`);
    if (creature.book === 'dark' && (story.match(/^## /gm)?.length ?? 0) < 3) errors.push(`${creature.id}: spanningsfasen ontbreken`);
    console.log(`${creature.name}: ${words} woorden`);
  } catch { errors.push(`${creature.id}: story.md ontbreekt`); }
}
if (errors.length) {
  console.error('Invalid bestiary content:\n' + errors.map((error) => `  - ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Content validated: ${creatures.length} registered creatures with stories and atlas sequences.`);
}
