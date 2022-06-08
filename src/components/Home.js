import React, { useState } from "react";
import Map from "./Map";
import Places from "./Places";

import mockData from "../mock-data.json";
const markers = mockData.results;

const Home = () => {
  const [activeMarker, setActiveMarker] = useState(null);
  // const [markers, setMarkers] = useState([]);

  // useEffect(() => {
  //   fetch("https://arieats.herokuapp.com/places")
  //     .then((res) => res.json())
  //     .then((data) => setMarkers(data.results))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="container">
      <section className="map-container">
        <Map markers={markers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} />
      </section>
      <section className="places-container">
        <Places places={markers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} />
      </section>
    </div>
  );
};

export default Home;
