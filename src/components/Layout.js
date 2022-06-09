import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <h1>Header</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/community">Community Curated</Link>
        <Link to="/society">Supper Society</Link>
      </nav>
    </header>
  );
};

const Footer = () => {
  return <footer>Footer</footer>;
};

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
