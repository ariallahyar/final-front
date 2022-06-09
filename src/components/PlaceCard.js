import React, { useEffect, useRef } from "react";

const PlaceCard = ({ place, activeMarker, setActiveMarker }) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
  const photoRef = place.photos[0].photo_reference;
  const imgUrl = `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photoRef}&maxwidth=400&key=${API_KEY}`;

  const isActiveMarker = place.place_id === activeMarker;
  const placeRef = useRef(null);

  useEffect(() => {
    if (isActiveMarker && placeRef.current) {
      placeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [isActiveMarker]);

  return (
    <div ref={placeRef}>
      <h2
        onClick={() => setActiveMarker(place.place_id)}
        style={{ color: isActiveMarker ? "red" : "inherit" }}
      >
        {place.name}
      </h2>
      <h3>{place.formatted_address}</h3>
      <p>{place.description}</p>
      <img src={imgUrl} alt={"restaurant"} width={375} />
    </div>
  );
};

export default PlaceCard;
