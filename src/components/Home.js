import React, { useState } from "react";
import Map from "./Map";
import Places from "./Places";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 76vh;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 90vh;
  }

  section {
    position: relative;
  }
`;

const SelectCityOverlay = styled.select(
  ({ theme }) => `
  bottom: 30px;
  left: 10px;
  position: absolute;
  z-index: 2;
  min-width: 160px;
  padding: 5px 10px;
  color: ${theme.colors.primary};
  background-color: white;
  border:  2px solid ${theme.colors.primary};
  box-shadow: 0 2px 6px 0px ${theme.colors.primary};
  border-radius: 2px;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E") !important;
  background-repeat: no-repeat, repeat !important;
  background-position: right 0.7em top 50%, 0 0 !important;
  background-size: 0.65em auto, 100% !important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 18px;
  font-weight: 700;
`
);

const Home = ({ city, setCity, markers, isMobile }) => {
  const [activeMarker, setActiveMarker] = useState(null);

  const options = ["Copenhagen", "Seattle", "Stockholm"];

  return (
    <>
      <Container>
        <section>
          <SelectCityOverlay value={city} onChange={(event) => setCity(event.target.value)}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </SelectCityOverlay>
          <Map
            markers={markers}
            city={city}
            activeMarker={activeMarker}
            setActiveMarker={setActiveMarker}
            isMobile={isMobile}
          />
        </section>
        {!isMobile && (
          <Places places={markers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} />
        )}
      </Container>
    </>
  );
};

export default Home;
