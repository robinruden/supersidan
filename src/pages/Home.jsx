import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <h2>Välkommen till</h2>
      <h1>Supersidan</h1>

      <div className="home-grid">
        <article className="card">
          <h3>Körmusik av Gunnar Persson</h3>
          <p>
           Gunnar Person har skrivit och givit ut körmusik för blandad kör.
          </p>
          <Link to="/kormusik" className="btn">Läs mer</Link>
        </article>

        <article className="card">
          <h3>Den Magiske Super-G</h3>
          <p>
            Kort teaser-text om trollerishowen: passar både vuxna och barn, mycket skratt osv.
          </p>
          <Link to="/den-magiske-super-g" className="btn">Läs mer</Link>
        </article>

        <article className="card">
          <h3>Super-G Pianoflytt</h3>
          <p>
            Här kan du skriva samma text som på nuvarande sida om att flyttfirman har upphört.
          </p>
          <Link to="/pianoflytt" className="btn">Läs mer</Link>
        </article>

        <article className="card">
          <h3>Kalasorkestern</h3>
          <p>
            Kort text om att Kalasorkestern spelar på fester och sätter fart på stämningen.
          </p>
          <Link to="/kalasorkestern" className="btn">Läs mer</Link>
        </article>
      </div>
    </section>
  );
}
