import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav" aria-label="Huvudnavigation">
      <NavLink to="/" className="nav-logo" aria-label="Supersidan.se – startsida">Supersidan.se</NavLink>
      <ul className="nav-links">
        <li><NavLink to="/" end>Hem</NavLink></li>
        <li><NavLink to="/den-magiske-super-g.html">Den Magiske Super-G</NavLink></li>
        <li><NavLink to="/kalasorkestern.html">Kalasorkestern</NavLink></li>
        <li><NavLink to="/pianoflytt.html">Pianoflytt</NavLink></li>
        <li><NavLink to="/k-rmusik.html">Körmusik</NavLink></li>
      </ul>
    </nav>
  );
}
