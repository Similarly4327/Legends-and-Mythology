import type { Creature } from '../types';
const anatomy = new URL('./anatomy-engraving.webp', import.meta.url).href;
const map = new URL('./map.svg', import.meta.url).href;
const scene = new URL('./story-scene.webp', import.meta.url).href;

export const pegasus = {
  id: 'pegasus',
  name: 'Pegasus',
  alternativeName: 'Pegasos',
  tags: ['vleugels', 'hemel', 'inspiratie', 'Griekenland'],
  book: 'wonder',
  region: { name: 'Ancient Greece', displayName: 'Het oude Griekenland', tradition: 'Oud-Griekse mythologie' },
  reading: { age: '6+', minutes: 5 },
  introduction: {
    title: 'Het gevleugelde paard',
    shortText: 'Hoog boven de bergen, waar de wolken de aarde raken, vliegt een paard met vleugels zo licht als de wind.',
    invitation: 'Ontmoet Pegasus. Een wonderlijk wezen uit het oude Griekenland, en een symbool van grenzeloze verbeelding.',
  },
  cover: anatomy,
  anatomy: {
    title: 'Van hoef tot vleugelpunt',
    image: anatomy,
    imageAlt: 'Pegasus op een Griekse rotsheuvel, getekend met fijne sepia inktlijnen op perkament, met kleine studies van zijn veren en hoofd.',
    facts: [
      { title: 'Een paard dat de hemel koos', text: 'Stel je een paard voor dat niet stopt aan de rand van een berg. Pegasus spreidt zijn vleugels en vliegt verder, de wolken tegemoet.', label: 'Een eerste ontmoeting' },
      { title: 'Vleugels vol verwondering', text: 'Twee grote vleugels, bedekt met zachte veren. In de verhalen dragen ze Pegasus van de aarde naar de wereld van de goden.', label: 'De vleugels', focus: { x: 32, y: 27 } },
      { title: 'De kracht van een paard', text: 'Onder die wonderlijke vleugels schuilt het lichaam van een krachtig paard. Zijn hoeven kunnen iets bijzonders: op de berg Helikon laten ze een bron ontspringen.', label: 'Het lichaam', focus: { x: 54, y: 58 } },
      { title: 'Tussen bergen en sterren', text: 'Pegasus hoort thuis in verhalen over hoge bergen en de hemel. Later kreeg ook een sterrenbeeld zijn naam. Misschien vind je hem ooit aan de nachtelijke hemel.', label: 'Zijn wereld', focus: { x: 70, y: 76 } },
    ],
  },
  location: {
    image: map,
    imageAlt: 'Een gestileerde kaart van Griekenland en de Egeïsche Zee met de berg Helikon aangegeven.',
    title: 'Waar het verhaal begon',
    steps: [
      { title: 'Het oude Griekenland', text: 'De verhalen over Pegasus komen uit de Griekse mythologie. Een wereld van eilanden, hoge bergen en goden die dicht bij de mensen stonden.', label: 'De oorsprong', focus: { x: 43, y: 47 } },
      { title: 'Een bron op de berg Helikon', text: 'Op de berg Helikon lag Hippokrene: de paardenbron. Volgens de mythe ontsprong die waar Pegasus met zijn hoef de rots raakte.', label: 'Een bijzondere plek', focus: { x: 43, y: 62 } },
      { title: 'Een plek voor inspiratie', text: 'Helikon was verbonden met de Muzen, de godinnen van kunst en poëzie. Zo werd ook Pegasus verbonden met de inspiratie die een verhaal tot leven brengt.', label: 'Een spoor van folklore', focus: { x: 43, y: 62 } },
    ],
  },
  folklore: {
    title: 'Verhalen die blijven vliegen.',
    origin: 'Pegasus verschijnt in oude Griekse verhalen. Hij wordt geboren wanneer Perseus Medusa verslaat. Zijn naam duikt al op in de Theogonie van de dichter Hesiodos.',
    role: 'De held Bellerophon rijdt op Pegasus in zijn strijd met de Chimaira. In andere verhalen draagt het gevleugelde paard de bliksem van Zeus.',
    meaning: 'Een paard dat kan vliegen: het is een beeld dat blijft verwonderen. Door de eeuwen heen werd Pegasus verbonden met poëzie, inspiratie en de vrijheid van de verbeelding.',
    moral: 'Verbeelding kan je verder brengen dan je voeten ooit kunnen lopen.',
    sources: [
      { title: 'Hesiodos — Theogonie, 270–286', url: 'https://www.theoi.com/Text/HesiodTheogony.html' },
      { title: 'Pausanias — Beschrijving van Griekenland, 9.31', url: 'https://www.theoi.com/Text/Pausanias9B.html' },
    ],
  },
  story: { file: './story.md', image: scene, imageAlt: 'Pegasus bij een bergbron, tussen groene heuvels en cipressen op de berg Helikon.', note: 'Een vrije vertelling, geïnspireerd op de mythe van Hippokrene.' },
} satisfies Creature;
