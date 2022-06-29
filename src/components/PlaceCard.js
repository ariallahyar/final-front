import React, { useEffect, useRef, useState } from "react";
import { getPhoto } from "../api/place";
import { addressIcon, websiteIcon } from "../assets/icons";
import styled from "styled-components";

const Place = styled.article(
  ({ theme }) => `
  margin-bottom: 15px;
  padding-bottom: 20px;
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

  figure {
    margin: 0;
    position: relative;    
    img {
      width: 100%;
    }
    
    span {
      background: rgba(0, 0, 0, 0.5);
      display: inline-block;
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0px 4px;
      font-size: ${theme.fontSizes.tiny};
      
      a {
        color: white;
        font-size: inherit;
      }
      a:hover {
        text-decoration: none;
      }
    }
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
  const source = place.photos[0].html_attributions[0];
  const photoRef = place.photos[0].photo_reference;

  useEffect(() => getPhoto(photoRef, (image) => setImage(image)), [place, photoRef]);

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
      <figure>
        <img src={image} alt={place.name} />
        <figcaption>
          <span dangerouslySetInnerHTML={{ __html: source, disabled: true }} />
        </figcaption>
      </figure>
    </Place>
  );
};

export default PlaceCard;
