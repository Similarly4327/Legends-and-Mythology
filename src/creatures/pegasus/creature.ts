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
  reading: { age: '5+', minutes: 5 },
  introduction: {
    title: 'Pegasus van dichtbij',
    shortText: 'Pegasus lijkt op een groot wit paard. Maar kijk eens goed… hij heeft enorme vleugels!',
    invitation: '',
  },
  cover: anatomy,
  anatomy: {
    title: 'Pegasus van dichtbij',
    intro: 'Pegasus lijkt op een groot wit paard. Maar kijk eens goed… hij heeft enorme vleugels!',
    image: anatomy,
    imageAlt: 'Pegasus op een Griekse rotsheuvel, getekend met fijne sepia inktlijnen op perkament, met studies van zijn veren en hoofd.',
    facts: [
      { id: 'wings', title: 'Vleugels', text: 'Zijn vleugels zijn bedekt met lange veren. In de oude verhalen kan Pegasus ermee hoog boven bergen en wolken vliegen.' },
      { id: 'hooves', title: 'Hoeven', text: 'Pegasus heeft sterke paardenhoeven. In één beroemd verhaal slaat hij met een hoef tegen een berg en springt er water uit de rots.' },
      { id: 'mane', title: 'Manen', text: 'Zijn lange manen waaien achter hem aan wanneer hij rent of vliegt.' },
      { id: 'feathers', title: 'Veren', text: 'Een veer van zo’n grote vleugel zou bijna zo lang kunnen zijn als de arm van een kind.' },
      { id: 'strength', title: 'Kracht', text: 'Om met zo’n groot lichaam op te stijgen, stellen we Pegasus voor met een sterke borst en krachtige benen.' },
      { id: 'wild', title: 'Wild wezen', text: 'Pegasus is geen gewoon rijpaard. In de verhalen is hij wild en laat hij zich niet zomaar benaderen.' },
    ],
    question: 'Kun jij op de prent de hoefafdruk, de losse veer en Pegasus tussen de wolken vinden?',
  },
  location: {
    image: map,
    imageAlt: 'Een oude kaart van Griekenland en de Egeïsche Zee.',
    title: 'De wereld van Pegasus',
    intro: 'De verhalen over Pegasus komen uit het oude Griekenland. Bergen, bronnen, tempels en steden spelen allemaal een rol.',
    steps: [
      { id: 'corinth', title: 'Korinthe', text: 'Bij de oude stad Korinthe lag een beroemde bron. Hier zou de held Bellerophon Pegasus hebben gevonden.' },
      { id: 'peirene', title: 'De bron van Peirene', text: 'Pegasus kwam volgens het verhaal drinken bij deze bron. Bellerophon moest heel voorzichtig zijn om dichtbij te kunnen komen.' },
      { id: 'helikon', title: 'Berg Helikon', text: 'Op deze berg ontstond volgens een oud verhaal een nieuwe bron toen Pegasus met zijn hoef op de rots stampte.' },
      { id: 'mountains', title: 'De hoge bergen', text: 'Van bovenaf kon Pegasus volgens de verhalen over dalen, steden en de zee vliegen.' },
      { id: 'olympus', title: 'Olympus', text: 'In latere verhalen hoort Pegasus zelfs bij de wereld van de goden hoog op de Olympus.' },
    ],
    question: 'Kun jij op de kaart een tempel, een haven, een bron, een witte veer en een vliegende Pegasus ontdekken?',
  },
  folklore: {
    title: 'Waar komt de legende vandaan?',
    intro: 'Pegasus is bedacht in de oude Griekse mythologie. Mensen vertellen al meer dan tweeduizend jaar verhalen over het gevleugelde paard.',
    notes: [
      { id: 'old-greek-story', title: 'Een heel oud Grieks verhaal', text: 'In één oud verhaal verschijnt Pegasus nadat de held Perseus het monster Medusa heeft verslagen. Pegasus vliegt daarna de wereld in.' },
      { id: 'bellerophon', title: 'Bellerophon', text: 'Later probeert de held Bellerophon Pegasus te berijden. Met hulp van de godin Athena en een gouden teugel lukt het hem om Pegasus te benaderen.' },
      { id: 'chimaira', title: 'Een monster verslaan', text: 'Bellerophon en Pegasus beleven samen een beroemd avontuur tegen de Chimaira: een monster dat volgens de verhalen vuur kon spuwen.' },
      { id: 'spring', title: 'Een bron uit de rots', text: 'Pegasus wordt ook verbonden met de bron Hippocrene op de berg Helikon. Volgens de legende ontstond die toen hij met zijn hoef tegen de rots sloeg.' },
      { id: 'stars', title: 'Tussen de sterren', text: 'Er bestaat ook een sterrenbeeld dat Pegasus heet. Daardoor kun je zijn naam vandaag nog aan de nachtelijke hemel tegenkomen.' },
    ],
    closing: 'We weten natuurlijk dat Pegasus een wezen uit verhalen is. Maar juist daarom konden mensen eeuwenlang steeds nieuwe avonturen over hem vertellen.',
    sources: [
      { title: 'Hesiodos — Theogonie, 270–286', url: 'https://www.theoi.com/Text/HesiodTheogony.html' },
      { title: 'Pausanias — Beschrijving van Griekenland, 9.31', url: 'https://www.theoi.com/Text/Pausanias9B.html' },
    ],
  },
  stories: [{
    id: 'pegasus-bij-de-bron',
    title: 'Pegasus bij de bron',
    shortDescription: 'Lang geleden lag tussen de heuvels een kleine bron met helder, koud water.',
    image: scene,
    imageAlt: 'Pegasus bij een bergbron, tussen groene heuvels en cipressen op de berg Helikon.',
    tone: 'Een warm, rustig verhaal dat klinkt alsof een oude herder het bij het vuur vertelt.',
    sections: [
      { paragraphs: [
        'Lang geleden lag tussen de heuvels een kleine bron met helder, koud water.',
        'Overdag kwamen er herders met hun dieren. Maar vroeg in de ochtend was het er stil. Zo stil dat je alleen het water tussen de stenen hoorde lopen.',
        'Op een ochtend vonden de mensen vreemde sporen naast de bron.',
        'Het leken hoefafdrukken van een paard.',
        'Maar tussen de stenen lagen ook twee grote witte veren.',
        '“Een paard met veren?” vroeg een jongen uit het dorp.',
        'Een oude herder keek naar de bergen.',
        '“Mijn opa vertelde daar vroeger een verhaal over,” zei hij. “Over een wit paard dat uit de wolken kwam.”',
      ] },
      { paragraphs: [
        'De volgende ochtend gingen de mensen niet naar de bron. Ze bleven op afstand.',
        'En toen de zon net boven de bergen kwam, bewoog er iets tussen de wolken.',
        'Twee grote vleugels spreidden zich uit.',
        'Pegasus daalde naar beneden en landde zacht bij het water.',
        'Hij dronk uit de bron. Zijn vleugels glansden in het ochtendlicht en zijn lange manen bewogen in de wind.',
      ] },
      { paragraphs: [
        'Niemand liep naar hem toe.',
        'Niemand probeerde hem te vangen.',
        'Ze keken alleen.',
        'Na een tijdje tilde Pegasus zijn hoofd op.',
        'Hij spreidde zijn vleugels.',
        'Woesh!',
        'Water spatte over de stenen en een paar witte veren dwarrelden naar beneden.',
        'Even later was Pegasus alweer hoog boven de bergen.',
      ] },
      { paragraphs: [
        'Sinds die ochtend vertelde het dorp het verhaal steeds opnieuw.',
        'En als er bij de bron een grote witte veer werd gevonden?',
        'Dan zei de oude herder altijd hetzelfde:',
        '“Misschien is hij vannacht weer langs geweest.”',
      ] },
    ],
  }],
} satisfies Creature;
