import DetailPage from '../components/DetailPage.jsx'
import image from '../assets/img/noter-1.png'
import image2 from '../assets/img/till-bords.png'
import image3 from '../assets/img/ljuset-i-advent.png'
import image4 from '../assets/img/jultaget.png'
import image5 from '../assets/img/jorden.png'
import image6 from '../assets/img/fars-fabrik.png'

const works = [
  {
    id: 'morgon-kvall', legacyId: '32BEC13B-4682-411E-AA68-080C89E7879C',
    title: 'Morgon, kväll och eftermiddagslur', image,
    subtitle: 'Tre sånger för blandad kör a cappella', credit: 'Text och musik: Gunnar Persson',
    paragraphs: ['En sångcykel som följer dagens skiftningar i ord och ton. Arrangemangen är lättsjungna, med rytmiska utmaningar och täta klanger att arbeta med.'],
    songs: [
      ['Morgon', 'Från natt och gryning till en ljus försommardag.'],
      ['Eftermiddagslur', 'Sommarlediga basar drömmer om att få ligga kvar i hängmattan.'],
      ['Kväll', 'En nocturne där naturen tystnar och dagen blir till natt.'],
    ],
    listen: 'https://open.spotify.com/track/2hWO5cEscWAdLRw9jyRRbb', listenLabel: 'Lyssna med Akademiska kören',
    buy: [{ label: 'Köp hos Gehrmans', url: 'https://gehrmans.se/products/8567-morgon-kvall-och-eftermiddagslur' }],
  },
  {
    id: 'till-bords', legacyId: 'E1FCE1E8-7E40-4F85-AB9E-FBA3A3DFDAF4',
    title: 'Till bords!', image: image2,
    subtitle: 'Fest- och dryckesvisor', credit: 'Arrangemang för blandad kör: Gunnar Persson',
    paragraphs: ['Ett häfte för körer som vill sjunga vid festen. Här möts klassiska dryckesvisor, texter av Åke Söderqvist och egna kompositioner i lättsjungna arrangemang för blandad kör.'],
    songs: [
      ['Till bords', 'En fanfar med lätt fugerad karaktär som inleder festen.'],
      ['Helan', 'Traditionell visa med introduktion av Åke Söderqvist.'],
      ['Halvan', 'Bearbetning av Gunnar Wennerbergs manskörssats.'],
      ['Låt oss dricka', 'Rule Britannia med text av Åke Söderqvist.'],
      ['Raj raj', 'En nubbevisa av Bosse Persson.'],
      ['Med en enkel tulipan', 'En välbekant visa för uppvaktningar.'],
      ['Fånga mig vind', 'En dryckesvisa och kärlekshyllning som också säljs separat.'],
      ['Vatten', 'En skämtsam visa om olika sorters bordsvatten.'],
      ['Slutkör', 'En avslutande koral när festen går mot sitt slut.'],
    ],
    listen: 'https://www.youtube.com/watch?v=HsTxgghhKeQ', listenLabel: 'Lyssna på Fånga mig vind',
    buy: [
      { label: 'Köp hela häftet', url: 'https://gehrmans.se/products/850-till-bords' },
      { label: 'Köp Fånga mig vind separat', url: 'https://gehrmans.se/products/11226-fanga-mig-vind' },
    ],
  },
  {
    id: 'ljuset-i-advent', legacyId: 'EB110969-948A-4156-966E-3317614811ED',
    title: 'Ljuset i advent', image: image3,
    subtitle: 'Tre visor för Lucia, advent och jul', credit: 'Text och musik: Gunnar Persson',
    paragraphs: ['Trestämmiga arrangemang för SAB med harmonianalys, särskilt lämpade för skolkörer. Titelvisan är också känd som Låt det brinna och finns i tvåstämmig version i Barnpsalmboken och andra sångböcker.'],
    songs: [
      ['Ljuset i advent (Låt det brinna)', 'Om tro, hopp, kärlek och att hålla lågan levande.'],
      ['Lucia', 'En hyllning till Lucia och sångens förmåga att förena människor.'],
      ['För dig är en stjärna tänd', 'En trösterik sång med popkaraktär.'],
    ],
    buy: [{ label: 'Köp hos Gehrmans', url: 'https://gehrmans.se/products/10692-ljuset-i-advent' }],
  },
  {
    id: 'jultaget', legacyId: '6476917D-E507-48E6-8E73-C06F2AA4C8CB',
    title: 'Jultåget till farfarskullen', image: image4,
    subtitle: 'En humoristisk julresa för blandad kör', credit: 'Arrangemang: Gunnar Persson',
    paragraphs: ['En musikalisk tågresa där Chattanooga Choo Choo möter välbekanta teman från Kalle Ankas jul. Ett överraskningsnummer för julkonserten.', 'Arrangemanget för blandad kör är relativt lättsjunget, med några tätare klanger.'],
    listen: 'https://www.youtube.com/watch?v=5rQFzbOPSPE', listenLabel: 'Lyssna med Umeå Studentkör',
    buy: [{ label: 'Köp hos Wessmans', url: 'https://www.wessmans.com/Article/GE8604----jult%C3%A5get-till-farfarskullen-k%C3%B6r' }],
  },
  {
    id: 'jorden-vi-arvde', legacyId: '1482C922-631C-4974-B653-37D8F4B99B19',
    title: 'Jorden vi ärvde', image: image5,
    subtitle: 'Fem tonsatta dikter för blandad kör', credit: 'Dikt och bild: Roger Johansson · Musik: Gunnar Persson',
    paragraphs: ['Fem fristående körstycken utifrån Roger Johanssons dikter och naturakvareller. Musiken har en romantisk, fantasifull prägel med varierande temperament och en svårighetsgrad som passar många körer.'],
    songs: [
      ['Ännu', 'En ny morgon och världens skönhet.'],
      ['Tjärnen', 'En spegling av stjärnor och skog.'],
      ['Bäcken', 'Vattnets sorl under bron.'],
      ['Ödetorp', 'Tidens stilla spår i ett övergivet torp.'],
      ['Källan', 'Återvändandet till källan.'],
    ],
    buy: [{ label: 'Köp hos Wessmans', url: 'https://wessmans.com/Article/GE8598----jorden-vi-%C3%A4rvde-k%C3%B6r' }],
  },
  {
    id: 'fars-fabrik', legacyId: '4B7E46AC-B503-4DC9-863F-4BE6446B49E9',
    title: 'Fars fabrik', image: image6,
    subtitle: 'Blandad kör med rörelser', credit: 'Text och musik: Povel Ramel · Arrangemang: Gunnar Persson',
    paragraphs: ['En lekfull musikberättelse där körsångarna gestaltar fem maskiner med rytmiska ljud och rörelser. Tillsammans bygger de upp en svängig fabrik på scenen.', 'Återkommande partier hjälper sångarna att lära sig stämmorna utantill. Piano räcker som ackompanjemang, men en liten jazzgrupp med exempelvis bas, trummor och gitarr kan också medverka.'],
    buy: [{ label: 'Köp hos Gehrmans', url: 'https://gehrmans.se/products/8349-fars-fabrik' }],
  },
]

