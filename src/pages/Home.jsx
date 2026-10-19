import { Link } from "react-router-dom";
import noterImage from "../assets/img/noter-1.png";
import supergImage from "../assets/img/superg.png";
import pianoImage from "../assets/img/piano.png";
import kalasImage from "../assets/img/kalas.png";

export default function Home() {
  return (
    <section className="home">

        <h1>Gunnar Persson - noter, musik, trolleri och Kalasorkestern</h1>
        <p className="intro">
          Välkommen till Supersidan. Här hittar du information om Gunnar Perssons 
          körmusik, noter, trolleri, Kalasorkestern och kontakt för bokning.
        </p>
      
      <div className="home-grid">
        <article className="card">
          <h2>Körmusik av Gunnar Persson</h2>
          
          <img src={noterImage} alt="Körmusik av Gunnar Persson" className="card-image" />
          <p>
            Gunnar Persson har skrivit och givit ut körmusik för blandad kör.
          </p>
          <Link to="/k-rmusik.html" className="btn" aria-label="Läs mer om körmusik av Gunnar Persson">Läs mer om körmusik av Gunnar Persson</Link>
        </article>

        <article className="card">
          <h2>Den Magiske Super-G</h2>
          <img src={supergImage} alt="Den Magiske Super-G" className="card-image" />
          <p>
            En fartfylld trollerishow med humor och överraskningar för både barn och vuxna.
          </p>
          <Link to="/den-magiske-super-g.html" className="btn" aria-label="Läs mer om Den Magiske Super-G">Läs mer om den Magiske Super-G</Link>
        </article>

        <article className="card">
          <h2>Super-G Pianoflytt</h2>
          <img src={pianoImage} alt="Super-G Pianoflytt" className="card-image" />
          <p>
            Super-G Pianoflytt har upphört. Här hittar du information och kontaktuppgifter.
          </p>
          <Link to="/pianoflytt.html" className="btn" aria-label="Läs mer om Super-G Pianoflytt">Läs mer om Super-G:s pianoflytt</Link>
        </article>

        <article className="card">
          <h2>Kalasorkestern i Stockholm</h2>
          <img src={kalasImage} alt="Kalasorkestern" className="card-image" />
          <p>
            Kalasorkestern spelar på fester, tillställningar och sätter fart på stämningen.
          </p>
          <Link to="/kalasorkestern.html" className="btn" aria-label="Läs mer om Kalasorkestern">Läs mer om Kalasorkestern</Link>
        </article>
      </div>
    </section>
  );
}
