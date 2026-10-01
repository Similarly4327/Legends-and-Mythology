# Het creature-contract

Alle negen wezens gebruiken de bestaande CreatureBook en StickyScroll. Iedere folder bevat creature.ts, story.md en lokale artwork-assets. Registratie staat eenmaal in src/creatures/index.ts. foundationCatalog.ts levert catalogusmetadata aan de bestaande hut en inhoudsopgave.

## Routes en boekcontext

/wezens/:slug en /creatures/:id zijn aliases. /creatures/:id/anatomy, /origin, /story en /folklore beginnen bij een onderdeel van het volledige document. Hoofdstukknoppen wisselen geen route. Buren blijven binnen hetzelfde boek. Sluit boek keert via een animatie terug naar de hut; daar kiest de normale UI een ander boek. Directe URLs openen hun eigen context. De eerdere creature-preview.html gebruikt nu dezelfde App.

## DiscoveryStep

Anatomie gebruikt title, text, label en optionele focus {x,y} in procenten. Alle huidige entries hebben zes stappen. De atlas gebruikt hetzelfde model met atlas {bounds, center, label, area?, point?}. Bounds en area zijn [west,south,east,north]; center is [longitude,latitude]. Area is een breed cultuurgebied. Point is alleen voor ondersteunde historische plekken, zoals Helikon, Heliopolis of de latere Etna-associatie. Een brede traditie krijgt geen verzonnen oorsprongspin.

IntersectionObserver stuurt focuswissels op een pixelgebaseerde leeslijn. Het sticky vlak eindigt met zijn parent. Op smalle/lage schermen staat een illustratie of kaart vóór iedere tekststap. StoryReader laat het volledige proza in de documentflow staan; er is geen intern scrollvlak.

## Verhaal en bronnen

story.md bevat een eigen verhaal met h1-titel en h2-beats. De renderer verlaagt koppen één niveau, zodat de creature-naam de enige h1 is. HTML wordt tekst; Markdown voert geen code uit. Alle verhalen voldoen aan de richtlengten en ieder donker verhaal heeft vier fasen.

folklore.origin, role en meaning onderscheiden bekende traditie, latere beeldvorm en eigen fictie. sources bevat bronlinks. warning geeft het donkere samenleesmoment. artworkNote documenteert tijdelijke platen in de data zonder implementatietekst in de leesflow.

## Artwork

Pegasus behoudt zijn WebP-platen. Draak en Kuchisake-onna gebruiken kopieën van bestaande lokale afbeeldingen in eigen folders. Fenix, Baku, Cycloop, Manticore, Wendigo en Baba Yaga hebben tijdelijke SVG-platen die hun compositie ondersteunen. De Wendigo-plaat toont een verhulde mensvorm zonder gewei of hertenschedel.

AtlasMap gebruikt lokale Natural Earth-data met brede 1:110m en geselecteerde 1:50m geometrie. Zie atlas/README.md voor provenance. Vervang artwork met new URL('./asset.webp', import.meta.url).href; Vite bundelt dit voor GitHub Pages.

## Controle

pnpm check valideert typecheck, lint, 20 tests, stories, atlasstappen en build. Negen readers zijn verticaal in beide richtingen getest op vier viewportformaten (36 flows). Fysieke iOS/Safari-controle is niet uitgevoerd.
