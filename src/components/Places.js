import React from "react";

const Places = ({ places }) => {
  return places.map((place) => {
    return <PlaceCard place={place} />;
  });
};

export default Places;

const PlaceCard = ({ place }) => {

  return (
    <>
      <h2 key={place.place_id}>{place.name}</h2>
      <h3>{place.formatted_address}</h3>
      <p>{place.description}</p>
      <img
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Raspberries_%28Rubus_idaeus%29.jpg/1200px-Raspberries_%28Rubus_idaeus%29.jpg"
        }
        alt={"restaurant image"}
      />
    </>
  );
};
