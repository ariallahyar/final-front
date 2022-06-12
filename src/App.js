import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import CommunityPage from "./components/CommunityPage";
import SupperSocietyPage from "./components/SupperSocietyPage";
import NotFound from "./components/NotFound";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;
    max-width: 1800px;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="society" element={<SupperSocietyPage />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} /> */
        </Route>
      </Routes>
    </>
  );
};

export default App;
