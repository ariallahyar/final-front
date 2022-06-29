import React, { useState } from "react";
import { InfoWindow } from "@react-google-maps/api";
import { websiteIcon, addressIcon } from "../assets/icons";
import styled from "styled-components";

const StyledDetails = styled.article(
  ({ theme }) => `
  width: 180px;
  max-height: 250px;
  overflow-y: scroll;
  padding: 0px 10px 0px 0px;
  margin: 0;
  border-bottom: 10px solid white;
  display: flex;
  flex-direction: column;

  div {
    display: grid;
    grid-template-columns: 28px 1fr;
    margin: 8px 0;
    
    p, a {
      padding: 0;
      margin: 0;
    }
    
    p { 
      font-size: ${theme.fontSizes.small};
      text-align: center;
    }
  }

  figure,
  img {
    margin: 0;
    width: 100%;
    position: relative;
  }
  
  span {
    padding: 1px 4px;
    background: rgba(0, 0, 0, 0.7);
    display: inline-block;
    font-size: 8px;
    position: absolute;
    bottom: 0;
    right: 0;
    
    a {
      color: white;
    }
  }
`
);

const MarkerInfoWindow = ({ setActiveMarker, map, position, place }) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [imgSource, setImgSource] = useState(null);

  const { place_id, url, website, name, description } = place;

  const service = new window.google.maps.places.PlacesService(map);
  service.getDetails(
    {
      placeId: place_id,
      fields: ["photos"],
    },
    (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setImgUrl(results.photos[0].getUrl({ maxWidth: 300, maxHeight: 300 }));
        setImgSource(results.photos[0].html_attributions[0]);
      }
    }
  );

  return (
    <InfoWindow onCloseClick={() => setActiveMarker(null)} position={position}>
      <StyledDetails>
        <h3>{name}</h3>
        <div>
          <p>{websiteIcon}</p>
          <a href={website} target={"_blank"} rel="noreferrer">
            Website
          </a>
          <p>{addressIcon}</p>
          <a href={url} target={"_blank"} rel="noreferrer">
            View on Google Maps
          </a>
        </div>
        <p>{description}</p>
        <figure>
          <img src={imgUrl} alt={name} />
          <figcaption>
            <span dangerouslySetInnerHTML={{ __html: imgSource }} />
          </figcaption>
        </figure>
      </StyledDetails>
    </InfoWindow>
  );
};

export default MarkerInfoWindow;
