# Legends & Mythology

Een digitaal, geïllustreerd bestiarium dat voelt als een verzameling onderzoeksboeken. Dit project is de eerste websitefundering: een studeerkamer, drie boeken, inhoudsopgaven en voorbeeldverslagen voor Pegasus, Draak en Kuchisake-onna. De verhalen zijn lokale, redactioneel samengestelde demo-inhoud.

## Starten

Gebruik **Node.js 24+** en **pnpm 11.19.0** (de versie staat in `package.json`). Installeer pnpm via de [officiële installatie-instructies](https://pnpm.io/installation) als het nog niet beschikbaar is.

```sh
pnpm install
pnpm dev
```

Vite toont het lokale adres, gewoonlijk `http://127.0.0.1:5173/`. Als die poort bezet is, kiest Vite de volgende vrije poort.

```sh
pnpm typecheck  # strict TypeScript
pnpm lint      # ESLint en React-hooks
pnpm test      # kernchecks voor content, registratie, routing, Markdown en scrollselectie
pnpm build     # typecheck, contentvalidatie en productiebuild naar dist/
pnpm preview   # bekijk de gebouwde website op een lokale webserver
pnpm check     # alle bovenstaande kwaliteitschecks en de build
```

De native Vite-configuratielader gebruikt Node's ingebouwde TypeScript-ondersteuning. Daardoor hoeft de eenvoudige `vite.config.ts` niet eerst via een apart bundelproces te worden geladen. Node 24 is hiervoor de gekozen basis.

## Stack en architectuur

- React + TypeScript, strict, met Vite.
- React Router met `HashRouter`, zodat directe routes en refresh op statische hosting blijven werken.
- CSS Modules voor de website en de doorlopende reader. De parallel toegevoegde folder-reader gebruikt eigen CSS binnen `@scope (.creature-experience)`.
- Semantische CSS-variabelen voor papier, inkt, lijnen, accent en het illustratievlak. `data-theme="wonder|thrilling|frightening"` bepaalt het boekthema.
- Browser-native IntersectionObserver voor de doorlopende story engine; CSS voor lichte overgangen. Geen animatie- of globale statebibliotheek.
- Lokaal gebundelde lettertypen: Cormorant Garamond voor de boektypografie, DM Sans voor bediening en kleine notities.
- Lokale WebP-illustraties. Geen AI-API, backend, account, database of betaling in de app.

De website kiest een helder hoofdstukmodel met een willekeurig aantal hoofdstukken, stappen en visuele staten. Een zwartboek-entry hoeft dus geen anatomie of vier vaste hoofdstukken te hebben. De huidige donkere demo bevat drie atmosferische verhaalstappen en daarna culturele context, zonder expliciete onthulling.

Tijdens de bouw is een apart folder-based creature-systeem toegevoegd. Dat is behouden: Pegasus opent deze reader; Draak en Kuchisake-onna gebruiken de doorlopende foundation-reader. De catalogusadapter maakt beide contentbronnen zichtbaar in dezelfde boekoverzichten. De aanvullende documentatie staat in [docs/creature-system.md](docs/creature-system.md). Het samenbrengen van beide contentmodellen is een geschikte volgende architectuurstap; wijzig de adapter en de presentatie onafhankelijk van elkaar.

## Routes

| Route na `#` | Inhoud |
| --- | --- |
| `/` | De studeerkamer en de drie boeken |
| `/boeken/wonder` | Het lichte boek |
| `/boeken/thrilling` | Het bruine boek |
| `/boeken/frightening` | Het zwarte boek |
| `/wezens/:slug` | Veldverslag; kiest de passende geregistreerde reader |
| `/creatures/:id` | Folder-reader, momenteel Pegasus |
| `/creatures/:id/:chapter` | Folder-hoofdstuk: anatomy, origin, story, folklore |
| `/over` | Over het bestiarium, bewerkingen en samen lezen |

Onbekende routes, boeken en creature-slugs krijgen een herstelpagina. `draft` staat niet in de publieke inhoudsopgave. `locked` en `coming-soon` krijgen een herkenbare kaartstatus en openen nog geen reader. Een lege collectie en een zoekopdracht zonder resultaat hebben eigen lege staten. Ontbrekende foundation-illustraties krijgen een papieren placeholder met toegankelijke omschrijving.

## Mappen

```text
.github/workflows/pages.yml      Validatie en Pages-deployment
public/artwork/                  Verwisselbare website- en demo-illustraties
src/
  App.tsx                       Routing en scrollreset bij navigatie
  components/                   Boekobjecten, kaarten, header, foutstaten
    reader/                     Header, sticky engine, beelden, kaart, notities
  pages/                        Landing, inhoudsopgave, reader, over-pagina
  content/
    types.ts                    Het foundation-contentcontract
    books.ts                    De drie collecties
    creatures/                  Foundation-demo's met hoofdstukken en beeldstaten
    repository.ts               Catalogus, lookup, zoeken, buren, validatie
  creatures/                    Folder-content met creature.ts, story.md en artwork
  creature-book/                Folder-reader en catalogusadapter
  integrations/contracts.ts     Toekomstige identity/progress/entitlement-adapters
  lib/                          Assetpaden, scrollselectie, veilige Markdown-parser
  styles/global.css             Basisregels, tokens, thema's, reduced motion
scripts/validate-content.ts     Contentcheck tijdens iedere build
tests/                          Kleine kernchecks
docs/                           Content- en artworkdocumentatie
```

## Content toevoegen aan de doorlopende reader

Maak bijvoorbeeld `src/content/creatures/nieuw-wezen.ts`. Gebruik `satisfies Creature` of een expliciete `Creature`-typeannotatie. Registreer de export in de array van `src/content/repository.ts`. Er hoeft geen nieuwe route of pagina te worden gemaakt.

```ts
import type { Creature } from '../types';

export const nieuwWezen = {
  id: 'nieuw-wezen',
  slug: 'nieuw-wezen',
  name: 'Nieuw wezen',
  category: 'wonder',
  region: 'Regio',
  tradition: 'Culturele traditie',
  summary: 'Een korte uitnodiging.',
  status: 'draft',
  age: '6+',
  readingMinutes: 3,
  tags: ['onderwerp'],
  artwork: {
    src: 'artwork/nieuw-wezen.webp',
    alt: 'Beschrijf de betekenisvolle inhoud van de illustratie.',
    width: 1080,
    height: 1440,
  },
  chapters: [{
    id: 'ontmoeting',
    title: 'De eerste ontmoeting',
    kind: 'discovery',
    states: [{ id: 'intro', kind: 'illustration', caption: 'Een eerste veldschets' }],
    steps: [{
      id: 'eerste-spoor',
      visualState: 'intro',
      title: 'Een eerste spoor.',
      paragraphs: ['De tekst van de eerste stap.'],
    }],
  }],
  sources: [{ title: 'Bron of redactionele notitie', note: 'Wat onderbouwt deze bron?' }],
  editorialNote: 'Beschrijf welke delen folklore zijn en welke onze eigen bewerking.',
} satisfies Creature;
```

Een stap verwijst met `visualState` naar een state binnen hetzelfde hoofdstuk. Meerdere stappen mogen hetzelfde beeld gebruiken. Er zijn beeldtypen `illustration`, `anatomy`, `map`, `traces` en `scene`. Met `artwork` op een state kun je een andere illustratie kiezen; zonder override gebruikt de state het creature-artwork. `annotations` voegen labels met procentuele coördinaten toe. `location` bevat het label en de plek op de schematische verhalenkaart. `treatment` biedt subtiele uitsnedes en afstandssfeer.

Een stap kan ook `eyebrow`, `facts` en `note` bevatten. Hoofdstukken zijn geen vier hard-coded URL-pagina's: je mag ze toevoegen, samenvoegen, inkorten of in een andere volgorde plaatsen. Een optionele `warning` toont een leesmoment vóór de foundation-reader. Dat moment wordt alleen binnen de huidige reader-sessie bevestigd en is geen accountontgrendeling of leeftijdscontrole.

De build valideert dubbele ids/slugs, routevriendelijke slugs, publicatiestatus, ontbrekende metadata, hoofdstukken, bronnen, dubbele states, kapotte stateverwijzingen, kaartcontext, annotatieposities en artworkbeschrijvingen. De folder-registratie heeft aanvullende checks in `src/creatures/registry.ts`.

Voor een creature in het folder-systeem kopieer je `src/creatures/pegasus/` en registreer je het in `src/creatures/index.ts`. Deze worden via `foundationCatalog.ts` automatisch in de websitecatalogus opgenomen. Zie de afzonderlijke creature-documentatie voor het eigen formaat en de veilige `story.md`-ondersteuning.

## Artwork

Foundation-artwork staat in `public/artwork/`: `cabin.webp`, `pegasus.webp`, `draak.webp` en `rain.webp`. Vervang deze bestanden of wijzig de contentverwijzing; houd afmetingen en alt-tekst actueel. De boekomslagen zijn toegankelijke links met een CSS-materiaaloppervlak en losse SVG-folie-emblemen. Je kunt later een echte coverafbeelding invoegen zonder de navigatie te wijzigen.

Afbeeldingen worden tegen `import.meta.env.BASE_URL` opgelost. Gebundelde folder-assets houden hun door Vite gemaakte URL. Gebruik geen handmatig vastgelegde `/artwork/...`-paden voor projecthosting. Houd toekomstige illustraties op geschikte afmetingen, comprimeer naar WebP/AVIF en reserveer ruimte om layout shift te beperken. Alleen het primaire beeld wordt met hoge prioriteit geladen; overige platen gebruiken lazy loading.

De tijdelijke foundation-assets zijn gemaakt met de ingebouwde imagegen-tool en geoptimaliseerd naar WebP. De volledige prompts staan in [docs/artwork-prompts.json](docs/artwork-prompts.json); de Pegasus-folderillustraties hebben hun eigen [assetdocumentatie](docs/creature-illustrations.md). Er vindt geen beeld- of verhaalgeneratie plaats tijdens het gebruik van de website.

## Hoe de sticky story engine werkt

`StickyStorySection` tekent een hoofdstuk met twee kolommen. De linkerkolom bevat een sticky canvas met identiek bemeten beeldlagen. Alle tekststappen in de rechterkolom bepalen de lengte van het hoofdstuk; lang verhaalproza verkort het canvas dus niet.

IntersectionObserver kijkt naar een smalle horizontale leeslijn op 36% van de viewporthoogte. Bij een grensovergang leest de component de stapgeometrie en kiest `selectActiveStep` de laatste stap die de lijn is gepasseerd. Dit werkt in beide scrollrichtingen en bij een start midden in een hoofdstuk. De pixelmarges worden bij resize herberekend: verticale procentuele `rootMargin`-waarden worden door de browser op de viewportbreedte gebaseerd en zijn hier daarom ongeschikt.

De canvaspositie verandert niet bij een andere state. Alleen de zichtbaarheidslaag wisselt met een rustige fade. Er is geen permanente scroll-eventlus en geen scrolljacking. De actuele hoofdstuktitel wordt ook in de compacte readernavigatie gemarkeerd.

Op schermen tot 700px breed, of onder 560px hoog, valt de doorlopende reader terug op beeld vóór tekst per stap. Er is dan geen desktop-sticky vlak dat de leesruimte inneemt. De CSS respecteert `prefers-reduced-motion`; programmatisch scrollen respecteert dezelfde voorkeur. De folder-reader heeft een afzonderlijke, kleinere sticky mobiele compositie.

## Toegankelijkheid en controleren

De website heeft semantische secties, beschrijvende linknamen, een focusbare hoofdinhoud, een werkende overslaanlink, zichtbare focus, alt-teksten, benoemde icon-knoppen en een tekstvergrotingsknop in de foundation-reader. Nieuwe illustraties en copy moeten dezelfde zorg krijgen. Essentiële informatie hangt niet alleen van thema-kleur af.

Voor de foundation-reader zijn forward/reverse statewissels, canvaspositie, zoeken, leesmoment, tekstvergroting, back/forward en foutstaten in een Chromium-browser gecontroleerd. De layouts zijn bekeken op 390×844, 768×1024, 1024×768 en 1440×900. Dit zijn viewportcontroles; echte iOS Safari- en touch-devicecontroles blijven een nuttige vervolgstap. Browser-artifacts staan lokaal onder het genegeerde `output/playwright/`.

Controleer na contentuitbreidingen in elk geval een lange tekststap, de hoofdstukovergang, de laatste stap, mobiel zonder horizontale overflow, iPad in beide oriëntaties, toetsenbordbediening en reduced motion.

## GitHub Pages

De workflow in `.github/workflows/pages.yml` valideert pull requests. Een push naar `main` of een handmatige workflowrun bouwt en deployt daarna naar Pages. Deze opdracht bereidt dat voor; er is nog niets gepusht of gepubliceerd.

1. Zet in de GitHub-repository **Settings → Pages → Build and deployment → Source** op **GitHub Actions**.
2. Commit en push de projectbestanden inclusief `pnpm-lock.yaml` naar `main`.
3. Controleer de workflow **Validate and deploy to GitHub Pages** in Actions.
4. Open het adres dat de deployment geeft. Voor deze repository is het verwachte projectadres `https://Similarly4327.github.io/Legends-and-Mythology/`.

`base: './'` maakt de gebouwde scripts, fonts en public-assets relatief aan de statische index. `HashRouter` houdt bijvoorbeeld `#/boeken/wonder` en `#/wezens/draak` buiten het pad dat de server ontvangt. Een refresh vraagt daarom opnieuw de bestaande project-index op, zonder SPA-404-hack. Dit werkt ook onder een andere projectnaam of op een eigen domein. Serveer `dist/` via HTTP; open de HTML niet direct als `file://`.

Technische achtergrond: [Vite statische deployment](https://vite.dev/guide/static-deploy) en [React Router HashRouter](https://reactrouter.com/api/declarative-routers/HashRouter).

## Toekomstige integraties

`src/integrations/contracts.ts` bevat grenzen voor `IdentityAdapter`, `ProgressAdapter`, `EntitlementAdapter`, `UserProgress`, `Entitlements` en `ReaderPreferences`. Er is nog geen concrete storage-adapter aangesloten. Favorieten, gelezen wezens, voortgang, ouderprofielen en apparaatsynchronisatie kunnen later achter deze interfaces worden toegevoegd; UI-componenten hoeven zelf geen authenticatie- of databasecode te krijgen.

De foundation-creaturemetadata ondersteunt optionele `packageId` en `entitlementId`. Die reserveren ruimte voor bundels en rechten, maar verkopen of ontsluiten momenteel niets. De zwarteboek-waarschuwing is uitsluitend een samenleesmoment.

Waardevolle volgende iteraties: één contentcontract voor beide readers, redactioneel beoordeelde definitieve illustraties en bronnotities, echte Safari/iPad-controle, opgeslagen leesvoortgang via een losse adapter en herbruikbare printplaten per wezen.
