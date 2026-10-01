import { pegasus } from './pegasus/creature';
import { validateCreatures } from './registry';

export const creatures = validateCreatures([pegasus]);
