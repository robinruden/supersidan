import DetailPage from '../components/DetailPage.jsx'
import image from '../assets/img/kalas.png'

export default function Kalasorkestern() {
  return (
    <DetailPage title="Lilla Kalasorkestern" label="Musik till festen"
      intro="Musik som sätter fart på festen. Lilla Kalasorkestern spelar på alla typer av fester och tillställningar."
      image={image} imageAlt="Kalasorkestern">
      <section className="detail-panel">
        <h2>En fest börjar med musiken</h2>
        <p>Planerar du en fest eller en tillställning? Kontakta Bernt eller Gunnar för att prata om musiken och ditt evenemang.</p>
      </section>
      <section className="detail-panel detail-contact">
        <h2>Prata med Lilla Kalasorkestern</h2>
        <p>Ring oss för information och bokning.</p>
        <div className="detail-actions">
          <a className="btn detail-secondary" href="tel:+46700905203">Bernt - 070-090 52 03</a>
          <a className="btn detail-secondary" href="tel:+46707682146">Gunnar - 070-768 21 46</a>
        </div>
      </section>
    </DetailPage>
  )
}
