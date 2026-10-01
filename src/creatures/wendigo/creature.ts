import type { Creature } from '../types';
const anatomy = new URL('./plate.svg', import.meta.url).href;
const scene = anatomy;

export const wendigo = {
  "id": "wendigo",
  "name": "Wendigo",
  "alternativeName": "Windigo · Wiindigoo",
  "book": "dark",
  "tags": ["winter","honger","kou","Ojibwe","Cree",
    "Wendigo",
    "Noordelijke Great Lakes & subarctische gebieden",
    "De honger buiten de kring"
  ],
  "region": {
    "name": "Noordelijke Great Lakes & subarctische gebieden",
    "displayName": "Noordelijke Great Lakes & subarctische gebieden",
    "tradition": "Uiteenlopende Algonquiaanstalige tradities, onder meer Ojibwe en Cree"
  },
  "reading": {
    "age": "12+",
    "minutes": 12
  },
  "introduction": {
    "title": "De honger buiten de kring",
    "shortText": "De voorraad wordt kleiner. De voetsporen worden langer. En niemand wil als eerste zeggen wat hij gehoord heeft.",
    "invitation": "Lees een eigen wintervertelling over wantrouwen, delen en een honger die geen grens meer kent."
  },
  "cover": anatomy,
  "anatomy": {
    "image": anatomy,
    "title": "Sporen van een onbegrensde honger",
    "imageAlt": "Een verhulde menselijke schaduw tussen winterbomen, zonder gewei of hertenschedel.",
    "facts": [
      {
        "title": "Sporen vóór een lichaam",
        "text": "Onze eerste aanwijzing bestaat uit afdrukken in sneeuw. Dit is eigen verhaalbeeld, geen universele herkenningsregel uit alle gemeenschappen.",
        "label": "Sporen vóór een lichaam",
        "focus": {
          "x": 47,
          "y": 83
        }
      },
      {
        "title": "Een gedeeltelijke mensvorm",
        "text": "De plaat kiest een verhulde, menselijke schaduw. Tradities kennen uiteenlopende vormen; dit beeld legt geen vaste monsteranatomie op.",
        "label": "Een gedeeltelijke mensvorm",
        "focus": {
          "x": 51,
          "y": 48
        }
      },
      {
        "title": "Kou rond de ontmoeting",
        "text": "Winter en honger zijn belangrijke motieven in veel verhalen. Adem en stilte in onze scène laten die sfeer voelen.",
        "label": "Kou rond de ontmoeting",
        "focus": {
          "x": 40,
          "y": 30
        }
      },
      {
        "title": "Honger zonder genoeg",
        "text": "De onverzadigbare honger raakt aan het overschrijden van menselijke grenzen. Kannibalisme is een ernstig taboe in deze verhaalcontext.",
        "label": "Honger zonder genoeg",
        "focus": {
          "x": 51,
          "y": 57
        }
      },
      {
        "title": "Geen gewei als standaard",
        "text": "Het hertenschedel- en gewei-beeld uit populaire cultuur is geen universele traditionele vorm. Onze plaat gebruikt geen van beide.",
        "label": "Geen gewei als standaard",
        "focus": {
          "x": 50,
          "y": 20
        }
      },
      {
        "title": "De gemeenschap blijft belangrijk",
        "text": "De gekozen bronrichting verbindt menselijke ontwrichting met een destructieve honger. Ons delen van voedsel is een eigen narratieve keuze, geen nagebootst ceremonieel ritueel.",
        "label": "De gemeenschap blijft belangrijk",
        "focus": {
          "x": 61,
          "y": 70
        }
      }
    ]
  },
  "location": {
    "image": anatomy,
    "title": "Een atlas van de overlevering",
    "imageAlt": "Herkenbare kustlijnen en culturele context voor Wendigo",
    "steps": [
      {
        "title": "Noord-Amerika",
        "text": "Algonquiaanstalige gemeenschappen bestrijken verschillende gebieden. Taalverwantschap betekent niet dat alle verhalen hetzelfde zijn.",
        "label": "Noord-Amerika",
        "atlas": {
          "bounds": [
            -145,
            25,
            -50,
            76
          ],
          "label": "Noord-Amerika",
          "center": [
            -94,
            52
          ],
          "area": [
            -115,
            40,
            -70,
            66
          ]
        }
      },
      {
        "title": "Great Lakes en noordelijk bos",
        "text": "De brede noordelijke Great Lakes- en subarctische context helpt oriënteren. Een gestippeld gebied vervangt een misleidende oorsprongspin.",
        "label": "Great Lakes & noordelijk bos",
        "atlas": {
          "bounds": [
            -115,
            39,
            -65,
            65
          ],
          "label": "Great Lakes & noordelijk bos",
          "center": [
            -88,
            51
          ],
          "area": [
            -102,
            43,
            -76,
            59
          ]
        }
      },
      {
        "title": "Stemmen verschillen",
        "text": "Onze bronrichting omvat de Ojibwe-term wiindigoo en een opgetekende Sandy Lake Cree-vertelling. Geen enkele plaats vertegenwoordigt alle gemeenschappen.",
        "label": "Verschillende gemeenschappen",
        "atlas": {
          "bounds": [
            -110,
            40,
            -70,
            62
          ],
          "label": "Verschillende gemeenschappen",
          "center": [
            -92,
            52
          ],
          "area": [
            -102,
            45,
            -80,
            59
          ]
        }
      }
    ]
  },
  "folklore": {
    "title": "Achter de overlevering",
    "origin": "Wendigo-verhalen bestaan in verschillende Algonquiaanstalige tradities, waaronder Ojibwe- en Cree-contexten. Verhalen en benamingen verschillen per gemeenschap.",
    "role": "Veel verhalen verbinden winter, honger en het taboe van kannibalisme met een destructieve grensoverschrijding. De gekozen bronnen geven geen universeel model voor iedere variant.",
    "meaning": "Onze reizigers en het voedseldepot zijn fictief. De verhulde mensvorm is een terughoudende artistieke keuze, geen claim dat iedere gemeenschap het wezen zo beschrijft.",
    "moral": "Wanneer niemand meer deelt, wordt de honger groter dan de groep.",
    "sources": [
      {
        "title": "Sacred Legends of the Sandy Lake Cree — Carl Ray en James Stevens",
        "url": "https://epe.lac-bac.gc.ca/100/205/301/ic/cdc/clan/legends/windigo.htm?nodisclaimer=1"
      },
      {
        "title": "Ojibwe People’s Dictionary — wiindigoo",
        "url": "https://ojibwe.lib.umn.edu/main-entry/wiindigoo-na"
      }
    ]
  },
  "story": {
    "file": "./story.md",
    "image": scene,
    "imageAlt": "Een gedeeltelijk verhulde gestalte in een winterbos, zonder gewei of hertenschedel.",
    "note": "Een eigen vertelling voor Legends & Mythology. Personages, gesprekken en gebeurtenissen zijn fictie; folklore en latere beeldtradities worden in de notities apart toegelicht."
  },
  "warning": "Een winterverhaal met hongersnood, wantrouwen en het taboe van kannibalisme als folklorecontext. De vertelling toont geen expliciet geweld. Lees samen; 12+ is een indicatie.",
  "artworkNote": "Tijdelijke lokale SVG-onderzoeksplaat; compositie en details wachten op definitief artwork."
} satisfies Creature;
