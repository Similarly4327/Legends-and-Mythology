import type { Artwork, Creature } from '../types';

const artwork: Artwork = {
  src: 'artwork/draak.webp', width: 1086, height: 1448,
  alt: 'Een grote mosgroene draak met koperkleurige vleugels op een bergrots, met een vervallen toren in de verte.',
};

export const draak: Creature = {
  id: 'draak', slug: 'draak', name: 'Draak', alternativeName: 'De wachter op de berg',
  category: 'thrilling', region: 'Europa', tradition: 'Europese verhalen & middeleeuwse verbeelding',
  summary: 'Geschubde vleugels, een waakzaam oog en een geheim onder de berg. Niet iedere schat glinstert, en niet iedere draak wil vechten.',
  status: 'available', age: '8+', readingMinutes: 5, artwork,
  tags: ['bergen', 'vleugels', 'schat', 'Europa', 'avontuur'],
  editorialNote: 'Een eigen verhaal over een denkbeeldige Europese draak. De anatomie, berg en zaadverzameling zijn creatieve invulling, geen navertelling van één historische legende.',
  sources: [{
    title: 'The Anatomy of a Dragon — British Library',
    url: 'https://www.bl.uk/stories/blogs/posts/the-anatomy-of-a-dragon',
    note: 'Voorbeelden van uiteenlopende draken in middeleeuwse handschriften. Er bestaat geen enkele vaste drakenanatomie.',
  }, {
    title: 'Beowulf online — British Library',
    url: 'https://www.bl.uk/stories/blogs/posts/beowulf-online',
    note: 'Het schatbewakersmotief komt onder meer voor in Beowulf. Ons verhaal gebruikt het motief, maar vertelt een nieuw avontuur.',
  }],
  chapters: [
    {
      id: 'ontmoeting', title: 'De wachter op de berg', kind: 'discovery',
      states: [
        { id: 'intro', kind: 'illustration', caption: 'Plaat II · Een Europese draak' },
        { id: 'anatomy', kind: 'anatomy', caption: 'Veldschets · Schubben en vleugels', annotations: [
          { label: 'Vleugels als gespannen zeilen', x: 23, y: 22 },
          { label: 'Een waakzaam oog', x: 59, y: 28 },
          { label: 'Een lange, gekrulde staart', x: 33, y: 73 },
        ] },
      ],
      steps: [
        { id: 'kennismaking', visualState: 'intro', eyebrow: 'De eerste ontmoeting', title: 'Eerst zie je de berg. Dan beweegt de berg.', paragraphs: [
          'Wat je voor mos hield, blijken schubben. Wat op een uitstekende rots leek, is een hoorn. Een oog gaat open, goudkleurig en heel, heel wakker.',
          'Draken hebben in Europese verhalen vele gedaanten. De draak in ons notitieboek heeft vleugels, vier poten en een staart die om de rotsen krult.',
        ] },
        { id: 'uiterlijk', visualState: 'anatomy', eyebrow: 'Notities van de onderzoeker', title: 'Geen twee draken zijn hetzelfde.', paragraphs: [
          'In oude tekeningen kan een draak op een slang lijken, op een dier met poten of op een gevleugeld mengwezen. Onze illustratie kiest één mogelijke fantasievorm.',
          'Bekijk de vleugel: dun als een zeil, sterk als een gedachte die je niet loslaat. Zo zou onze bergwachter de lucht kunnen lezen.',
        ], note: 'Deze anatomie is verbeelding. Welke vorm zou jouw draak hebben?' },
      ],
    },
    {
      id: 'veldnotities', title: 'Aan de rand van de kaart', kind: 'field-notes',
      states: [
        { id: 'map', kind: 'map', caption: 'Verhalenkaart · Europa', location: { name: 'Europa', context: 'Een brede verhalentraditie; onze berg heeft geen echte vindplaats.', x: 48, y: 28 } },
        { id: 'traces', kind: 'traces', caption: 'Denkbeeldige sporen · Een verlaten toren', annotations: [{ label: 'De toren onder de berg', x: 79, y: 60 }] },
      ],
      steps: [
        { id: 'gebied', visualState: 'map', eyebrow: 'Op de verhalenkaart', title: 'Waar de paden dunner worden.', paragraphs: [
          'Voor dit avontuur zetten we een stip bij Europa. Het is een verhalenkaart: geen bewijs dat ergens een draak woont, maar een manier om tradities te plaatsen.',
          'Onze draak waakt over een denkbeeldige berg. Een smal pad leidt naar een oude toren en een deur die al jaren gesloten is.',
        ], facts: [{ label: 'Traditie', value: 'Europese drakenverhalen' }, { label: 'Verhaalmotief', value: 'De schatbewaker' }, { label: 'Onze omgeving', value: 'Een verzonnen berg' }] },
        { id: 'sporen', visualState: 'traces', eyebrow: 'Een denkbeeldige veldnotitie', title: 'Een spoor hoeft niet luid te zijn.', paragraphs: [
          'Een steen die iets warmer voelt. Een afdruk in zachte aarde. Vleugelschaduw over de toren. In onze verbeelding zijn dit aanwijzingen om even stil te worden en goed te kijken.',
        ] },
      ],
    },
    {
      id: 'verhaal', title: 'De schat die niet glinsterde', kind: 'story',
      states: [
        { id: 'watcher', kind: 'scene', caption: 'Een eigen avontuur · De bergwachter' },
        { id: 'eye', kind: 'scene', caption: 'Een blik van dichtbij', treatment: 'detail' },
      ],
      steps: [
        { id: 'pad', visualState: 'watcher', eyebrow: 'Ons verhaal · I', title: 'Iedereen had een waarschuwing.', paragraphs: [
          '“Ga niet naar de toren,” zei de bakker. “Daar ligt een schat,” fluisterde een buurjongen. “En een draak,” voegde hij er iets zachter aan toe.',
          'Mara nam geen zwaard mee. Ze nam een broodje, een lege tas en een vraag. Want als iedereen hetzelfde verhaal vertelde, wilde ze weten wie het eigenlijk had gezien.',
          'Boven op de berg hoorde ze een diepe ademhaling. De draak lag voor de deur van de toren. Zijn staart blokkeerde het pad.',
        ] },
        { id: 'vraag', visualState: 'eye', eyebrow: 'Ons verhaal · II', title: '“Wat bewaak je?”', paragraphs: [
          'De draak opende één oog. “Dat vraagt bijna niemand,” zei hij. Zijn stem klonk als stenen die langzaam over elkaar schoven.',
          'Mara bleef op afstand. “Mag ik kijken?” De draak zweeg zo lang dat ze haar broodje bijna helemaal opat. Toen schoof hij opzij.',
          'In de toren lagen geen gouden munten. Er stonden houten kistjes. In elk kistje zat een ander zaad: klein, groot, glad, gerimpeld. “Van de bomen die hier ooit groeiden,” zei de draak.',
        ] },
        { id: 'schat', visualState: 'watcher', eyebrow: 'Ons verhaal · III', title: 'Sommige schatten moeten groeien.', paragraphs: [
          'Mara keek naar de kale helling. “Een schat in een kist blijft een kist vol schat,” zei ze. “Maar een zaadje in de aarde kan een boom worden.”',
          'De volgende ochtend kwamen ze samen naar buiten: een meisje met een tas, een draak met een lange schaduw. Ze plantten drie zaadjes. Daarna nog drie.',
          'Beneden in het dorp bleven mensen over de gevaarlijke berg praten. Mara luisterde, keek omhoog en zag voor het eerst een klein groen puntje tussen de stenen.',
        ], note: 'Praat samen: kun je voorzichtig zijn én nieuwsgierig blijven?' },
      ],
    },
    {
      id: 'betekenis', title: 'Wat een draak kan bewaren', kind: 'folklore',
      states: [{ id: 'meaning', kind: 'illustration', caption: 'Achter het avontuur · De betekenis van een schat' }],
      steps: [{ id: 'folklore', visualState: 'meaning', eyebrow: 'Achter de legende', title: 'Een oud motief, een nieuw gesprek.', paragraphs: [
        'Een draak die een schat bewaakt is een bekend verhaalmotief, bijvoorbeeld in Beowulf. Middeleeuwse beelden tonen bovendien een grote verscheidenheid aan drakenvormen.',
        'Mara, de zaadjes en de vriendelijke afloop zijn onze eigen bewerking. We gebruiken het oude motief om te praten over voorzichtigheid, nieuwsgierigheid en wat je waardevol vindt.',
      ] }],
    },
  ],
};
