import { Link } from 'react-router-dom'

export default function NotFound() {
  return <section className="page-section"><h1>Sidan hittades inte</h1><p>Adressen finns inte. <Link to="/">Gå till startsidan</Link>.</p></section>
}
