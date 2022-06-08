import React, { useState, useEffect } from "react";
import Map from "./Map";
import Places from "./Places";

const Home = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    fetch("https://arieats.herokuapp.com/places")
      .then((res) => res.json())
      .then((data) => setMarkers(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Map markers={markers} />
      <Places places={markers} />
    </>
  );
};

export default Home;
