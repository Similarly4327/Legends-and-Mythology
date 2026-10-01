# Controle van het Creature Page-systeem

- TypeScript, ESLint, Node-tests en Vite-productiebuild uitgevoerd met `pnpm check`.
- Tests bewaken Markdown-paragrafen/hoofdstukken, unieke ids, niet-lege ontdekkingstappen, boekfiltering en vorige/volgende navigatie.
- Integratietests bewaken opname van folder-creatures in het bestaande boekoverzicht en de vertaalslag van `wonder/adventure/dark` naar de categorieën van het websitefundament.
- Browsercontrole op desktop, tablet (820 × 1180) en telefoon (390 × 844).
- Via het lichte boek naar `/wezens/pegasus` genavigeerd; deze route opent dezelfde generieke reader als `/creatures/pegasus`.
- Anatomie gecontroleerd met vier stappen en wisselende labels; kaart met drie stappen en de markering bij Helikon.
- Het verhaal gecontroleerd met PageDown: de tekst scrollt, de pagina en illustratie blijven staan (`window.scrollY = 0`).
- Inhoudsopgave gecontroleerd met native modal, Escape en expliciet focusherstel naar de boekenknop.
- Cover en verhaalillustratie laden uit lokale WebP-assets; geen horizontale overflow gevonden op de geteste formaten.

De zelfstandige ontwikkelpreview (`creature-preview.html`) is bedoeld voor parallel werk aan het project en wordt niet als tweede ingang in de standaardproductiebuild opgenomen.
