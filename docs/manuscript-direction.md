# Bestiarium: visuele richting

De acht voorbeelden in `guideline page/` vormen de richting voor de herbruikbare CreatureBook-pagina. De afbeeldingen zelf blijven ongewijzigd. De weergave gebruikt gouden perkament, sepia inkt, dubbele lijnkaders, kleine vectorornamenten, kompasrozen, cursieve veldnotities en initialen. Anatomie en herkomst houden de illustratie vast en tonen korte notities per scrollstap. Het verhaal behoudt een kleurrijke schildering met een zelfstandig scrollend leesvenster. Folklore combineert tekst met een kleine prent.

De vormgeving staat in `src/creature-book/manuscript.css`, na de basisstylesheet en binnen dezelfde component-scope. SVG-ornamenten staan in `Ornament.tsx`. De kaart blijft een bewerkbare SVG. Pegasus gebruikt `src/creatures/pegasus/anatomy-engraving.webp` (431 kB); de PNG-bron is daarnaast bewaard. De eerdere aquarel is behouden.

## Nieuwe illustratie: prompt

Tool: ingebouwde imagegen, nieuwe illustratie, geen transparante achtergrond. Prompt:

> Use case: illustration-story. Create a new mythology bestiary asset in the visual direction of the inspected reference: an antique Renaissance naturalist pen-and-ink etching on warm golden parchment, not a modern watercolor. Full-body Pegasus facing right, proud elegant white horse with two large outstretched feathered wings, detailed flowing mane and tail, one foreleg lifted, anatomically graceful powerful horse. Rich intricate sepia brown ink hatching, expressive very fine lines, engraved feather textures, crisp readable silhouette. Beneath the horse a small rocky Greek hill with sparse plants and a faint tiny classical temple in the far background. A faint separate wing-feather sketch in the left margin and a small horse-head pencil study in upper right margin, understated. Landscape 1536x1024 composition, entire creature and both wing tips visible, generous margin, creature occupies most of center. Background flat pale golden parchment #edd5a5 with very subtle paper grain, no strong stains. Restrained monochrome umber, sepia, cream. This is artwork to be embedded in a live reusable manuscript web page. NO text, NO letters, NO labels, NO arrows, NO border, NO watermark, NO UI. Illustration only.

## Controle

Desktop 1440 × 1000 en mobiel 390 × 844: hoofdstuknavigatie, scrollstappen en illustratielabels gecontroleerd. Het verhaalvenster scrollt zelfstandig, zonder de pagina mee te verplaatsen. TypeScript, ESLint, 18 tests, inhoudsvalidatie en productiebuild geslaagd. Screenshots staan in `output/creature-book/pegasus-manuscript-*.jpg`.
