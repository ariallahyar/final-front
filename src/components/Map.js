import React, { useState } from "react";
import { useLoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import mockData from "../mock-data.json";

const places = mockData.results;

const mapContainerStyle = { width: "100%", height: "100vh" };

const Map = ({ markers }) => {
  const [activeMarker, setActiveMarker] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    places.forEach(({ coordinates }) => bounds.extend(coordinates));
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
      {markers.map(({ place_id, name, coordinates, description, formatted_address }) => (
        <Marker key={place_id} position={coordinates} onClick={() => handleActiveMarker(place_id)}>
          {activeMarker === place_id && (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <h2>{name}</h2>
                <h3>{formatted_address}</h3>
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
