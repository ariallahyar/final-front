import React from "react";
import { useLoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import mockData from "../mock-data.json";

const places = mockData.results;

const mapContainerStyle = { width: "100%", height: "100%" };

const Map = ({ markers, activeMarker, setActiveMarker }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

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

  const icon = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new window.google.maps.Point(10, 20),
  };

  const iconSelected = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "red",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2.5,
    anchor: new window.google.maps.Point(10, 20),
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={mapContainerStyle}
    >
      {markers.map(({ place_id, name, coordinates, description, formatted_address }) => {
        const isSelected = activeMarker === place_id;
        return (
          <Marker
            key={place_id}
            position={coordinates}
            icon={isSelected ? iconSelected : icon}
            label={name}
            onClick={() => handleActiveMarker(place_id)}
          >
            {isSelected && (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>
                  <h2>{name}</h2>
                  <h3>{formatted_address}</h3>
                  <p>{description}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
    </GoogleMap>
  );
};

export default Map;
