import DetailPage from '../components/DetailPage.jsx'
import image from '../assets/img/piano.png'

export default function Pianoflytt() {
  return (
    <DetailPage title="Super-G Pianoflytt" label="Information om verksamheten"
      intro="Flyttfirman som älskar ditt piano. Här finns information om Super-G:s Pianoflytt."
      image={image} imageAlt="Piano – Super-G Pianoflytt">
      <section className="detail-panel">
        <p className="detail-badge">Verksamheten har upphört</p>
        <h2>Vi tar inte längre emot flyttuppdrag</h2>
        <p>Super-G:s Pianoflytt har upphört. Den här sidan finns kvar för dig som söker information om verksamheten.
          Vi rekommenderar pianostämmare Micke Bellini.</p>
          <a className="btn detail-secondary" href="tel:+4670227670">Kontakta Micke Bellini</a>      
      </section>
      <section className="detail-panel detail-contact">
        <h2>Har du en fråga?</h2>
        <p>Du kan fortfarande kontakta Gunnar Persson för frågor om den tidigare verksamheten.</p>
        <div className="detail-actions">
          <a className="btn" href="mailto:gunnar.tonart@telia.com">Kontakta Gunnar</a>
        </div>
      </section>
    </DetailPage>
  )
}
