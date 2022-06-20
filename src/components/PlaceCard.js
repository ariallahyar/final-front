import React, { useEffect, useRef } from "react";
// import { getPhoto } from "../api/place";
import { addressIcon, websiteIcon } from "../assets/icons";
import styled from "styled-components";

const Place = styled.article(({ theme }) => `
  margin-bottom: 20px;

  h2 {
    margin-bottom: 5px;
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
`
);

const PlaceCard = ({ place, activeMarker, setActiveMarker }) => {
  
  const photoRef = place.photos[0].photo_reference;
  const API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
  const image = `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photoRef}&maxwidth=400&key=${API_KEY}`;
  
  // SERVER-SIDE CALL, NOT WORKING
  // const [image, setImage] = useState(null);
  // useEffect(() => getPhoto(photoRef, (image) => setImage(image)), [photoRef]);

  // DEVELOPMENT MODE
  // const image =
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
        {addressIcon}&nbsp;&nbsp;{place.vicinity}
      </a>
      <a href={place.website} target={"_blank"} rel="noreferrer">
        {websiteIcon}&nbsp;{place.website}
      </a>
      <p>{place.description}</p>
      <img src={image} alt={"restaurant"} />
    </Place>
  );
};

export default PlaceCard;
