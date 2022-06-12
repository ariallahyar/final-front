import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Restaurant = styled.h2`
  margin: 20px 0 10px 0;
  padding-bottom: 2px;
`;

const Details = styled.p`
  margin: 15px 0;
`;

const Website = styled.a`
  color: inherit;
  font-size: 14px;
  text-decoration: none;
  font-style: italic;

  @media (min-width: 768px) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Address = styled(Details)`
  font-weight: lighter;
  letter-spacing: -0.5px;
  font-size: 14px;
  margin: 5px 0;
`;

const SelectedMarker = styled.span`
  font-size: 12px;
  color: rgb(255, 65, 65);
`;

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
      <Restaurant isActiveMarker onClick={() => setActiveMarker(place.place_id)}>
        {place.name} {isActiveMarker && <SelectedMarker>&#x25E3;</SelectedMarker>}
      </Restaurant>
      <Address>{place.formatted_address}</Address>
      <Website href={place.website} target={"_blank"} rel="noreferrer">
        {place.website}
      </Website>
      <Details>{place.description}</Details>
      <img src={imgUrl} alt={"restaurant"} width={"100%"} />
    </div>
  );
};

export default PlaceCard;
