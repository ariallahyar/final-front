import React, { useState } from "react";
import { useLoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import mockData from "../mock-data.json";

const places = mockData.results;

const mapContainerStyle = { width: "100%", height: "100vh" };

const Map = () => {
  const [activeMarker, setActiveMarker] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    places.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={mapContainerStyle}
    >
      {places.map(({ id, name, position, description }) => (
        <Marker key={id} position={position} onClick={() => handleActiveMarker(id)}>
          {activeMarker === id && (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <h2>{name}</h2>
                <p>{description}</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
};

export default Map;
