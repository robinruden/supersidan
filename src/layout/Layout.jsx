import NavBar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, [pathname]);
  return (
    <div className="page">
      <header>
        <NavBar key={pathname} />
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <h2>Kontakt och bokning</h2>
        <p><strong>Gunnar Persson</strong></p>
        <p>Telefon: 070-768 21 46</p>
        <p>E-post: <a href="mailto:gunnar.tonart@telia.com">gunnar.tonart@telia.com</a></p>

        <h3>Kalasorkestern</h3>
        <p>Bernt – 070-090 52 03</p>
        <p>Gunnar – 070-768 21 46</p>
      </footer>
    </div>
  );
}
