# Legends & Mythology

Een geïllustreerd bestiarium met een studeerkamer, drie fysieke boeken en negen volledige vertellingen. Folklore, latere beeldtradities en eigen fictie worden apart toegelicht.

| Boek | Leesvolgorde |
| --- | --- |
| Licht / wonder | Pegasus → Fenix → Baku |
| Bruin / adventure | Draak → Cycloop → Manticore |
| Zwart / dark | Kuchisake-onna → Wendigo → Baba Yaga |

## Starten

Gebruik Node.js 24+ en pnpm 11.19.0 (vastgelegd in package.json). Installeer pnpm zo nodig via de [officiële instructies](https://pnpm.io/installation).

```sh
pnpm install
pnpm dev
pnpm check
pnpm preview
```

Vite toont het lokale adres; de native configuratielader gebruikt Node's TypeScript-ondersteuning. `pnpm check` voert typecheck, lint, 20 kernchecks, contentvalidatie en productiebuild uit. `pnpm build` schrijft dist/. Serveer die via HTTP, niet als file://.

## Architectuur en routes

React, strict TypeScript en Vite. HashRouter ondersteunt GitHub Pages zonder SPA-404-hack. CSS Modules verzorgen de website; de bestaande CreatureBook gebruikt eigen CSS binnen `@scope (.creature-experience)`. Lettertypen en illustraties staan lokaal. Geen backend, account, betaling of runtime-AI.

Alle publieke creature-routes gebruiken dezelfde bestaande reader en het foldercontract. Draak en Kuchisake-onna zijn naar dat contract overgebracht. De catalogusadapter levert metadata aan de bestaande inhoudsopgaven, geen tweede verhaalmodel. De oudere foundation-readerbestanden blijven als historische implementatie/testfixtures aanwezig, maar zijn niet aan een publieke route gekoppeld. De reader wordt apart geladen om de eerste bundel klein te houden.

| Route na # | Inhoud |
| --- | --- |
| / | Studeerkamer met drie boeken |
| /boeken/wonder | Lichte inhoudsopgave |
| /boeken/thrilling | Bruine inhoudsopgave |
| /boeken/frightening | Zwarte inhoudsopgave |
| /wezens/:slug | Doorlopend veldverslag |
| /creatures/:id | Alias voor dezelfde reader |
| /creatures/:id/:chapter | Hetzelfde document, start bij anatomy, origin, story of folklore |
| /over | Toelichting op bewerkingen en samen lezen |

Een wezen is één document: intro → anatomie → herkomst/atlas → verhaal → folklore. Hoofdstukknoppen scrollen binnen dit document. Oude hoofdstuk-URLs positioneren bij het juiste onderdeel zonder overige onderdelen weg te laten. Het donkere samenleesmoment verschijnt opnieuw bij een ander donker wezen; de leeftijd is een redactionele indicatie.

## Doorlezen en boekwissels

StickyScroll begrenst het sticky beeld tot de eigen anatomie-/atlassectie. Tekststappen bepalen de sectiehoogte; na de laatste stap laat het beeld los. IntersectionObserver kijkt naar een pixelgebaseerde leeslijn op 52% van de viewport en herberekent bij resize. Er is geen constante scrollhandler, verticale preventDefault of scroll-lock op de reader-root.

Het volledige verhaal staat in de documentflow naast een sticky illustratie. Er is geen intern scrollvlak of overscroll-containment. Onder 760px breed of 560px hoog verschijnen beeld en tekst per stap onder elkaar en wordt de verhaalillustratie statisch. Reduced motion schakelt boekanimaties en soepel scrollen uit.

Vorige/volgende wordt uitsluitend uit siblings van hetzelfde boek afgeleid. De inhoudsopgave bevat alleen dat boek. **Sluit boek** toont een korte sluitanimatie en keert terug naar de hut. Daar opent een ander fysiek boek met zijn eigen openanimatie naar de inhoudsopgave. Directe URLs openen vanzelf het juiste thema.

## Content toevoegen

1. Kopieer een folder onder src/creatures/. Geef creature.ts een uniek id en gebruik `satisfies Creature` uit src/creatures/types.ts.
2. Kies book: wonder, adventure of dark. Registreer de export eenmaal in src/creatures/index.ts. De arrayvolgorde bepaalt de leesvolgorde binnen elk boek. De adapter foundationCatalog.ts vertaalt adventure naar thrilling en dark naar frightening voor de bestaande websitecatalogus.
3. Maak meestal 5–7 korte anatomiestappen. Een optionele focus met procentuele x/y toont één label op de hoofdillustratie.
4. Geef 3–4 atlasstappen een atlas met bounds `[west,south,east,north]`, center `[longitude,latitude]`, label en eventueel een brede area met dezelfde grensvolgorde. Alleen een brononderbouwde cultuurhistorische plek krijgt point: true. Een regio is geen vermeende woonplaats.
5. Schrijf een volledig eigen verhaal in story.md: circa 700–1000 woorden voor licht, 900–1300 voor spannend en 1400–2000 voor zwart. De donkere entries gebruiken vier verhaalbeats. De veilige Markdown-renderer ondersteunt koppen, paragrafen, nadruk, lijsten en citaten; HTML blijft tekst.
6. Voeg bronlinks, variantnotities en een scheiding tussen folklore en eigen fictie toe. Een donker wezen krijgt een eigen warning. artworkNote documenteert een tijdelijke plaat in de data.

De build controleert registratie, atlasgrenzen, aantallen stappen, ontbrekende verhalen en onbedoeld korte teasers. Zie [het creature-contract](docs/creature-system.md).

## Lokale atlas en artwork

AtlasMap gebruikt Natural Earth-geografie: 1:110m voor brede context en 1:50m voor regionale details van Griekenland, Italië, Japan en Egypte. Kustlijnen en meren zijn lokaal tot compacte SVG-padstrings verwerkt. Eén stap toont één focus; brede gebieden krijgen een ellips, ondersteunde plekken een punt. Er is geen externe kaart-API of tracking. [Bron en verwerking](src/creature-book/atlas/README.md).

Pegasus behoudt zijn WebP-platen. Draak en Kuchisake-onna gebruiken kopieën van de bestaande beelden in hun eigen folders. De zes nieuwe entries gebruiken tijdelijke lokale SVG-onderzoeksplaten. De Wendigo is een verhulde menselijke schaduw zonder gewei of hertenschedel. Definitief artwork kan per folder worden vervangen via `new URL('./asset.webp', import.meta.url).href`, zonder readerwijziging.

De hut en historische foundation-assets staan in public/artwork/. [Eerdere imagegen-prompts](docs/artwork-prompts.json) en [Pegasus-assetdocumentatie](docs/creature-illustrations.md) blijven bewaard. Assets worden relatief opgelost; gebruik geen harde /artwork/-paden op projecthosting.

## Controle

De negen readers zijn in de browser met gewone paginascroll volledig omlaag en omhoog gecontroleerd op **390×844, 768×1024, 1024×768 en 1440×900**: 36 leesflows zonder vastlopen of horizontale overflow. Ook boekgrenzen, sluiten/openen, hoofdstuk-deeplinks, atlasfocus en sticky release zijn gecontroleerd. Dit zijn Chromium-viewportcontroles; fysieke iOS/Safari-tests zijn niet uitgevoerd.

De site heeft semantische secties, een overslaanlink, beschrijvende linknamen, zichtbare focus, lokale alt-teksten en reduced motion. Kernchecks staan in tests/, contentvalidatie in scripts/validate-content.ts. Browserresultaten en screenshots staan lokaal in het genegeerde output/playwright/.

## GitHub Pages

De workflow .github/workflows/pages.yml valideert PRs. Een push naar main of een handmatige workflowrun bouwt en deployt naar Pages. De repository staat op GitHub Actions als publicatiebron. Lokale wijzigingen worden pas zichtbaar na commit/push en een geslaagde deployment.

1. Settings → Pages → Build and deployment → Source: GitHub Actions.
2. Commit/push inclusief pnpm-lock.yaml naar main.
3. Controleer Validate and deploy to GitHub Pages in Actions.
4. Open [de Pages-site](https://similarly4327.github.io/Legends-and-Mythology/).

Vite gebruikt base: './'; HashRouter houdt routes na # buiten het serverpad. De gebouwde scripts, fonts en lokale beelden werken daardoor ook onder een projectsubpad. Achtergrond: [Vite deployment](https://vite.dev/guide/static-deploy), [HashRouter](https://reactrouter.com/api/declarative-routers/HashRouter).

## Toekomstige integraties

src/integrations/contracts.ts bevat afzonderlijke interfaces voor identity, progress, entitlement en reader preferences. Er is geen storage-adapter aangesloten. Favorieten, voortgang, ouderprofielen en synchronisatie kunnen later via deze interfaces worden toegevoegd. Package-/entitlementmetadata reserveert ruimte voor toekomstige bundels, zonder nu iets te verkopen of ontgrendelen.
