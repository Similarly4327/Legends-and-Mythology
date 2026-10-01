import type { Creature } from '../types';
const anatomy = new URL('./plate.svg', import.meta.url).href;
const scene = anatomy;

export const manticore = {
  "id": "manticore",
  "name": "Manticore",
  "alternativeName": "Mantikhoras · Martichora",
  "book": "adventure",
  "tags": ["karavaan","leeuw","staart","Perzië","India",
    "Manticore",
    "Oostelijke verhalen, klassieke wereld & Europese bestiaria",
    "Het spoor naast de karavaan"
  ],
  "region": {
    "name": "Oostelijke verhalen, klassieke wereld & Europese bestiaria",
    "displayName": "Oostelijke verhalen, klassieke wereld & Europese bestiaria",
    "tradition": "Klassieke beschrijvingen en latere bestiaria"
  },
  "reading": {
    "age": "8+",
    "minutes": 8
  },
  "introduction": {
    "title": "Het spoor naast de karavaan",
    "shortText": "De afdruk lijkt op die van een leeuw. Tot je ziet hoe groot hij is, en wat er achter de struiken beweegt.",
    "invitation": "Reis mee met Darya. Haar belangrijkste gereedschap is een schrift waarin ook twijfels passen."
  },
  "cover": anatomy,
  "anatomy": {
    "image": anatomy,
    "title": "Een wezen, stap voor stap",
    "imageAlt": "Een rustige onderzoeksplaat van Manticore, getekend in inkt op papier.",
    "facts": [
      {
        "title": "Een leeuwenlichaam",
        "text": "Klassieke beschrijvingen geven het wezen een grote katachtige bouw. Onze plaat kiest een leeuwenlichaam uit die beschrijvingstraditie.",
        "label": "Een leeuwenlichaam",
        "focus": {
          "x": 52,
          "y": 50
        }
      },
      {
        "title": "Een mensachtig gezicht",
        "text": "Het vreemde gezicht behoort tot klassieke beschrijvingen. Het is geen portret van een volk of een vaststaand Perzisch natuurfeit.",
        "label": "Een mensachtig gezicht",
        "focus": {
          "x": 35,
          "y": 34
        }
      },
      {
        "title": "Opvallende tanden",
        "text": "Sommige teksten spreken over meerdere rijen tanden. De ingehouden plaat suggereert hun dreiging zonder een expliciete close-up.",
        "label": "Opvallende tanden",
        "focus": {
          "x": 35,
          "y": 44
        }
      },
      {
        "title": "Een gevaarlijke staart",
        "text": "Stekels, een angel en een schorpioenachtige vorm komen in verschillende beschrijvingen voor. We presenteren de gekozen staart als één beeldvariant.",
        "label": "Een gevaarlijke staart",
        "focus": {
          "x": 80,
          "y": 39
        }
      },
      {
        "title": "Een grote sprong",
        "text": "Snelheid en gevaar maken het wezen in oude berichten moeilijk te benaderen. De sprong in ons verhaal is een eigen dramatische scène.",
        "label": "Een grote sprong",
        "focus": {
          "x": 48,
          "y": 71
        }
      },
      {
        "title": "Sporen zonder zekerheid",
        "text": "Afdrukken alleen bewijzen niet wat een dier is. Darya’s notities houden observatie en veronderstelling apart.",
        "label": "Sporen zonder zekerheid",
        "focus": {
          "x": 61,
          "y": 81
        }
      }
    ]
  },
  "location": {
    "image": anatomy,
    "title": "Een atlas van de overlevering",
    "imageAlt": "Herkenbare kustlijnen en culturele context voor Manticore",
    "steps": [
      {
        "title": "Oostelijke beschrijvingen",
        "text": "Ctesias’ berichten verwijzen naar India en de Perzische hofcontext. Het wezen heeft geen vast te bewijzen oorsprongspunt op onze atlas.",
        "label": "Perzische & oostelijke context",
        "atlas": {
          "bounds": [
            30,
            5,
            95,
            50
          ],
          "label": "Perzische & oostelijke context",
          "center": [
            61,
            30
          ],
          "area": [
            45,
            18,
            80,
            39
          ]
        }
      },
      {
        "title": "Naar klassieke auteurs",
        "text": "Griekse en Romeinse auteurs nemen beschrijvingen over, spreken elkaar tegen en voegen details toe. Dit is een route van teksten, geen dierlijke migratiekaart.",
        "label": "Klassieke beschrijvingen",
        "atlas": {
          "bounds": [
            10,
            15,
            65,
            48
          ],
          "label": "Klassieke beschrijvingen",
          "center": [
            29,
            36
          ],
          "area": [
            18,
            28,
            45,
            43
          ]
        }
      },
      {
        "title": "Een Europees bestiarium",
        "text": "Later verschijnt het wezen in middeleeuwse Europese bestiaria. Die beeldvorm is niet één onveranderde oude Perzische canon.",
        "label": "Europese bestiaria",
        "atlas": {
          "bounds": [
            -15,
            30,
            60,
            65
          ],
          "label": "Europese bestiaria",
          "center": [
            12,
            48
          ],
          "area": [
            -5,
            38,
            30,
            57
          ]
        }
      }
    ]
  },
  "folklore": {
    "title": "Achter de overlevering",
    "origin": "Beschrijvingen bereikten de klassieke wereld via auteurs zoals Ctesias. Zij plaatsten berichten in een oostelijke, Indiase en Perzische context.",
    "role": "Een gevaarlijk mengwezen met katachtig lichaam, mensachtig gezicht en een bijzondere staart. Europese bestiaria bouwen later verder aan het beeld.",
    "meaning": "De karavaan van Darya is fictief. De tekst onderscheidt wat zij ziet van wat zij op basis van oude verhalen vermoedt.",
    "moral": "Een eerlijk verslag bewaart ook wat je niet zeker weet.",
    "sources": [
      {
        "title": "Ctesias, Aelianus en Pausanias — Mantikhoras",
        "url": "https://www.theoi.com/Thaumasios/Mantikhoras.html"
      }
    ]
  },
  "story": {
    "file": "./story.md",
    "image": scene,
    "imageAlt": "Een ingetogen onderzoeksbeeld bij het verhaal van Manticore.",
    "note": "Een eigen vertelling voor Legends & Mythology. Personages, gesprekken en gebeurtenissen zijn fictie; folklore en latere beeldtradities worden in de notities apart toegelicht."
  },
  "artworkNote": "Tijdelijke lokale SVG-onderzoeksplaat; compositie en details wachten op definitief artwork."
} satisfies Creature;
