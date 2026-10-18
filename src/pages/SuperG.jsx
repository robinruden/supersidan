import DetailPage from '../components/DetailPage.jsx'
import image from '../assets/img/superg.png'

export default function SuperG() {
  return (
    <DetailPage title="Den Magiske Super-G" label="Trolleri för stora och små"
      intro="Magi, humor och överraskningar med Gunnar Persson. En föreställning för barn eller vuxna, anpassad efter publiken."
      image={image} imageAlt="Den Magiske Super-G">
      <div className="detail-columns">
      <section className="detail-panel">
      <h2>Vuxenföreställningar</h2>
      <p>
        Den Magiske Super-G bjuder på trolleri med humor och överraskningar för vuxna.
        Kontakta Gunnar Persson för att diskutera en föreställning till ditt evenemang.
      </p>
      <ul>
        <li>Föreställningen kan anpassas efter önskemål</li>
        <li>Programmet tar ca 30 minuter</li>
        <li>Ljudanläggning tas med vid behov</li>
        <li>Ingen publik bakom scenen, inga speglar bakom scenen</li>
      </ul>

      </section>
      <section className="detail-panel">
      <h2>Barnföreställningar</h2>
      <p>
        En trolleriföreställning för barn med humor och överraskningar.
        Programmet anpassas efter barnens ålder.
      </p>
      <ul>
        <li>Anpassas efter barnens ålder</li>
        <li>Programmet tar ca 30 minuter</li>
        <li>Ljudanläggning tas med vid behov</li>
        <li>Ingen publik bakom scenen, inga speglar bakom scenen</li>
      </ul>

      </section>
      </div>
      <section className="detail-panel detail-contact">
      <h2>Låt magin bli en del av festen</h2>
      <p>Kontakta Gunnar för frågor om program och bokning.</p>
      <div className="detail-actions"><a href="mailto:gunnar.tonart@telia.com" className="btn">
        Boka Super-G
      </a>
      <a href="tel:+46707682146" className="btn detail-secondary">Ring Gunnar</a></div>
      </section>
    </DetailPage>
  );
}
