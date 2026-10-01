import type { Creature } from '../types';
const anatomy = new URL('./plate.svg', import.meta.url).href;
const scene = anatomy;

export const baku = {
  "id": "baku",
  "name": "Baku",
  "book": "wonder",
  "tags": ["Japan","dromen","nachtmerries","bedtijd",
    "Baku",
    "Japan & oudere Chinese beeldtradities",
    "De gast aan de rand van je droom"
  ],
  "region": {
    "name": "Japan & oudere Chinese beeldtradities",
    "displayName": "Japan & oudere Chinese beeldtradities",
    "tradition": "Japanse beschermende droomfolklore"
  },
  "reading": {
    "age": "6+",
    "minutes": 6
  },
  "introduction": {
    "title": "De gast aan de rand van je droom",
    "shortText": "Een slurf, stevige tijgerpoten en een ossenstaart: een wonderlijk mengwezen waakt bij de slaap.",
    "invitation": "Lees met Emi mee wanneer een terugkerende droom eindelijk een andere deur krijgt."
  },
  "cover": anatomy,
  "anatomy": {
    "image": anatomy,
    "title": "Een wezen, stap voor stap",
    "imageAlt": "Een rustige onderzoeksplaat van Baku, getekend in inkt op papier.",
    "facts": [
      {
        "title": "Een samengesteld wezen",
        "text": "De Baku is geen gewoon dier. Deze plaat volgt een traditionele Japanse samengestelde vorm, zoals te zien in Edo-kunst.",
        "label": "Een samengesteld wezen",
        "focus": {
          "x": 51,
          "y": 52
        }
      },
      {
        "title": "Een olifantachtige slurf",
        "text": "De slurf is een herkenbaar onderdeel van de vorm. In ons verhaal vangt hij de nachtmerrie op; dat beeld is een eigen invulling.",
        "label": "Een olifantachtige slurf",
        "focus": {
          "x": 34,
          "y": 43
        }
      },
      {
        "title": "Poten van een tijger",
        "text": "De krachtige poten behoren tot de traditionele combinatie. Ze geven het kleine nachtelijke bezoek in onze plaat een stevige houding.",
        "label": "Poten van een tijger",
        "focus": {
          "x": 48,
          "y": 76
        }
      },
      {
        "title": "Een ossenstaart",
        "text": "De lange staart sluit de samengestelde vorm af. Bekijk hoe verschillende dierkenmerken samen één beschermend beeld worden.",
        "label": "Een ossenstaart",
        "focus": {
          "x": 79,
          "y": 50
        }
      },
      {
        "title": "Nachtmerries verslinden",
        "text": "In Japan is de Baku bekend als droometer. Het wezen hoeft daarom niet als een roofdier te worden afgebeeld.",
        "label": "Nachtmerries verslinden",
        "focus": {
          "x": 40,
          "y": 54
        }
      },
      {
        "title": "Een grens voor de verbeelding",
        "text": "Ons verhaal maakt onderscheid tussen een nare droom en een droom die je wilt bewaren. Die keuze is onze moderne gedachte, geen vast ritueel voorschrift.",
        "label": "Een grens voor de verbeelding",
        "focus": {
          "x": 63,
          "y": 32
        }
      }
    ]
  },
  "location": {
    "image": anatomy,
    "title": "Een atlas van de overlevering",
    "imageAlt": "Herkenbare kustlijnen en culturele context voor Baku",
    "steps": [
      {
        "title": "Oost-Aziatische wortels",
        "text": "De Japanse Baku heeft oudere Chinese wortels. Beelden en betekenissen veranderden terwijl ze tussen culturen reisden.",
        "label": "Oost-Azië",
        "atlas": {
          "bounds": [
            85,
            10,
            155,
            55
          ],
          "label": "Oost-Azië",
          "center": [
            119,
            34
          ],
          "area": [
            100,
            20,
            142,
            45
          ]
        }
      },
      {
        "title": "De Japanse eilanden",
        "text": "In Japan wordt de beschermende droometer een bekend motief. Het eilandgebied is gemarkeerd, niet één vermeende woonstad.",
        "label": "Japan",
        "atlas": {
          "bounds": [
            125,
            28,
            148,
            47
          ],
          "label": "Japan",
          "center": [
            137,
            37
          ],
          "area": [
            130,
            31,
            144,
            44
          ]
        }
      },
      {
        "title": "Kunst rond de slaap",
        "text": "Een achttiende-eeuwse netsuke in The Met toont slurf, ossenstaart en tijgerpoten. De Edo-periode is cultuurhistorische context, geen geografische oorsprongspin.",
        "label": "Edo-kunst en slaapcultuur",
        "atlas": {
          "bounds": [
            125,
            28,
            148,
            47
          ],
          "label": "Edo-kunst en slaapcultuur",
          "center": [
            136,
            36
          ],
          "area": [
            131,
            32,
            142,
            41
          ]
        }
      }
    ]
  },
  "folklore": {
    "title": "Achter de overlevering",
    "origin": "Een Japans wezen met oudere Chinese wortels. De droometende en beschermende rol is vooral bekend in Japan.",
    "role": "Een samengesteld beschermend wezen. Een Edo-netsuke in The Met toont de olifantachtige slurf, ossenstaart en tijgerpoten.",
    "meaning": "Emi, haar optreden en de keuze om sommige droombeelden te bewaren zijn onze eigen bedtijdvertelling.",
    "moral": "Hulp kan ruimte maken voor iets wat je zelf durft.",
    "sources": [
      {
        "title": "The Met — Seated Baku, 18e eeuw",
        "url": "https://www.metmuseum.org/art/collection/search/59035"
      }
    ]
  },
  "story": {
    "file": "./story.md",
    "image": scene,
    "imageAlt": "Een ingetogen onderzoeksbeeld bij het verhaal van Baku.",
    "note": "Een eigen vertelling voor Legends & Mythology. Personages, gesprekken en gebeurtenissen zijn fictie; folklore en latere beeldtradities worden in de notities apart toegelicht."
  },
  "artworkNote": "Tijdelijke lokale SVG-onderzoeksplaat; compositie en details wachten op definitief artwork."
} satisfies Creature;
