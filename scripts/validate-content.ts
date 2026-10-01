import { creatures, validateCreatures } from '../src/content/repository';

const errors = validateCreatures(creatures);
if (errors.length) {
  console.error('Invalid bestiary content:\n' + errors.map((error) => `  - ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Content validated: ${creatures.length} creatures, ${creatures.reduce((total, creature) => total + creature.chapters.length, 0)} chapters.`);
}
