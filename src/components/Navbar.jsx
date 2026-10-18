import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-logo">Supersidan.se</div>
      <ul className="nav-links">
        <li><NavLink to="/">Hem</NavLink></li>
        <li><NavLink to="/den-magiske-super-g.html">Den Magiske Super-G</NavLink></li>
        <li><NavLink to="/kalasorkestern.html">Kalasorkestern</NavLink></li>
        <li><NavLink to="/pianoflytt.html">Pianoflytt</NavLink></li>
        <li><NavLink to="/k-rmusik.html">Körmusik</NavLink></li>
      </ul>
    </nav>
  );
}
