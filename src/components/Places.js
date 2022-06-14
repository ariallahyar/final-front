import React from "react";
import PlaceCard from "./PlaceCard";
import styled from "styled-components";

const Section = styled.section`
  overflow-x: scroll;
  color: white;
  background-color: rgb(0, 50, 50);
  border-bottom: solid 20px rgb(0, 50, 50);
  padding: 20px;
`;

const Places = ({ places, activeMarker, setActiveMarker }) => {
  return (
    <Section>
      {places.map((place) => {
        return (
          <PlaceCard
            key={place.place_id}
            place={place}
            activeMarker={activeMarker}
            setActiveMarker={setActiveMarker}
          />
        );
      })}
    </Section>
  );
};
export default Places;
