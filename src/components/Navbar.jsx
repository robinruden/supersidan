import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  function handleKeyDown(event) {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      toggleRef.current?.focus();
    }
  }

  return (
    <nav className="nav" aria-label="Huvudnavigation" onKeyDown={handleKeyDown}>
      <NavLink to="/" className="nav-logo" aria-label="Supersidan.se – startsida" onClick={() => setIsOpen(false)}>Supersidan.se</NavLink>
      <button
        ref={toggleRef}
        className="nav-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="nav-links"
        aria-label={isOpen ? "Stäng menyn" : "Öppna menyn"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d={isOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
        <span>{isOpen ? "Stäng" : "Meny"}</span>
      </button>
      <ul id="nav-links" className={`nav-links${isOpen ? " is-open" : ""}`} onClick={() => setIsOpen(false)}>
        <li><NavLink to="/" end>Hem</NavLink></li>
        <li><NavLink to="/k-rmusik.html">Körmusik</NavLink></li>
        <li><NavLink to="/den-magiske-super-g.html">Den Magiske Super-G</NavLink></li>
        <li><NavLink to="/kalasorkestern.html">Lilla Kalasorkestern</NavLink></li>
        <li><NavLink to="/pianoflytt.html">Pianoflytt</NavLink></li>
        
      </ul>
    </nav>
  );
}
