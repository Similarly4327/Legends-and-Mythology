import type { Creature } from '../types';
const anatomy = new URL('./anatomy-engraving.webp', import.meta.url).href;
const scene = new URL('./story-scene.webp', import.meta.url).href;

export const pegasus = {
  "id": "pegasus",
  "name": "Pegasus",
  "alternativeName": "Pegasos",
  "book": "wonder",
  "tags": ["vleugels","hemel","inspiratie","Griekenland",
    "Pegasus",
    "Het oude Griekenland",
    "Het gevleugelde paard"
  ],
  "region": {
    "name": "Het oude Griekenland",
    "displayName": "Het oude Griekenland",
    "tradition": "Oud-Griekse mythologie"
  },
  "reading": {
    "age": "6+",
    "minutes": 6
  },
  "introduction": {
    "title": "Het gevleugelde paard",
    "shortText": "Hoog boven de bergen, waar de wolken de aarde raken, vliegt een paard met vleugels zo licht als de wind.",
    "invitation": "Volg Eleni naar een bergbron waar een verloren lied een nieuw begin vindt."
  },
  "cover": anatomy,
  "anatomy": {
    "image": anatomy,
    "title": "Een wezen, stap voor stap",
    "imageAlt": "Pegasus als sepia gravure op een Griekse rotsheuvel.",
    "facts": [
      {
        "title": "Eerst het paard",
        "text": "Onder de vleugels herken je een paard: een lange hals, een krachtig lichaam en vier hoeven. De oude teksten geven geen vaste meetbare grootte.",
        "label": "Eerst het paard",
        "focus": {
          "x": 52,
          "y": 60
        }
      },
      {
        "title": "Een waakzame kop",
        "text": "Onze plaat toont een paardengezicht met een rustige blik. Het witte uiterlijk volgt een veelgebruikte beeldtraditie, geen kleurvoorschrift voor alle antieke verhalen.",
        "label": "Een waakzame kop",
        "focus": {
          "x": 65,
          "y": 36
        }
      },
      {
        "title": "Veren die de lucht dragen",
        "text": "Twee gevederde vleugels maken Pegasus anders dan een gewoon paard. In de mythen vliegt hij tussen de wereld van mensen en die van goden.",
        "label": "Veren die de lucht dragen",
        "focus": {
          "x": 32,
          "y": 27
        }
      },
      {
        "title": "Een hoef en een bron",
        "text": "Pausanias verbindt Hippokrene op Helikon met een hoefslag van Pegasus. Het water is een mythologisch spoor, geen biologisch kenmerk.",
        "label": "Een hoef en een bron",
        "focus": {
          "x": 50,
          "y": 77
        }
      },
      {
        "title": "Met Bellerophon",
        "text": "Pegasus draagt Bellerophon tegen de Chimaira. Het gevleugelde paard is dus ook onderdeel van een gevaarlijke heldenreis.",
        "label": "Met Bellerophon",
        "focus": {
          "x": 57,
          "y": 55
        }
      },
      {
        "title": "Een spoor aan de hemel",
        "text": "De naam Pegasus leeft verder in een sterrenbeeld en in kunst over inspiratie. Die latere betekenissen voegen nieuwe lagen toe aan de oude verhalen.",
        "label": "Een spoor aan de hemel",
        "focus": {
          "x": 72,
          "y": 18
        }
      }
    ]
  },
  "location": {
    "image": anatomy,
    "title": "Een atlas van de overlevering",
    "imageAlt": "Herkenbare kustlijnen en culturele context voor Pegasus",
    "steps": [
      {
        "title": "De Griekse verhalenwereld",
        "text": "Kustlijnen en eilanden plaatsen ons in de oostelijke Middellandse Zee. Hier werd het verhaal verteld, niet één bewezen verblijfplaats van Pegasus.",
        "label": "Griekse verhalenwereld",
        "atlas": {
          "bounds": [
            -8,
            24,
            45,
            48
          ],
          "label": "Griekse verhalenwereld",
          "center": [
            23,
            38
          ],
          "area": [
            19,
            34,
            28,
            42
          ]
        }
      },
      {
        "title": "Bergen van Griekenland",
        "text": "We naderen het vasteland en de Egeïsche Zee. Helikon ligt in Boeotië, ten noordwesten van Athene.",
        "label": "Boeotië",
        "atlas": {
          "bounds": [
            18,
            33,
            29,
            43
          ],
          "label": "Boeotië",
          "center": [
            23,
            38
          ],
          "area": [
            21.5,
            37.5,
            24,
            39
          ]
        }
      },
      {
        "title": "Helikon en Hippokrene",
        "text": "De berg en de paardenbron hebben een concrete plek in de overlevering van Pausanias. De stip markeert de bergcontext; de bron is niet als exact GPS-punt ingetekend.",
        "label": "Helikon",
        "atlas": {
          "bounds": [
            20,
            36,
            25,
            40
          ],
          "label": "Helikon",
          "center": [
            22.82,
            38.35
          ],
          "point": true
        }
      },
      {
        "title": "Een landschap voor de Muzen",
        "text": "Helikon is verbonden met de Muzen. In ons eigen verhaal wordt het berglandschap een plek om aandachtig te luisteren.",
        "label": "Helikon en de Muzen",
        "atlas": {
          "bounds": [
            18,
            33,
            29,
            43
          ],
          "label": "Helikon en de Muzen",
          "center": [
            22.8,
            38.3
          ],
          "area": [
            21.8,
            37.8,
            23.8,
            39
          ]
        }
      }
    ]
  },
  "folklore": {
    "title": "Achter de overlevering",
    "origin": "Pegasus komt voor bij Hesiodos en in verhalen over Bellerophon. Pausanias verbindt zijn hoef met Hippokrene op Helikon.",
    "role": "Een gevleugeld paard, helper van een held en in sommige teksten drager van Zeus’ bliksem.",
    "meaning": "Kunstenaars verbonden Pegasus later sterk met poëzie en inspiratie. Eleni en haar zoektocht zijn ons eigen verhaal.",
    "moral": "Een nieuw lied begint soms met goed luisteren.",
    "sources": [
      {
        "title": "Hesiodos — Theogonie",
        "url": "https://www.theoi.com/Text/HesiodTheogony.html"
      },
      {
        "title": "Pausanias — Helikon en Hippokrene",
        "url": "https://www.theoi.com/Text/Pausanias9B.html"
      }
    ]
  },
  "story": {
    "file": "./story.md",
    "image": scene,
    "imageAlt": "Pegasus bij een bergbron op Helikon.",
    "note": "Een eigen vertelling voor Legends & Mythology. Personages, gesprekken en gebeurtenissen zijn fictie; folklore en latere beeldtradities worden in de notities apart toegelicht."
  }
} satisfies Creature;
