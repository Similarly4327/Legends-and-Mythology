import type { Artwork, Creature } from '../types';

const artwork: Artwork = {
  src: 'artwork/pegasus.webp', width: 1086, height: 1448,
  alt: 'Een wit gevleugeld paard op een rots boven een Griekse vallei, getekend in waterverf en fijne potloodlijnen.',
};

export const pegasus: Creature = {
  id: 'pegasus', slug: 'pegasus', name: 'Pegasus', alternativeName: 'Pegasos',
  category: 'wonder', region: 'Griekenland', tradition: 'Griekse mythologie',
  summary: 'Een paard met vleugels zo licht als de ochtend. Waar zijn hoef de aarde raakte, zou een bron van inspiratie zijn ontstaan.',
  status: 'available', age: '6+', readingMinutes: 5, artwork,
  tags: ['vleugels', 'hemel', 'inspiratie', 'Griekenland'],
  editorialNote: 'Een eigen, zachte vertelbewerking rond het motief van Pegasus en de bron Hippocrene. De reiziger en de dialoog zijn door ons bedacht.',
  sources: [{
    title: 'Pegasus & de bron Hippocrene — Theoi',
    url: 'https://www.theoi.com/Ther/HipposPegasos.html',
    note: 'Verzameling klassieke tekstfragmenten, waaronder Aratus en Strabo, over het gevleugelde paard en de bron op de berg Helicon. De oude verhalen kennen meerdere versies.',
  }],
  chapters: [
    {
      id: 'ontmoeting', title: 'Een paard van de hemel', kind: 'discovery',
      states: [
        { id: 'intro', kind: 'illustration', caption: 'Plaat I · Pegasus boven de Griekse bergen' },
        { id: 'anatomy', kind: 'anatomy', caption: 'Veldschets · Een onmogelijke anatomie', annotations: [
          { label: 'Vleugels van veren', x: 28, y: 23 },
          { label: 'Een paardenlichaam', x: 68, y: 50 },
          { label: 'De hoef die een bron opent', x: 35, y: 70 },
        ] },
      ],
      steps: [
        { id: 'kennismaking', visualState: 'intro', eyebrow: 'De eerste ontmoeting', title: 'Stel je een paard voor. En geef het de hemel.', paragraphs: [
          'Hoog boven de olijfbomen, waar de bergen blauw worden in de verte, beweegt iets wits. Geen wolk. Geen vogel. Een paard — met twee grote vleugels.',
          'De oude Grieken noemden hem Pegasos. Wij kennen hem als Pegasus: een wezen dat de grens tussen aarde en hemel moeiteloos overstapt.',
        ] },
        { id: 'vleugels', visualState: 'anatomy', eyebrow: 'Notities van de onderzoeker', title: 'Gebouwd voor het onmogelijke.', paragraphs: [
          'Een stevig paardenlichaam, sierlijke benen en veren die het licht vangen. In onze veldschets kijken we vooral naar wat Pegasus zo herkenbaar maakt: zijn vleugels.',
          'Een mythisch wezen hoeft niet te passen in de regels van de natuur. Juist dat maakt het zo fijn om erover te tekenen, te praten en te dromen.',
        ], note: 'Kijk samen: waar zou jij gaan zitten als je met Pegasus mocht meevliegen?' },
      ],
    },
    {
      id: 'veldnotities', title: 'Waar verhalen ontspringen', kind: 'field-notes',
      states: [
        { id: 'map', kind: 'map', caption: 'Verhalenkaart · Griekenland', location: { name: 'Helicon, Griekenland', context: 'De berg van de Muzen en de legendarische bron Hippocrene.', x: 54, y: 34 } },
        { id: 'traces', kind: 'traces', caption: 'Een spoor op papier · De bron Hippocrene', annotations: [{ label: 'Een bron tussen de rotsen', x: 66, y: 78 }] },
      ],
      steps: [
        { id: 'herkomst', visualState: 'map', eyebrow: 'Op de verhalenkaart', title: 'Een berg, een hoefdruk, een bron.', paragraphs: [
          'Ons spoor begint in Griekenland. Op de berg Helicon lag Hippocrene, een bron die in oude teksten verbonden is met de Muzen: de godinnen van kunst en inspiratie.',
          'Volgens een overgeleverd verhaal sprong het water tevoorschijn toen Pegasus met zijn hoef de rots raakte.',
        ], facts: [{ label: 'Herkomst', value: 'Griekse mythologie' }, { label: 'Bijzondere plek', value: 'De berg Helicon' }, { label: 'Motief', value: 'Water & inspiratie' }] },
        { id: 'sporen', visualState: 'traces', eyebrow: 'Een denkbeeldige veldnotitie', title: 'Wat zou hij achterlaten?', paragraphs: [
          'Geen echte voetafdruk in ons notitieboek, maar een vraag. Misschien een losse veer. Misschien een rimpeling in helder water. Of een idee dat plotseling begint te groeien.',
        ], note: 'De sporen en waarnemingen in dit bestiarium zijn speelse verbeelding, geen natuurkundige feiten.' },
      ],
    },
    {
      id: 'verhaal', title: 'De bron van een nieuw verhaal', kind: 'story',
      states: [
        { id: 'valley', kind: 'scene', caption: 'Een eigen vertelbewerking · De stille vallei' },
        { id: 'spring', kind: 'scene', caption: 'Een kleine bron, een groot begin', treatment: 'detail' },
      ],
      steps: [
        { id: 'stilte', visualState: 'valley', eyebrow: 'Ons verhaal · I', title: 'De reiziger die geen woorden vond.', paragraphs: [
          'Er was eens een jonge reiziger met een leeg notitieboek. Ze had bergen gezien, schepen geteld en naar vogels geluisterd. Toch wist ze niet waar haar eerste verhaal moest beginnen.',
          'Op een ochtend klom ze naar een stille plek tussen de rotsen. Daar stond een wit paard. De wind ritselde door zijn veren, alsof iemand zachtjes een bladzijde omsloeg.',
          '“Ik heb zoveel gezien,” zei ze, “maar ik weet niet wat ik moet schrijven.” Pegasus keek naar het boek. Toen keek hij naar de grond.',
        ] },
        { id: 'water', visualState: 'spring', eyebrow: 'Ons verhaal · II', title: 'Luister eerst eens.', paragraphs: [
          'Met één hoef tikte hij tegen de rots. Er klonk een klein geluid. Tik. En daarna een nog kleiner geluid: het druppelen van water.',
          'Tussen de stenen opende zich een bron. De reiziger ging zitten en luisterde. Het water klonk als een regenbui, als voetstappen, als iemand die een geheim vertelde.',
          'Ze pakte haar potlood. Deze keer schreef ze geen groot avontuur. Ze schreef over één druppel die de zee wilde zien. En terwijl ze schreef, verscheen er een glimlach op haar gezicht.',
        ] },
        { id: 'vertrek', visualState: 'valley', eyebrow: 'Ons verhaal · III', title: 'Een begin is soms heel klein.', paragraphs: [
          'Toen ze opkeek, steeg Pegasus al boven de vallei. Zijn vleugels vingen het vroege licht. Het boek was nog lang niet vol, maar de eerste bladzijde was begonnen.',
          'Sindsdien wachtte de reiziger niet meer op het grootste verhaal. Ze luisterde naar kleine dingen. Die hadden meestal het meeste te vertellen.',
        ], note: 'Praat samen: welk klein geluid zou het begin van jouw verhaal kunnen zijn?' },
      ],
    },
    {
      id: 'betekenis', title: 'Waarom we dit blijven vertellen', kind: 'folklore',
      states: [{ id: 'meaning', kind: 'illustration', caption: 'Een laatste blik · Ruimte voor verbeelding' }],
      steps: [{ id: 'folklore', visualState: 'meaning', eyebrow: 'Achter de legende', title: 'Verbeelding krijgt vleugels.', paragraphs: [
        'In klassieke teksten verbindt de bron Hippocrene Pegasus met de Muzen en inspiratie. Dat motief vormt het vertrekpunt van onze bewerking.',
        'De jonge reiziger hoort bij ons eigen verhaal. Haar inzicht — dat een klein detail genoeg kan zijn voor een begin — is onze gekozen leesvraag, geen vaste moraal uit de oudheid.',
      ] }],
    },
  ],
};
