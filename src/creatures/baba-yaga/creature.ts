import type { Creature } from '../types';
const anatomy = new URL('./plate.svg', import.meta.url).href;
const scene = anatomy;

export const babaYaga = {
  "id": "baba-yaga",
  "name": "Baba Yaga",
  "book": "dark",
  "tags": ["bos","hut","kippenpoten","Slavisch","sprookje",
    "Baba Yaga",
    "Oost-Europa & Slavische verteltradities",
    "De hut die zich omdraaide"
  ],
  "region": {
    "name": "Oost-Europa & Slavische verteltradities",
    "displayName": "Oost-Europa & Slavische verteltradities",
    "tradition": "Vooral Oost-Slavische en Russische sprookjestradities"
  },
  "reading": {
    "age": "12+",
    "minutes": 12
  },
  "introduction": {
    "title": "De hut die zich omdraaide",
    "shortText": "Een huis staat tussen de bomen. Onder het huis bewegen twee poten. Binnen wacht iemand die je naam nog niet gevraagd heeft.",
    "invitation": "Volg Mila het bos in, waar een onmogelijke opdracht begint met een heel kleine vriendelijkheid."
  },
  "cover": anatomy,
  "anatomy": {
    "image": anatomy,
    "title": "Vrouw, voorwerpen en hut",
    "imageAlt": "Een rustige onderzoeksplaat van Baba Yaga, getekend in inkt op papier.",
    "facts": [
      {
        "title": "Een oude bovennatuurlijke vrouw",
        "text": "Baba Yaga kan bedreigen, beproeven en soms helpen. Haar verschijning en bedoeling wisselen tussen de sprookjes.",
        "label": "Een oude bovennatuurlijke vrouw",
        "focus": {
          "x": 52,
          "y": 48
        }
      },
      {
        "title": "Een benige schaduw",
        "text": "Onze plaat toont haar terughoudend, achter een deur. Vreemde of benige trekken komen in beeldtradities voor, zonder dat elk verhaal één vast gezicht voorschrijft.",
        "label": "Een benige schaduw",
        "focus": {
          "x": 52,
          "y": 39
        }
      },
      {
        "title": "Vijzel en stamper",
        "text": "In veel verhalen reist zij in een vijzel met een stamper. Dit zijn karakteristieke voorwerpen, geen gewone vervoersmiddelen.",
        "label": "Vijzel en stamper",
        "focus": {
          "x": 69,
          "y": 71
        }
      },
      {
        "title": "Een bezem achter haar",
        "text": "Met een bezem kan zij haar sporen wissen. In ons verhaal maakt een schurend geluid haar aanwezigheid voelbaar.",
        "label": "Een bezem achter haar",
        "focus": {
          "x": 79,
          "y": 68
        }
      },
      {
        "title": "De hut op kippenpoten",
        "text": "Het huis is net zo herkenbaar als de bewoonster. Een bewegende hut maakt het bos tot een plaats waar gewone regels niet vanzelf gelden.",
        "label": "De hut op kippenpoten",
        "focus": {
          "x": 48,
          "y": 78
        }
      },
      {
        "title": "Een taak en een drempel",
        "text": "Zij is vaak een beproever of bewaker. De opdracht zegt iets over de reiziger en over een wereld waarin behulpzaamheid onverwacht terugkeert.",
        "label": "Een taak en een drempel",
        "focus": {
          "x": 34,
          "y": 47
        }
      }
    ]
  },
  "location": {
    "image": anatomy,
    "title": "Een atlas van de overlevering",
    "imageAlt": "Herkenbare kustlijnen en culturele context voor Baba Yaga",
    "steps": [
      {
        "title": "Een Slavische vertelwereld",
        "text": "Baba Yaga hoort bij Slavische folklore, vooral bekend uit Oost-Slavische en Russische sprookjes. Eén landsgrens dekt niet ieder verhaal.",
        "label": "Slavische verteltradities",
        "atlas": {
          "bounds": [
            -15,
            30,
            60,
            65
          ],
          "label": "Slavische verteltradities",
          "center": [
            35,
            52
          ],
          "area": [
            20,
            42,
            53,
            62
          ]
        }
      },
      {
        "title": "Oost-Europese context",
        "text": "Deze regionale kaart plaatst de traditie. Zij markeert geen huis, dorp of bewezen oorsprong van alle Baba Yaga-verhalen.",
        "label": "Oost-Europa",
        "atlas": {
          "bounds": [
            15,
            40,
            65,
            67
          ],
          "label": "Oost-Europa",
          "center": [
            36,
            54
          ],
          "area": [
            24,
            45,
            53,
            61
          ]
        }
      },
      {
        "title": "Het bos van het sprookje",
        "text": "Het bos is een cultureel motief en een grens tussen bekende en onbekende werelden. Mila’s hut bestaat alleen in onze vertelling.",
        "label": "Een sprookjesbos",
        "atlas": {
          "bounds": [
            15,
            40,
            65,
            67
          ],
          "label": "Een sprookjesbos",
          "center": [
            36,
            54
          ],
          "area": [
            24,
            45,
            53,
            61
          ]
        }
      }
    ]
  },
  "folklore": {
    "title": "Achter de overlevering",
    "origin": "Baba Yaga verschijnt in uiteenlopende Slavische sprookjes, vooral in Oost-Slavische en Russische verzamelingen zoals die van Afanasjev.",
    "role": "Een oude bovennatuurlijke vrouw, verbonden met bos, hut op kippenpoten, vijzel, stamper en beproevingen. Zij kan een bedreiging zijn of onverwacht helpen.",
    "meaning": "Mila, de gebroken zeef en de kraai zijn eigen verhaalkeuzes. De dubbelzinnige gastvrouw en terugkerende kleine hulp sluiten aan bij sprookjesmotieven.",
    "moral": "Aandacht voor iets kleins kan op een onbekende drempel het verschil maken.",
    "sources": [
      {
        "title": "Afanasjev — Russian Folk-Tales, Vasilisa en Baba Yaga",
        "url": "https://www.gutenberg.org/ebooks/62509"
      }
    ]
  },
  "story": {
    "file": "./story.md",
    "image": scene,
    "imageAlt": "Een ingetogen onderzoeksbeeld bij het verhaal van Baba Yaga.",
    "note": "Een eigen vertelling voor Legends & Mythology. Personages, gesprekken en gebeurtenissen zijn fictie; folklore en latere beeldtradities worden in de notities apart toegelicht."
  },
  "warning": "Een duister sprookje met dreiging, gevangenschap en een onzekere gastvrouw. Geen expliciet geweld. Lees als ouder eerst mee en kies samen de sfeer; 12+ is een indicatie.",
  "artworkNote": "Tijdelijke lokale SVG-onderzoeksplaat; compositie en details wachten op definitief artwork."
} satisfies Creature;
