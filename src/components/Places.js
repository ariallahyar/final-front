import React from "react";
import PlaceCard from "./PlaceCard";

const Places = ({ places, activeMarker, setActiveMarker }) => {
  return places.map((place) => {
    return (
      <PlaceCard
        key={place.place_id}
        place={place}
        activeMarker={activeMarker}
        setActiveMarker={setActiveMarker}
      />
    );
  });
};

export default Places;
