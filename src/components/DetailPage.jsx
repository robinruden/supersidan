import { Link } from 'react-router-dom'

export default function DetailPage({ title, label, intro, image, imageAlt, children }) {
  return (
    <section className="page-section detail-page">
      <Link className="detail-back" to="/">← Till startsidan</Link>
      <div className="detail-hero">
        <div className="detail-copy">
          <p className="detail-label">{label}</p>
          <h1>{title}</h1>
          <p className="detail-intro">{intro}</p>
        </div>
        <div className="detail-image"><img src={image} alt={imageAlt} /></div>
      </div>
      <div className="detail-content">{children}</div>
    </section>
  )
}
