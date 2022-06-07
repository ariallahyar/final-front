// import React, { useState, useEffect } from "react";
import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Map from "./components/Map";
import NotFound from "./components/NotFound";

import mockData from "./mock-data.json";
const markers = mockData.results; // for development

const App = () => {
  // const [markers, setMarkers] = useState([]);

  // useEffect(() => {
  //   fetch("https://arieats.herokuapp.com/places")
  //     .then((res) => res.json())
  //     .then((data) => setMarkers(data.results))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Map markers={markers} />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default App;
