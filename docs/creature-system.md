# Legends & Mythology

Een geïllustreerd onderzoeksboek met één herbruikbare Creature Page. React, TypeScript en Vite. Pegasus is de referentie voor het boek `wonder`.

## Starten

```sh
pnpm install
pnpm dev
pnpm check
```

De app gebruikt een HashRouter voor statische hosting (ook op een GitHub Pages-subpad). Een directe link is bijvoorbeeld `/#/creatures/pegasus`, met hoofdstukken `/anatomy`, `/origin`, `/story` en `/folklore`. De bestaande `/wezens/pegasus`-route opent dezelfde ervaring. `pnpm build` maakt `dist/`; serveer deze map via een webserver.

Een zelfstandige ontwikkelpreview staat op `/creature-preview.html#/creatures/pegasus`. Zo kan de reader getest worden terwijl andere chats het websitefundament wijzigen. `pnpm exec tsc -p tsconfig.creature-check.json` controleert alleen dit systeem.

## Een nieuw wezen toevoegen

1. Kopieer `src/creatures/pegasus/` naar `src/creatures/<id>/`.
2. Wijzig `creature.ts`: exportnaam, uniek id, naam, boek (`wonder`, `adventure` of `dark`), korte gegevens, illustraties en bronnen. De TypeScript-interface `Creature` bewaakt het formaat.
3. Vervang de illustraties. De `new URL('./asset.webp', import.meta.url)`-regels worden door Vite gebundeld. PNG, WebP en SVG zijn bruikbaar; pas die bestandsnamen aan. `cover` mag dezelfde illustratie als `anatomy.image` gebruiken. De URL-vorm laat de catalogus ook in Node-tests werken.
4. Schrijf `story.md`. De veilige Markdown-renderer ondersteunt paragrafen, koppen van niveau 1–6, nadruk, vet, opsommingen en citaten. HTML wordt als tekst behandeld. Zet `story.file` op `./story.md`.
5. Importeer het wezen in `src/creatures/index.ts` en voeg het toe aan `creatures`.

Binnen de creature-ervaring werken het juiste boek, de inhoudsopgave, routes en vorige/volgende navigatie vervolgens automatisch. Anatomie en kaart gebruiken dezelfde `src/creature-book/StickyScroll.tsx`; aantallen stappen zijn dynamisch. Het verhaal wordt automatisch uit de creature-map geladen. Er zijn geen nieuwe pagina's nodig. De layout en de stijlen staan in `src/creature-book/`; CSS is beperkt tot deze ervaring via `@scope`.

Het tegelijk ontwikkelde websitefundament gebruikt `src/content/repository.ts` voor de studeerkamer en boekoverzichten. De adapter `src/creature-book/foundationCatalog.ts` neemt alle geregistreerde folder-creatures automatisch op in die overzichten. Deze vertaalt `adventure` naar de bestaande categorie `thrilling` en `dark` naar `frightening`; de canonieke creature-data blijft de gevraagde boeknamen gebruiken. De bestaande `/wezens/:slug`-route kiest de nieuwe reader voor folder-creatures en behoudt de oude reader voor de andere demonstratiewezen.

## Leeservaring

- Ontmoeting: een rustig geïllustreerd begin, met één uitnodiging om verder te ontdekken.
- Anatomie en herkomst: sticky illustratie met korte scrollstappen. Klikbare stapindicatoren bieden een alternatief voor scrollen. Op mobiel blijft het beeld kleiner en scrollt de tekst natuurlijk onder de illustratie door. Reduced motion wordt gerespecteerd.
- Verhaal: ongeveer twee derde illustratie, één derde onafhankelijk scrollbaar leesvlak; ook met toetsenbord te bedienen.
- Folklore: oorsprong, rol en betekenis; optionele gedachte en bronnen.
- De boekenknop opent een native modal met focusbeheer, Escape en focusherstel. Onbekende routes hebben een herstelpagina.

Creature-specifieke data, teksten en afbeeldingen blijven in de eigen map. Stabiele ids zijn geschikt voor latere favorieten, voortgang, accounts, audio en taalvarianten. Die functies zijn nog niet gebouwd. Boekthema's veranderen kleuren zonder de structuur te veranderen.

De Pegasus-vertelling is een nieuwe, vrije bewerking van de Hippokrene-mythe. De kaart is gestileerd, niet op schaal. De UI gebruikt lokaal gebundelde Cormorant Garamond en DM Sans, met systeemfonts als fallback. De illustraties zijn geoptimaliseerd naar WebP; de app hoeft geen externe afbeeldingen op te halen. Zie `creature-illustrations.md` voor de assetpaden en de volledige prompts van de ingebouwde imagegen-tool.
