import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <h1>Välkommen till Supersidan</h1>

      <div className="home-grid">
        <article className="card">
          <h2>Körmusik av Gunnar Persson</h2>
          <p>
            Här kan du presentera körhäftena, kort om att Gunnar har skrivit och gett ut körmusik
            för blandad kör osv.
          </p>
          <Link to="/kormusik" className="btn">Läs mer</Link>
        </article>

        <article className="card">
          <h2>Den Magiske Super-G</h2>
          <p>
            Kort teaser-text om trollerishowen: passar både vuxna och barn, mycket skratt osv.
          </p>
          <Link to="/den-magiske-super-g" className="btn">Läs mer</Link>
        </article>

        <article className="card">
          <h2>Super-G Pianoflytt</h2>
          <p>
            Här kan du skriva samma text som på nuvarande sida om att flyttfirman har upphört.
          </p>
          <Link to="/pianoflytt" className="btn">Läs mer</Link>
        </article>

        <article className="card">
          <h2>Kalasorkestern</h2>
          <p>
            Kort text om att Kalasorkestern spelar på fester och sätter fart på stämningen.
          </p>
          <Link to="/kalasorkestern" className="btn">Läs mer</Link>
        </article>
      </div>
    </section>
  );
}
