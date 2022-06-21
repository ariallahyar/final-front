import React from "react";
import PlaceCard from "./PlaceCard";
import styled from "styled-components";

const Section = styled.section(({ theme }) => `
  overflow-x: scroll;
  color: ${theme.colors.primary};
  background-color: ${theme.colors.backgroundLight};
  border-bottom: solid 20px ${theme.colors.backgroundLight};
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
