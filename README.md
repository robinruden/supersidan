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

## Automatisk publicering till one.com

`.github/workflows/deploy.yml` bygger och kontrollerar sidan vid push till `main`
och kan också startas via GitHub → Actions → Publish test site to one.com → Run workflow.
Efter godkända kontroller laddas innehållet i `dist/` upp via SFTP.
Pipelinen publicerar nu endast testversionen på `https://nyasidan.supersidan.se`
med `noindex` på alla sidor. Det hindrar indexering men är inget lösenordsskydd.
Skarp publicering konfigureras separat när testversionen är godkänd.

Aktivera SFTP i one.coms kontrollpanel under Hosting settings → SSH & SFTP.
SFTP-lösenordet är separat från kontrollpanelens inloggning.
Kontrollera rätt webbrot genom att ansluta med en SFTP-klient. På nya servrar
visas domänens mapp under Subdomains i kontrollpanelen. Gissa inte målmappen.
Ta en kopia av den befintliga webbplatsen före första publiceringen.

Öppna GitHub-repot → Settings → Secrets and variables → Actions och lägg till
följande repository secrets:

| Secret | Innehåll |
| --- | --- |
| `SFTP_HOST` | Servernamn från one.com, utan `sftp://` |
| `SFTP_PORT` | Port från one.com (22 om den utelämnas) |
| `SFTP_USER` | SFTP-användarnamn från one.com |
| `SFTP_PASSWORD` | SFTP-lösenord |
| `SFTP_TEST_PATH` | `/customers/c/8/c/cx4yqvxhn/webroots/7c27d013` (verifierad via SFTP för `nyasidan.supersidan.se`) |
| `SFTP_KNOWN_HOSTS` | Serverns verifierade SSH-nyckel i known_hosts-format |

För `SFTP_KNOWN_HOSTS`: använd värdens post från din lokala
`~/.ssh/known_hosts` efter att ha anslutit och verifierat serverns nyckel.
Alternativt hämta posten med `ssh-keyscan -p 22 SERVERNAMN`, jämför nyckelns
fingeravtryck med uppgifter från one.com och spara den verifierade posten.
Ändra porten i kommandot om one.com anger en annan port.

Testadressen är angiven i workflow-filen. Pipelinen avbryter om testmappens
sökväg inte matchar den verifierade webbroten ovan. Den tidigare mappen
`/webroots/www/nyasidan` används inte. För lokal testbyggnad kan du köra
`VITE_SITE_URL=https://nyasidan.supersidan.se VITE_NOINDEX=true npm run build`.

Uppladdningen ersätter filer med samma namn men tar inte bort gamla filer.
Tillgångar laddas upp före HTML, men publiceringen är inte atomisk: en avbruten
överföring kan behöva köras om. Serverns 404-sida och HTTPS-omdirigeringar behöver
konfigureras separat enligt publiceringsavsnittet ovan.

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
