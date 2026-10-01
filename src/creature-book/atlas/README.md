Geometrie: Natural Earth (opgehaald 1 oktober 2026), 1:110m landen en meren, public domain.

Bron: https://github.com/nvkelso/natural-earth-vector/tree/master/geojson

`ne_110m_admin_0_countries.geojson` en `ne_110m_lakes.geojson` zijn omgezet naar lokale SVG-padstrings (buitenringen, twee decimalen, omgekeerde latitude voor de SVG-y-as). De runtime gebruikt geen netwerkdienst. De fijnere eilanden ontbreken op deze schaal; grenzen zijn uitsluitend rustige oriëntatielijnen, geen historische of politieke claims. Regio-ellipsen zijn contextgebieden, geen woonplaatsen of oorsprongspunten.

Regionale close-ups gebruiken 1:50m `ne_50m_admin_0_countries.geojson`, buitenringen lokaal rechthoekig geclipt voor Griekenland, Italië, Japan en Egypte, drie decimalen. De schaal verandert automatisch wanneer de atlas-bounds geheel binnen een detailgebied vallen.
