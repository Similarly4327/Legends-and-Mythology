import type { Artwork, Creature } from '../types';

const artwork: Artwork = {
  src: 'artwork/rain.webp', width: 1086, height: 1448,
  alt: 'Een Japanse straat in de regen, met warm lantaarnlicht en heel ver weg een kleine, onherkenbare figuur onder een paraplu.',
};

export const kuchisakeOnna: Creature = {
  id: 'kuchisake-onna', slug: 'kuchisake-onna', name: 'Kuchisake-onna',
  alternativeName: 'Een stem in de regen', category: 'frightening',
  region: 'Japan', tradition: 'Japanse stadslegende',
  summary: 'Een regenachtige straat. Een figuur in de verte. Een verhaal dat laat zien hoe geruchten hun eigen schaduw kunnen werpen.',
  status: 'available', age: '12+', readingMinutes: 3, artwork,
  tags: ['Japan', 'stadslegende', 'regen', 'geruchten'],
  warning: {
    title: 'Sommige verhalen vragen om samen lezen.',
    description: 'Dit veldverslag hoort bij het zwarte boek. Deze korte bewerking gebruikt alleen regen, afstand en onzekerheid. Lees eerst als ouder mee en kies samen of deze sfeer bij jullie past. De leeftijd is een redactionele indicatie.',
  },
  editorialNote: 'Een niet-expliciete sfeerstudie, geen volledige navertelling. De straat, paraplu en thuiskomst zijn onze eigen invulling; de oorspronkelijke angstaanjagende onthulling wordt niet weergegeven.',
  sources: [{
    title: 'Japanse stadslegenden — Nippon.com',
    url: 'https://www.nippon.com/en/japan-topics/g00789/japanese-urban-legends-from-the-slit-mouthed-woman-to-kisaragi-station.html',
    note: 'Interview met folklorist Iikura Yoshiyuki over het ontstaan en verspreiden van de stadslegende eind jaren zeventig. De externe bron bespreekt ook de explicietere oorspronkelijke versie.',
  }],
  chapters: [
    {
      id: 'regen', title: 'Een stem in de regen', kind: 'story',
      states: [
        { id: 'street', kind: 'scene', caption: 'Sfeerstudie · Alleen de regen', treatment: 'distant' },
        { id: 'silhouette', kind: 'scene', caption: 'Een figuur aan het eind van de straat', treatment: 'natural' },
        { id: 'lantern', kind: 'scene', caption: 'Het licht bij de deur', treatment: 'near' },
      ],
      steps: [
        { id: 'straat', visualState: 'street', eyebrow: 'Sfeerstudie · I', title: 'De straat werd stil.', paragraphs: [
          'De regen maakte stippen op de stenen. Achter de ramen ging één voor één het licht aan. Je hoorde een fietsbel in de verte, en daarna alleen nog water.',
          'Het was dezelfde straat als altijd. Toch leek het einde vandaag verder weg.',
        ] },
        { id: 'afstand', visualState: 'silhouette', eyebrow: 'Sfeerstudie · II', title: 'Er stond iemand onder een paraplu.', paragraphs: [
          'Een kleine figuur, zo ver weg dat je geen gezicht kon zien. Misschien wachtte ze op iemand. Misschien luisterde ze ook naar de regen.',
          'Eerder die middag had iemand een vreemd verhaal verteld. Nu maakte je hoofd van elke schaduw een nieuwe vraag.',
        ], note: 'Je mag hier stoppen. Een spannend boek hoeft niet in één keer uit.' },
        { id: 'licht', visualState: 'lantern', eyebrow: 'Sfeerstudie · III', title: 'De deur ging open.', paragraphs: [
          '“Daar ben je.” Een bekende stem. Warm licht viel op de natte stoep. Je liep naar binnen en zette je schoenen naast de deur.',
          'Toen je nog één keer omkeek, zag je de regen, de straat en een paraplu die langzaam verder ging. Het verhaal in je hoofd bleef nog even hangen. Daar konden jullie samen over praten.',
        ] },
      ],
    },
    {
      id: 'context', title: 'Hoe een gerucht een legende wordt', kind: 'folklore',
      states: [{ id: 'map', kind: 'map', caption: 'Verhalenkaart · Japan', location: { name: 'Japan', context: 'Een moderne stadslegende die eind jaren zeventig breed bekend werd.', x: 84, y: 39 } }],
      steps: [{ id: 'folklore', visualState: 'map', eyebrow: 'Achter de stadslegende', title: 'Verhalen reizen ook door straten.', paragraphs: [
        'Volgens folklorist Iikura Yoshiyuki verspreidde de legende van Kuchisake-onna zich eind jaren zeventig door Japan. Het verhaal veranderde terwijl mensen het doorvertelden.',
        'Ons korte verhaal laat alleen zien hoe een gerucht de blik op een gewone straat kan veranderen. We hebben de oorspronkelijke ontmoeting en onthulling weggelaten.',
      ], note: 'Praat samen: hoe kun je ontdekken of een spannend verhaal ook werkelijk gebeurd is?' }],
    },
  ],
};
