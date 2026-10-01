import type { Creature } from '../types';
const anatomy = new URL('./plate.svg', import.meta.url).href;
const scene = anatomy;

export const cycloop = {
  "id": "cycloop",
  "name": "Cycloop",
  "alternativeName": "Kyklops · Polyphemos",
  "book": "adventure",
  "tags": ["grot","oog","reuzen","schapen","Griekenland","Sicilië",
    "Cycloop",
    "Griekse verhalen & Middellandse Zee",
    "Het oog in de grot"
  ],
  "region": {
    "name": "Griekse verhalen & Middellandse Zee",
    "displayName": "Griekse verhalen & Middellandse Zee",
    "tradition": "Homerische reuzen en Hesiodische smeden"
  },
  "reading": {
    "age": "8+",
    "minutes": 8
  },
  "introduction": {
    "title": "Het oog in de grot",
    "shortText": "Een voetstap als een vallende steen. Een grot vol schapen. En één oog dat de uitgang bewaakt.",
    "invitation": "Volg Ivo en Thaleia naar een kustgrot waar luisteren nuttiger blijkt dan spierkracht."
  },
  "cover": anatomy,
  "anatomy": {
    "image": anatomy,
    "title": "Een wezen, stap voor stap",
    "imageAlt": "Een rustige onderzoeksplaat van Cycloop, getekend in inkt op papier.",
    "facts": [
      {
        "title": "Een menselijke reus",
        "text": "Onze plaat kiest een Homerische herdersreus. Dat is een andere verhaallijn dan de drie goddelijke smeden van Hesiodos.",
        "label": "Een menselijke reus",
        "focus": {
          "x": 50,
          "y": 49
        }
      },
      {
        "title": "Eén centraal oog",
        "text": "Het ene oog is het opvallende gedeelde kenmerk. We tonen een enkel oog boven de neus, zonder een biologische verklaring te verzinnen.",
        "label": "Eén centraal oog",
        "focus": {
          "x": 48,
          "y": 25
        }
      },
      {
        "title": "Handen rond een rots",
        "text": "Enorme handen benadrukken de schaal in onze illustratie. In het Polyphemos-verhaal kan de reus een steen voor de grot verplaatsen.",
        "label": "Handen rond een rots",
        "focus": {
          "x": 58,
          "y": 55
        }
      },
      {
        "title": "Een herder tussen schapen",
        "text": "De Homerische Polyphemos houdt dieren en woont in een grot. Schapen en een eenvoudige herdersomgeving plaatsen deze plaat in die gekozen traditie.",
        "label": "Een herder tussen schapen",
        "focus": {
          "x": 35,
          "y": 77
        }
      },
      {
        "title": "Een zware stap",
        "text": "Grote afdrukken en een diepe stem maken de reus in ons eigen avontuur voelbaar voordat je hem ziet.",
        "label": "Een zware stap",
        "focus": {
          "x": 52,
          "y": 82
        }
      },
      {
        "title": "Een andere Cyclopenfamilie",
        "text": "Hesiodos noemt Brontes, Steropes en Arges: smeden die Zeus de bliksem geven. Meng hun gereedschap niet ongemerkt met de Homerische herder.",
        "label": "Een andere Cyclopenfamilie",
        "focus": {
          "x": 71,
          "y": 35
        }
      }
    ]
  },
  "location": {
    "image": anatomy,
    "title": "Een atlas van de overlevering",
    "imageAlt": "Herkenbare kustlijnen en culturele context voor Cycloop",
    "steps": [
      {
        "title": "Een Griekse vertelwereld",
        "text": "We beginnen in de Griekse mythologische context. Verschillende dichters vertellen verschillende Cyclopenverhalen.",
        "label": "Griekse mythologie",
        "atlas": {
          "bounds": [
            -8,
            24,
            45,
            48
          ],
          "label": "Griekse mythologie",
          "center": [
            24,
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
        "title": "Sicilië als latere plaatsing",
        "text": "Homerus geeft geen moderne kaartcoördinaat voor de grot. Sicilië wordt in latere overlevering met Polyphemos verbonden.",
        "label": "Sicilië",
        "atlas": {
          "bounds": [
            6,
            31,
            24,
            43
          ],
          "label": "Sicilië",
          "center": [
            14,
            37.5
          ],
          "area": [
            12,
            36,
            16,
            39
          ]
        }
      },
      {
        "title": "Etna en de smeden",
        "text": "Latere teksten verbinden vulkanische omgevingen zoals Etna met het smedenmotief. Dit is een latere associatie, geen bewijs dat beide Cyclopentradities dezelfde zijn.",
        "label": "Etna · latere associatie",
        "atlas": {
          "bounds": [
            10,
            34,
            19,
            40
          ],
          "label": "Etna · latere associatie",
          "center": [
            15,
            37.75
          ],
          "point": true
        }
      }
    ]
  },
  "folklore": {
    "title": "Achter de overlevering",
    "origin": "In Homerus ontmoeten we eenogige herdersreuzen zoals Polyphemos. In Hesiodos zijn drie Cyclopen goddelijke smeden.",
    "role": "De Homerische grotvertelling draait om gevaar en slimheid; de smeden leveren Zeus de bliksem. Ons hoofdbeeld volgt alleen de herdersrichting.",
    "meaning": "Ivo, Thaleia, het waterkanaal en de ontsnapping zijn eigen fictie. Er is geen verwonding van het oog en geen verkorte Odyssee.",
    "moral": "Wie goed luistert, vindt soms een uitgang die kracht niet kan openen.",
    "sources": [
      {
        "title": "Hesiodos — Cyclopen als smeden",
        "url": "https://www.theoi.com/Text/HesiodTheogony.html"
      },
      {
        "title": "Homerische Polyphemos-traditie",
        "url": "https://www.theoi.com/Gigante/GigantePolyphemos.html"
      }
    ]
  },
  "story": {
    "file": "./story.md",
    "image": scene,
    "imageAlt": "Een ingetogen onderzoeksbeeld bij het verhaal van Cycloop.",
    "note": "Een eigen vertelling voor Legends & Mythology. Personages, gesprekken en gebeurtenissen zijn fictie; folklore en latere beeldtradities worden in de notities apart toegelicht."
  },
  "artworkNote": "Tijdelijke lokale SVG-onderzoeksplaat; compositie en details wachten op definitief artwork."
} satisfies Creature;
