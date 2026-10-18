import DetailPage from '../components/DetailPage.jsx'
import image from '../assets/img/kalas.png'

export default function Kalasorkestern() {
  return (
    <DetailPage title="Kalasorkestern" label="Musik till festen"
      intro="Musik som sätter fart på stämningen. Kalasorkestern spelar på fester och tillställningar."
      image={image} imageAlt="Kalasorkestern">
      <section className="detail-panel">
        <h2>En fest börjar med musiken</h2>
        <p>Planerar du en fest eller en tillställning? Kontakta Bernt, Ove eller Gunnar för att prata om musiken och ditt evenemang.</p>
      </section>
      <section className="detail-panel detail-contact">
        <h2>Prata med Kalasorkestern</h2>
        <p>Ring oss för information och bokning.</p>
        <div className="detail-actions">
          <a className="btn" href="tel:+46700905203">Bernt · 070-090 52 03</a>
          <a className="btn detail-secondary" href="tel:+46705295937">Ove · 070-529 59 37</a>
          <a className="btn detail-secondary" href="tel:+46707682146">Gunnar · 070-768 21 46</a>
        </div>
      </section>
    </DetailPage>
  )
}
