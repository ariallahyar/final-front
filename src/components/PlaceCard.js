import React, { useEffect, useRef } from "react";

const PlaceCard = ({ place, activeMarker, setActiveMarker }) => {
  const isActiveMarker = place.place_id === activeMarker;
  const fieldRef = useRef(null);

  const imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Raspberries_%28Rubus_idaeus%29.jpg/1200px-Raspberries_%28Rubus_idaeus%29.jpg";

  useEffect(() => {
    if (isActiveMarker && fieldRef.current) {
      fieldRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [isActiveMarker]);

  return (
    <div ref={fieldRef}>
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
