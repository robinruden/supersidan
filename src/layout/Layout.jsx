import NavBar from "../components/Navbar.jsx";

export default function Layout({ children }) {
  return (
    <div className="page">
      <header>
        <NavBar />
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <h2>Kontakt och bokning</h2>
        <p><strong>Gunnar Persson</strong></p>
        <p>Telefon: 070-768 21 46</p>
        <p>E-post: <a href="mailto:gunnar.tonart@telia.com">gunnar.tonart@telia.com</a></p>

        <h3>Kalasorkestern</h3>
        <p>Bernt – 070-090 52 03</p>
        <p>Ove – 070-529 59 37</p>
        <p>Gunnar – 070-768 21 46</p>
      </footer>
    </div>
  );
}
