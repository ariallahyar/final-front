import React, { useState, useEffect } from "react";
import Map from "./components/Map";

const App = () => {
  const [markers, setMarkers] = useState([]);
  
  useEffect(() => {
    fetch("https://arieats.herokuapp.com/places")
      .then((res) => res.json())
      .then((data) => setMarkers(data.results))
      .catch((err) => console.log(err));
  }, []);

  return <Map markers={markers} />;
};

export default App;
