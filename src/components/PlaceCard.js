import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { location, website } from "../assets/icons";

const Place = styled.article`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 20px 0 10px 0;
    padding-bottom: 2px;
  }

  span {
    font-size: 12px;
    color: rgb(255, 65, 65);
  }

  a {
    font-size: 14px;
    text-decoration: none;
    color: inherit;

    @media (min-width: 768px) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  img {
    width: 100%;
  }
`;

const PlaceCard = ({ place, activeMarker, setActiveMarker }) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
  const photoRef = place.photos[0].photo_reference;
  const imgUrl = `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photoRef}&maxwidth=400&key=${API_KEY}`;

  // development
  // const imgUrl =
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Raspberries_%28Rubus_idaeus%29.jpg/1200px-Raspberries_%28Rubus_idaeus%29.jpg";

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
    <Place ref={placeRef}>
      <h2 onClick={() => setActiveMarker(place.place_id)}>
        {place.name} {isActiveMarker && <span>&#x25E3;</span>}
      </h2>
      <a href={place.url} target={"_blank"} rel="noreferrer">
        {location}&nbsp;&nbsp;{place.vicinity}
      </a>
      <a href={place.website} target={"_blank"} rel="noreferrer">
        {website}&nbsp;{place.website}
      </a>
      <p>{place.description}</p>
      <img src={imgUrl} alt={"restaurant"} />
    </Place>
  );
};

export default PlaceCard;
