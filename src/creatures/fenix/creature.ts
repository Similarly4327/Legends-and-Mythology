import type { Creature } from '../types';
const anatomy = new URL('./plate.svg', import.meta.url).href;
const scene = anatomy;

export const fenix = {
  "id": "fenix",
  "name": "Fenix",
  "alternativeName": "Phoenix · Phoinix · Benu",
  "book": "wonder",
  "tags": ["zon","vuur","as","vernieuwing","Benu","Egypte",
    "Fenix",
    "Oostelijke Middellandse Zee & Egypte",
    "De vogel van een nieuw begin"
  ],
  "region": {
    "name": "Oostelijke Middellandse Zee & Egypte",
    "displayName": "Oostelijke Middellandse Zee & Egypte",
    "tradition": "Grieks-Romeinse phoenixtraditie en Egyptische symboliek"
  },
  "reading": {
    "age": "6+",
    "minutes": 6
  },
  "introduction": {
    "title": "De vogel van een nieuw begin",
    "shortText": "Een glans van rood en goud. Een lange stilte. En dan begint een nieuwe cyclus.",
    "invitation": "Ontdek met Nila waarom een afscheid niet het laatste hoofdstuk hoeft te zijn."
  },
  "cover": anatomy,
  "anatomy": {
    "image": anatomy,
    "title": "Een wezen, stap voor stap",
    "imageAlt": "Een rustige onderzoeksplaat van Fenix, getekend in inkt op papier.",
    "facts": [
      {
        "title": "Een grote vogel",
        "text": "Herodotos vergelijkt de phoenix in afbeeldingen met een arend. Grootte en uiterlijk verschillen in andere versies.",
        "label": "Een grote vogel",
        "focus": {
          "x": 50,
          "y": 47
        }
      },
      {
        "title": "Rood en goud",
        "text": "Deze twee kleuren staan al in de klassieke beschrijving. Onze plaat gebruikt ze als rustige inktaccenten, zonder te claimen dat ieder verhaal hetzelfde verenkleed noemt.",
        "label": "Rood en goud",
        "focus": {
          "x": 48,
          "y": 40
        }
      },
      {
        "title": "De zon als gezelschap",
        "text": "De vogel wordt verbonden met de zon en een zonneheiligdom. Licht is hier een religieus en literair motief, geen gemeten dierlijke eigenschap.",
        "label": "De zon als gezelschap",
        "focus": {
          "x": 52,
          "y": 20
        }
      },
      {
        "title": "Een leven van eeuwen",
        "text": "Klassieke auteurs vertellen over uitzonderlijk lange levenscycli. Ze geven niet allemaal hetzelfde aantal jaren.",
        "label": "Een leven van eeuwen",
        "focus": {
          "x": 60,
          "y": 60
        }
      },
      {
        "title": "Een geurend nest",
        "text": "Mirre en andere geurige planten spelen in verschillende teksten een rol bij nest, afscheid en vernieuwing.",
        "label": "Een geurend nest",
        "focus": {
          "x": 50,
          "y": 77
        }
      },
      {
        "title": "Vuur en as",
        "text": "De beroemde wedergeboorte uit vuur en as behoort tot latere vormen van de traditie. Ons verhaal kiest die beeldtaal bewust.",
        "label": "Vuur en as",
        "focus": {
          "x": 62,
          "y": 72
        }
      }
    ]
  },
  "location": {
    "image": anatomy,
    "title": "Een atlas van de overlevering",
    "imageAlt": "Herkenbare kustlijnen en culturele context voor Fenix",
    "steps": [
      {
        "title": "Langs de Middellandse Zee",
        "text": "Griekse en Romeinse auteurs vertellen over een bijzondere vogel en plaatsen delen van het verhaal in Egypte en verder oostwaarts.",
        "label": "Oostelijke Middellandse Zee",
        "atlas": {
          "bounds": [
            -8,
            24,
            45,
            48
          ],
          "label": "Oostelijke Middellandse Zee",
          "center": [
            29,
            34
          ],
          "area": [
            21,
            27,
            38,
            40
          ]
        }
      },
      {
        "title": "Egypte en de zon",
        "text": "De Egyptische Benu-symboliek rond zon, schepping en vernieuwing is een belangrijke historische verbinding. Benu en phoenix zijn geen volledig identieke vogel in iedere periode.",
        "label": "Egypte",
        "atlas": {
          "bounds": [
            22,
            20,
            39,
            35
          ],
          "label": "Egypte",
          "center": [
            30,
            27
          ],
          "area": [
            26,
            23,
            34,
            31
          ]
        }
      },
      {
        "title": "Heliopolis als tekstuele context",
        "text": "Herodotos noemt het zonneheiligdom van Heliopolis. De markering betreft het oude cultuscentrum bij het huidige Caïro, geen woonplaats van de vogel.",
        "label": "Heliopolis",
        "atlas": {
          "bounds": [
            27,
            27,
            34,
            33
          ],
          "label": "Heliopolis",
          "center": [
            31.3,
            30.13
          ],
          "point": true
        }
      },
      {
        "title": "Een verhaal reist verder",
        "text": "De phoenix krijgt andere details in de Grieks-Romeinse wereld en later in Europese kunst. De kaart laat verspreidingscontext zien, geen vaste vliegroute.",
        "label": "Klassieke verspreiding",
        "atlas": {
          "bounds": [
            -8,
            24,
            45,
            48
          ],
          "label": "Klassieke verspreiding",
          "center": [
            22,
            36
          ],
          "area": [
            8,
            29,
            36,
            43
          ]
        }
      }
    ]
  },
  "folklore": {
    "title": "Achter de overlevering",
    "origin": "De Grieks-Romeinse phoenixtraditie heeft duidelijke verbindingen met de Egyptische Benu-symboliek, maar beide tradities verschillen ook.",
    "role": "Een zeldzame vogel, verbonden met de zon en een buitengewoon lange cyclus. Herodotos, Ovidius en Claudianus vertellen verschillende versies.",
    "meaning": "Vuur en herrijzen uit as worden vooral in latere vormen beroemd. Nila en de boomgaard zijn onze eigen vertelling met dat latere motief.",
    "moral": "Wat verandert, hoeft niet helemaal verloren te gaan.",
    "sources": [
      {
        "title": "Herodotos, Ovidius en Claudianus — verschillende phoenixtradities",
        "url": "https://www.theoi.com/Thaumasios/Phoinix.html"
      }
    ]
  },
  "story": {
    "file": "./story.md",
    "image": scene,
    "imageAlt": "Een ingetogen onderzoeksbeeld bij het verhaal van Fenix.",
    "note": "Een eigen vertelling voor Legends & Mythology. Personages, gesprekken en gebeurtenissen zijn fictie; folklore en latere beeldtradities worden in de notities apart toegelicht."
  },
  "artworkNote": "Tijdelijke lokale SVG-onderzoeksplaat; compositie en details wachten op definitief artwork."
} satisfies Creature;
