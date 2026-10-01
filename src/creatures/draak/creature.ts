import type { Creature } from '../types';
const anatomy = new URL('./anatomy.webp', import.meta.url).href;
const scene = anatomy;

export const draak = {
  "id": "draak",
  "name": "Draak",
  "alternativeName": "De wachter op de berg",
  "book": "adventure",
  "tags": ["bergen","vleugels","schat","Europa",
    "Draak",
    "Europa",
    "De wachter op de berg"
  ],
  "region": {
    "name": "Europa",
    "displayName": "Europa",
    "tradition": "Europese drakenverhalen & middeleeuwse beeldtradities"
  },
  "reading": {
    "age": "8+",
    "minutes": 8
  },
  "introduction": {
    "title": "De wachter op de berg",
    "shortText": "Geschubde vleugels, een waakzaam oog en een geheim onder de berg. Niet iedere schat glinstert.",
    "invitation": "Volg Mara naar een toren die al jaren gesloten is. Ze neemt een vraag mee in plaats van een zwaard."
  },
  "cover": anatomy,
  "anatomy": {
    "image": anatomy,
    "title": "Een wezen, stap voor stap",
    "imageAlt": "Een rustige onderzoeksplaat van Draak, getekend in inkt op papier.",
    "facts": [
      {
        "title": "Eén gekozen drakenvorm",
        "text": "Onze bergwachter heeft vier poten, twee vleugels en een staart. Europese afbeeldingen kennen ook slangachtige en anders gebouwde draken.",
        "label": "Eén gekozen drakenvorm",
        "focus": {
          "x": 52,
          "y": 52
        }
      },
      {
        "title": "Een waakzaam oog",
        "text": "De gouden blik op deze plaat hoort bij onze verbeelding. Oude verhalen vertellen vaak meer over de dreiging dan over een vaste anatomie.",
        "label": "Een waakzaam oog",
        "focus": {
          "x": 59,
          "y": 28
        }
      },
      {
        "title": "Vleugels als zeilen",
        "text": "De vlieghuid en vleugelbouw volgen een latere fantasievorm. We gebruiken die compositie voor dit avontuur, zonder haar tot universele traditie te maken.",
        "label": "Vleugels als zeilen",
        "focus": {
          "x": 23,
          "y": 22
        }
      },
      {
        "title": "Schubben in het mos",
        "text": "Groene schubben laten de draak op de rots verdwijnen. Zijn camouflage is een eigen verhaalkeuze.",
        "label": "Schubben in het mos",
        "focus": {
          "x": 51,
          "y": 47
        }
      },
      {
        "title": "Poten en staart",
        "text": "Vier stevige poten dragen onze bergwachter. De gekrulde staart begrenst zijn ruimte rond de toren.",
        "label": "Poten en staart",
        "focus": {
          "x": 33,
          "y": 73
        }
      },
      {
        "title": "Een schat bewaken",
        "text": "Schatbewakende draken komen voor in Europese literatuur, onder meer Beowulf. De zaden in onze toren zijn een nieuwe invulling van dat motief.",
        "label": "Een schat bewaken",
        "focus": {
          "x": 78,
          "y": 62
        }
      }
    ]
  },
  "location": {
    "image": anatomy,
    "title": "Een atlas van de overlevering",
    "imageAlt": "Herkenbare kustlijnen en culturele context voor Draak",
    "steps": [
      {
        "title": "Een brede Europese traditie",
        "text": "Er is geen enkele oorsprongsstad voor alle Europese draken. Deze atlas toont het brede gebied van de gekozen beeldtraditie.",
        "label": "Europa",
        "atlas": {
          "bounds": [
            -15,
            30,
            60,
            65
          ],
          "label": "Europa",
          "center": [
            18,
            49
          ],
          "area": [
            -8,
            36,
            42,
            59
          ]
        }
      },
      {
        "title": "Handschriften en vertellers",
        "text": "Middeleeuwse verhalen en afbeeldingen kennen veel verschillende drakenvormen. Landgrenzen op de kaart dienen alleen ter oriëntatie.",
        "label": "Middeleeuwse verbeelding",
        "atlas": {
          "bounds": [
            -12,
            35,
            35,
            60
          ],
          "label": "Middeleeuwse verbeelding",
          "center": [
            10,
            48
          ],
          "area": [
            -5,
            40,
            28,
            55
          ]
        }
      },
      {
        "title": "Onze berg staat niet op de kaart",
        "text": "De berg en toren van Mara zijn verzonnen. Daarom verschijnt hier geen precieze pin als zogenaamde vindplaats.",
        "label": "Een verzonnen berg",
        "atlas": {
          "bounds": [
            -15,
            30,
            60,
            65
          ],
          "label": "Een verzonnen berg",
          "center": [
            18,
            49
          ],
          "area": [
            -8,
            36,
            42,
            59
          ]
        }
      }
    ]
  },
  "folklore": {
    "title": "Achter de overlevering",
    "origin": "Europese verhalen en middeleeuwse afbeeldingen kennen vele drakenvormen. Dit is één bewust gekozen fantasievorm.",
    "role": "De schatbewaker is een oud motief. Onze draak bewaart zaden, niet de gouden schat van een specifieke historische vertelling.",
    "meaning": "Mara, de toren, de berg en de zaadverzameling zijn eigen fictie. Het avontuur vraagt wat een schat waard is wanneer niemand haar gebruikt.",
    "moral": "Een schat kan groter worden als je haar deelt.",
    "sources": [
      {
        "title": "British Library — verschillende drakenvormen",
        "url": "https://www.bl.uk/stories/blogs/posts/the-anatomy-of-a-dragon"
      }
    ]
  },
  "story": {
    "file": "./story.md",
    "image": scene,
    "imageAlt": "Een ingetogen onderzoeksbeeld bij het verhaal van Draak.",
    "note": "Een eigen vertelling voor Legends & Mythology. Personages, gesprekken en gebeurtenissen zijn fictie; folklore en latere beeldtradities worden in de notities apart toegelicht."
  }
} satisfies Creature;