export default function Kormusik() {
  return (
    <DetailPage title="Körmusik av Gunnar Persson" label="Noter för blandad kör"
      intro="Sex körhäften med musik för dagens stunder, fest, advent och jul. Klicka på ett omslag för att läsa mer, lyssna och hitta noterna."
      image={image} imageAlt="Morgon, kväll och eftermiddagslur – notomslag">
      <nav id="korhaften" className="choir-catalog" aria-label="Välj körhäfte">
        {works.map(work => (
          <a key={work.id} className="choir-cover-link" href={`#${work.id}`}>
            <img src={work.image} alt={`Notomslag: ${work.title}`} loading="lazy" />
            <span>{work.title}</span>
          </a>
        ))}
      </nav>
      <div className="choir-works">
        {works.map(work => (
          <section key={work.id} id={work.id} className="detail-panel choir-work" aria-labelledby={`${work.id}-title`}>
            <span id={work.legacyId} className="choir-anchor" aria-hidden="true" />
            {work.id === 'till-bords' && <span id="Section3" className="choir-anchor" aria-hidden="true" />}
            <div className="choir-work-cover">
              <img src={work.image} alt={`Omslag till ${work.title}`} loading="lazy" />
            </div>
            <div className="choir-work-copy">
              <p className="detail-label">{work.subtitle}</p>
              <h2 id={`${work.id}-title`}>{work.title}</h2>
              <p className="choir-credit">{work.credit}</p>
              {work.paragraphs.map(text => <p key={text}>{text}</p>)}
              {work.songs && <><h3>Innehåll i häftet</h3><dl className="choir-songs">
                {work.songs.map(([title, description]) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}
              </dl></>}
              <div className="detail-actions">
                {work.listen && <a className="btn detail-secondary" href={work.listen}>{work.listenLabel}</a>}
                {work.buy.map(link => <a className="btn" key={link.url} href={link.url}>{link.label}</a>)}
              </div>
              <a className="choir-top-link" href="#korhaften">↑ Till alla körhäften</a>
            </div>
          </section>
        ))}
      </div>
      <section className="detail-panel detail-contact">
        <h2>Fråga om noter och körhäften</h2>
        <p>Gunnar berättar mer om musiken och svarar på dina frågor.</p>
        <div className="detail-actions">
          <a className="btn" href="mailto:gunnar.tonart@telia.com">Fråga om körmusik och noter</a>
          <a className="btn detail-secondary" href="tel:+46707682146">Ring Gunnar</a>
        </div>
      </section>
    </DetailPage>
  )
}
