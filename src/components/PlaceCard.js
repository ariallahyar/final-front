import React, { useEffect, useRef, useState } from "react";
import { getPhoto } from "../api/place";
import { addressIcon, websiteIcon } from "../assets/icons";
import styled from "styled-components";

const Place = styled.article(
  ({ theme }) => `
  margin-bottom: 15px;
  border-bottom: 0.8px solid silver;

  h2 {
    margin-bottom: 5px;

    &:hover {
      cursor: pointer;
    }
  }

  span {
    font-size: ${theme.fontSizes.tiny};
    color: ${theme.colors.secondary};
  }

  p {
    margin: 10px 0;
  }
  
  a {
    font-size: ${theme.fontSizes.small};
  }
  
  img {
    padding-bottom: 20px;
  }
`
);

const Grid = styled.div(
  ({ theme }) => `
  display: grid;
  grid-template-columns: 28px 1fr;

  p, a {
    padding: 0;
    margin: 0;
  }
  
  p {
    font-size: ${theme.fontSizes.small};
    text-align: center;
  }
`
);

const PlaceCard = ({ place, activeMarker, setActiveMarker }) => {
  const [image, setImage] = useState(null);

  const photoRef = place.photos[0].photo_reference;

  useEffect(() => getPhoto(photoRef, (image) => setImage(image)), [photoRef]);

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
      <Grid>
        <p>{addressIcon}</p>
        <a href={place.url} target={"_blank"} rel="noreferrer">
          {place.vicinity}
        </a>
        <p>{websiteIcon}</p>
        <a href={place.website} target={"_blank"} rel="noreferrer">
          {place.website}
        </a>
      </Grid>
      <p>{place.description}</p>
      <img src={image} alt={"restaurant"} />
    </Place>
  );
};

export default PlaceCard;
