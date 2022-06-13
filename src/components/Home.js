import React, { useState, useEffect } from "react";
import Map from "./Map";
import Places from "./Places";
import styled from "styled-components";

import data from "../mock-data.json";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 88vh;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const options = ["Copenhagen", "Seattle"];

const Home = () => {
  const [activeMarker, setActiveMarker] = useState(null);
  const [city, setCity] = useState("Copenhagen");
  const [markers, setMarkers] = useState([]);
  // const [markers, setMarkers] = useState(data.results.filter((result) => result.city === city));

  useEffect(() => {
    fetch(`https://arieats.herokuapp.com/places?city=${city}`)
      .then((res) => res.json())
      .then((data) => {
        setMarkers(data.results);
      })
      .catch((err) => console.log(err));
  }, [city]);

  // useEffect(() => {
  //   setMarkers(() => data.results.filter((result) => result.city === city));
  // }, [city]);

  return (
    <>
      <select value={city} onChange={(event) => setCity(event.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Container>
        <Map
          markers={markers}
          city={city}
          activeMarker={activeMarker}
          setActiveMarker={setActiveMarker}
        />
        <Places places={markers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} />
      </Container>
    </>
  );
};

export default Home;
