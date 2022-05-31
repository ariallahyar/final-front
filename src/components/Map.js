import React, { useMemo, useState } from "react";
import { useLoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

const places = [
  { id: 1, name: "Test 1", position: { lat: 55.7, lng: 12.55 } },
  { id: 2, name: "Test 2", position: { lat: 55.67, lng: 12.54 } },
  { id: 3, name: "Test 3", position: { lat: 55.67, lng: 12.56 } },
  { id: 4, name: "Test 4", position: { lat: 55.7, lng: 12.59 } },
];

const mapContainerStyle = { width: "100%", height: "100vh" };

const Map = () => {
  const [activeMarker, setActiveMarker] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const center = useMemo(() => ({ lat: 55.67, lng: 12.56 }), []);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={13}
      center={center}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={mapContainerStyle}
    >
      {places.map(({ id, name, position }) => (
        <Marker key={id} position={position} onClick={() => handleActiveMarker(id)}>
          {activeMarker === id && (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
};

export default Map;
