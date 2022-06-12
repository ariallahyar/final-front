import React, { useState } from "react";
import Map from "./Map";
import Places from "./Places";
import styled from "styled-components";
import mockData from "../mock-data.json";

const markers = mockData.results;

const PlacesSection = styled.section`
  overflow-x: scroll;
  color: white;
  background-color: rgb(0, 50, 50);
  padding: 20px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 85vh;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

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
    <Container>
      <section className="map-container">
        <Map markers={markers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} />
      </section>
      <PlacesSection>
        <Places places={markers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} />
      </PlacesSection>
    </Container>
  );
};

export default Home;
