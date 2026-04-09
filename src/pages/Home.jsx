import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import noterImage from "../assets/img/noter-1.png";
import supergImage from "../assets/img/superg.png";
import pianoImage from "../assets/img/piano.png";
import kalasImage from "../assets/img/kalas.png";

export default function Home() {
  return (
    <section className="home">
      <Helmet>
        <title>Gunnar Persson - noter, musik, trolleri och Kalasorkestern</title>
        <meta 
          name="description" 
          content="Välkommen till Gunnar Perssons Supersida med körmusik, noter, trolleri, Kalasorkestern och kontaktinformation för bokning." 
        />
      </Helmet>

        <h1>Gunnar Persson - noter, musik, trolleri och Kalasorkestern</h1>
        <p className="intro">
          Välkommen till Supersidan. Här hittar du information om Gunnars Perssons 
          körmusik, noter, trolleri, Kalasorkestern och kontakt för bokning.
        </p>
      
      <div className="home-grid">
        <article className="card">
          <h2>Körmusik av Gunnar Persson</h2>
          
          <img src={noterImage} alt="Körmusik av Gunnar Persson" className="card-image" />
          <p>
            Gunnar Persson har skrivit och givit ut körmusik för blandad kör.
          </p>
          <Link to="/kormusik" className="btn">Läs mer</Link>
        </article>

        <article className="card">
          <h2>Den Magiske Super-G</h2>
          <img src={supergImage} alt="Den Magiske Super-G" className="card-image" />
          <p>
            En fartfylld trollerishow med humor och överraskningar för både barn och vuxna.
          </p>
          <Link to="/den-magiske-super-g" className="btn">Läs mer</Link>
        </article>

        <article className="card">
          <h2>Super-G Pianoflytt</h2>
          <img src={pianoImage} alt="Super-G Pianoflytt" className="card-image" />
          <p>
            Läs mer om Super-G Pianoflytt och information om verksamheten.Här kan du skriva samma text som på nuvarande sida om att flyttfirman har upphört.
          </p>
          <Link to="/pianoflytt" className="btn">Läs mer</Link>
        </article>

        <article className="card">
          <h2>Kalasorkestern</h2>
          <img src={kalasImage} alt="Kalasorkestern" className="card-image" />
          <p>
            Kalasorkestern spelar på fester, tillställningar och sätter fart på stämningen.
          </p>
          <Link to="/kalasorkestern" className="btn">Läs mer</Link>
        </article>
      </div>
    </section>
  );
}
