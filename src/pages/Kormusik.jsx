import DetailPage from '../components/DetailPage.jsx'
import image from '../assets/img/noter-1.png'

export default function Kormusik() {
  return (
    <DetailPage title="Körmusik av Gunnar Persson" label="Noter för blandad kör"
      intro="Upptäck Gunnar Perssons körmusik. Gunnar har skrivit och givit ut musik för blandad kör."
      image={image} imageAlt="Körnoter av Gunnar Persson">
      <section className="detail-panel">
        <h2>Musik för din kör</h2>
        <p>Vill du veta mer om körmusiken? Kontakta Gunnar för information om de utgivna körhäftena och noterna.</p>
      </section>
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
