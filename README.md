# Supersidan

Gunnar Perssons webbplats med React 19, React Router och Vite.

## Utveckling och kontroll

```sh
npm install
npm run dev
```

```sh
npm run lint
npm run build
npm run check:seo
npm run preview
```

Bygget skapar färdig HTML för alla fem sidor samt en felsida i `dist/`.
Text, interna länkar, titel, beskrivning och canonical finns direkt i HTML.
React tar över med hydrering. Ingen Node-server behövs på webbhotellet och inga
nya paket krävs. Kör hela `npm run build`, inte enbart `vite build`.

Metadata och listan över förrenderade sidor finns i `src/seo.js`.
Lägg till nya sidor både där och i routingen i `src/App.jsx`.

## Publicering

1. Bekräfta domänen. Standardvärdet är https://supersidan.se. Kopiera
   `.env.example` till `.env.local` och ändra `VITE_SITE_URL` vid behov, bygg om.
2. Publicera innehållet i `dist/`.
3. Servera befintliga filer före eventuella omskrivningar. Undersidornas gamla
   adresser bevaras: `/den-magiske-super-g.html`, `/kalasorkestern.html`,
   `/pianoflytt.html` och `/k-rmusik.html`. Bygget skapar motsvarande HTML-filer.
   Startsidan serveras som `index.html` på `/`.
4. Okända adresser ska ge HTTP 404 med `404.html` som felsida. Undvik generell
   omskrivning till startsidan med status 200. Felsidans noindex kompletterar
   korrekt HTTP-status men ersätter den inte.
5. Omdirigera HTTP och alternativ domän permanent till vald HTTPS-domän.
   Bevara eventuella gamla adresser med relevanta 301-omdirigeringar.
6. Kontrollera direktlänkar och sidkälla på den publicerade sajten. Lägg till
   sajten i Google Search Console, skicka in `/sitemap.xml` och använd URL-inspektion.

Utvecklingsservern visar klientrenderad React. Preview visar bygget men verifierar
inte webbhotellets omdirigeringar och statuskoder. Hosting behöver bekräftas före
slutlig serverkonfiguration.

## Innehåll att utveckla och faktagranska

- Körmusik: häftenas titlar, verk, körbesättning, notexempel, ljudprov och beställning.
- Trolleri: spelområde, evenemang, program och egna bilder.
- Kalasorkestern: repertoar, medlemmar, spelområde och bokning.
- Pianoflytt: bekräfta att uppgiften om nedlagd verksamhet fortfarande gäller.

De tidigare instruktionstexterna har ersatts med korta texter utifrån uppgifter
som redan fanns i projektet. Utöka med verifierade fakta, inte påhittade orter eller
recensioner. Teknisk SEO garanterar varken indexering eller viss placering.

## Git

.gitignore exkluderar nya beroenden, byggfiler och lokala miljöfiler.
Redan incheckade filer i node_modules blir inte automatiskt ospårade; Git-indexet
kan städas separat senare.
