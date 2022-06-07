import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h1>Header</h1>
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/community">Community Curated</Link>{" "}
          <Link to="/society">Supper Society</Link>{" "}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
