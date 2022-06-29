import React, { useState } from "react";
import { InfoWindow } from "@react-google-maps/api";
import { websiteIcon, addressIcon } from "../assets/icons";
import styled from "styled-components";

const StyledDetails = styled.div`
  width: 180px;
  max-height: 250px;
  overflow-y: scroll;
  padding: 0px 10px 0px 0px;
  margin: 0;
  border-bottom: 10px solid white;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0 0 5px 0;
  }

  p {
    margin: 10px 0;
  }
`;

const MarkerInfoWindow = ({ setActiveMarker, map, position, place }) => {
  const [image, setImage] = useState(null);
  const [source, setSource] = useState(null);

  const { place_id, url, website, name, description } = place;

  const service = new window.google.maps.places.PlacesService(map);
  service.getDetails(
    {
      placeId: place_id,
      fields: ["photos"],
    },
    (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setImage(results.photos[0].getUrl({ maxWidth: 300, maxHeight: 300 }));
        setSource(results.photos[0].html_attributions[0]);
      }
    }
  );
  
  return (
    <InfoWindow onCloseClick={() => setActiveMarker(null)} position={position}>
      <StyledDetails>
        <h3>{name}</h3>
        <a href={website} target={"_blank"} rel="noreferrer">
          {websiteIcon}&nbsp;Website
        </a>
        <a href={url} target={"_blank"} rel="noreferrer">
          &nbsp;{addressIcon}&nbsp;&nbsp;View on Google Maps
        </a>
        <p>{description}</p>
        <img src={image} alt={"restaurant"} />
        <p>
          Source: <span dangerouslySetInnerHTML={{ __html: source }} />
        </p>
      </StyledDetails>
    </InfoWindow>
  );
};

export default MarkerInfoWindow;
