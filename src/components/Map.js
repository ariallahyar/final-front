import React, { memo, useMemo, useCallback, useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { base } from "../themes";
import MarkerInfoWindow from "./InfoWindow";

const loadOptions = {
  id: "google-map-script",
  libraries: ["places"],
  googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
};

const mapContainerStyle = { width: "100%", height: "100%" };

const markerColor = base.colors.secondary;

const Map = ({ markers, activeMarker, setActiveMarker, isMobile }) => {
  const { isLoaded, loadError } = useJsApiLoader(loadOptions);

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => setMap(map), []);

  useEffect(() => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
      markers?.forEach((marker) => {
        bounds.extend(marker.geometry.location);
      });
      map.fitBounds(bounds);
    }
  }, [map, markers]);

  const mapOptions = useMemo(
    () => ({
      mapId: "1d387d12bfc69874",
      mapTypeControl: false,
      streetViewControl: false,
      clickableIcons: false,
      fullscreenControl: false,
    }),
    []
  );

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  if (!isLoaded) return <div>Loading...</div>;

  const icon = {
    path: "m 12 2.016 q 2.906 0 4.945 2.039 t 2.039 4.945 q 0 1.453 -0.727 3.328 t -1.758 3.516 t -2.039 3.07 t -1.711 2.273 l -0.75 0.797 q -0.281 -0.328 -0.75 -0.867 t -1.688 -2.156 t -2.133 -3.141 t -1.664 -3.445 t -0.75 -3.375 q 0 -2.906 2.039 -4.945 t 4.945 -2.039 z",
    fillColor: markerColor,
    fillOpacity: 1,
    strokeWeight: 1,
    strokeColor: "white",
    rotation: 0,
    scale: 2,
    anchor: new window.google.maps.Point(12, 21),
  };

  const iconSelected = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: markerColor,
    fillOpacity: 1,
    strokeWeight: 1,
    strokeColor: "white",
    rotation: 0,
    scale: 2.3,
    anchor: new window.google.maps.Point(12, 21),
  };

  if (loadError) return <div>Sorry, map cannot be loaded at this time.</div>;

  return (
    <GoogleMap
      onLoad={onLoad}
      options={mapOptions}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={mapContainerStyle}
    >
      {markers?.map((place) => {
        const place_id = place.place_id;
        const position = place.geometry.location;
        const isSelected = activeMarker === place_id;

        return (
          <Marker
            key={place_id}
            position={position}
            icon={isSelected && isMobile ? "none" : isSelected && !isMobile ? iconSelected : icon}
            onClick={() => handleActiveMarker(place_id)}
          >
            {isSelected &&
              (!isMobile ? (
                map.panTo(position)
              ) : (
                <MarkerInfoWindow
                  map={map}
                  position={position}
                  setActiveMarker={setActiveMarker}
                  place={place}
                />
              ))}
          </Marker>
        );
      })}
    </GoogleMap>
  );
};

export default memo(Map);
