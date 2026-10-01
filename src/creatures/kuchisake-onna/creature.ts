import type { Creature } from '../types';
const anatomy = new URL('./anatomy.webp', import.meta.url).href;
const scene = anatomy;

export const kuchisakeOnna = {
  "id": "kuchisake-onna",
  "name": "Kuchisake-onna",
  "alternativeName": "Kuchi-sake-onna · Een stem in de regen",
  "book": "dark",
  "tags": ["Japan","regen","geruchten","stadslegende",
    "Kuchisake-onna",
    "Japan",
    "De vraag aan het einde van de straat"
  ],
  "region": {
    "name": "Japan",
    "displayName": "Japan",
    "tradition": "Japanse stadslegende, vooral bekend vanaf de late jaren 1970"
  },
  "reading": {
    "age": "12+",
    "minutes": 12
  },
  "introduction": {
    "title": "De vraag aan het einde van de straat",
    "shortText": "De regen maakt iedere stem zachter. Toch hoort Hana een vraag die precies voor haar bedoeld lijkt.",
    "invitation": "Een langzaam opgebouwd verhaal in vier fasen: gerucht, ontmoeting, keuze en nasleep."
  },
  "cover": anatomy,
  "anatomy": {
    "image": anatomy,
    "title": "Een wezen, stap voor stap",
    "imageAlt": "Een rustige onderzoeksplaat van Kuchisake-onna, getekend in inkt op papier.",
    "facts": [
      {
        "title": "Eerst een gewone figuur",
        "text": "De legende begint vaak met een vrouw die op het eerste gezicht gewoon lijkt. Onze illustratie bewaart afstand en onthult haar niet meteen.",
        "label": "Eerst een gewone figuur",
        "focus": {
          "x": 65,
          "y": 59
        }
      },
      {
        "title": "Een bedekt gezicht",
        "text": "Een masker is een herkenbaar motief in veel varianten. Een paraplu en regen ondersteunen hier onze eigen enscenering.",
        "label": "Een bedekt gezicht",
        "focus": {
          "x": 63,
          "y": 44
        }
      },
      {
        "title": "De vraag",
        "text": "De terugkerende vraag over schoonheid maakt de ontmoeting tot een dreigend gesprek. Antwoorden en uitwegen verschillen per verteller.",
        "label": "De vraag",
        "focus": {
          "x": 49,
          "y": 45
        }
      },
      {
        "title": "De verborgen mond",
        "text": "De betekenis van haar naam verwijst naar de angstaanjagende mond. We benoemen het motief zonder een expliciete verwonding af te beelden.",
        "label": "De verborgen mond",
        "focus": {
          "x": 62,
          "y": 52
        }
      },
      {
        "title": "Bewegen door een gewone straat",
        "text": "Een alledaagse omgeving maakt de stadslegende dichtbij. Snelheid en achtervolging verschillen per versie; onze straat is fictief.",
        "label": "Bewegen door een gewone straat",
        "focus": {
          "x": 53,
          "y": 72
        }
      },
      {
        "title": "Een spoor van geruchten",
        "text": "De legende werd eind jaren zeventig breed bekend. Geen anatomisch detail maakt een gerucht tot een werkelijk waargenomen persoon.",
        "label": "Een spoor van geruchten",
        "focus": {
          "x": 33,
          "y": 30
        }
      }
    ]
  },
  "location": {
    "image": anatomy,
    "title": "Een atlas van de overlevering",
    "imageAlt": "Herkenbare kustlijnen en culturele context voor Kuchisake-onna",
    "steps": [
      {
        "title": "Oost-Azië",
        "text": "De atlas geeft eerst de brede omgeving van Japan. De vertelling is een Japanse stadslegende, geen universele monstertraditie.",
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
            130,
            35
          ],
          "area": [
            118,
            25,
            145,
            46
          ]
        }
      },
      {
        "title": "Japan",
        "text": "De legende verspreidde zich door Japan en veranderde onderweg. Een heel land aanwijzen is passender dan één huis als oorsprong te claimen.",
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
        "title": "Straten en schoolpleinen",
        "text": "Folklorist Iikura Yoshiyuki bespreekt de brede verspreiding in de late jaren zeventig. Hana’s buurt is verzonnen; er komt geen exacte pin bij.",
        "label": "Een reizende stadslegende",
        "atlas": {
          "bounds": [
            125,
            28,
            148,
            47
          ],
          "label": "Een reizende stadslegende",
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
    "origin": "Kuchisake-onna is een Japanse stadslegende die vooral eind jaren zeventig breed bekend werd.",
    "role": "Een schijnbaar gewone ontmoeting wordt een bedreigende vraag. Details, antwoorden en manieren om te ontkomen wisselen per variant.",
    "meaning": "Hana, haar vriend, de gesloten winkel en de nasleep zijn eigen fictie. Het verhaal gebruikt de herkenbare vraag en verborgen onthulling zonder gore.",
    "moral": "Een gerucht kan een schaduw werpen, maar zorg voor elkaar blijft een echte handeling.",
    "sources": [
      {
        "title": "Nippon.com — interview met folklorist Iikura Yoshiyuki",
        "url": "https://www.nippon.com/en/japan-topics/g00789/japanese-urban-legends-from-the-slit-mouthed-woman-to-kisaragi-station.html"
      }
    ]
  },
  "story": {
    "file": "./story.md",
    "image": scene,
    "imageAlt": "Een ingetogen onderzoeksbeeld bij het verhaal van Kuchisake-onna.",
    "note": "Een eigen vertelling voor Legends & Mythology. Personages, gesprekken en gebeurtenissen zijn fictie; folklore en latere beeldtradities worden in de notities apart toegelicht."
  },
  "warning": "Dit verhaal bevat een bedreigende ontmoeting, onzekerheid en een niet-expliciete verwijzing naar een verborgen mond. Geen gore. Lees eerst als ouder mee; 12+ is een redactionele indicatie."
} satisfies Creature;
