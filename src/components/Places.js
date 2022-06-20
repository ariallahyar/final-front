import React from "react";
import PlaceCard from "./PlaceCard";
import styled from "styled-components";

const Section = styled.section(({ theme }) => `
  overflow-x: scroll;
  color: white;
  background-color: ${theme.colors.primary};
  border-bottom: solid 20px ${theme.colors.primary};
  padding: 20px;
`
);

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
