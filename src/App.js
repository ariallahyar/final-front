import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import RecommendationsPage from "./components/RecommendationPage";
import SupperSocietyPage from "./components/SupperSocietyPage";
import ProfilePage from "./components/ProfilePage";
import NotFound from "./components/NotFound";
import { ThemeProvider } from "styled-components";
import { base as defaultTheme } from "./themes";
import { GlobalStyle } from "./globalStyles";

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout isMobile={isMobile} />}>
          <Route index element={<Home isMobile={isMobile} />} />
          <Route path="community" element={<RecommendationsPage />} />
          <Route path="society" element={<SupperSocietyPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} /> */
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
