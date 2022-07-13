import React, { memo, useMemo, useCallback, useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { base } from "../themes";
import MarkerInfoWindow from "./InfoWindow";

import { faMapMarker, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

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
    path: faMapMarker.icon[4],
    fillColor: markerColor,
    fillOpacity: 1,
    anchor: new window.google.maps.Point(
      faMapMarker.icon[0] / 2, // width
      faMapMarker.icon[1] // height
    ),
    strokeWeight: 1,
    strokeColor: "#ffffff",
    scale: 0.075,
  };

  const iconSelected = {
    path: faMapMarkerAlt.icon[4],
    fillColor: markerColor,
    fillOpacity: 1,
    anchor: new window.google.maps.Point(
      faMapMarkerAlt.icon[0] / 2, // width
      faMapMarkerAlt.icon[1] // height
    ),
    strokeWeight: 1.5,
    strokeColor: "#ffffff",
    scale: 0.1,
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
            icon={isSelected && !isMobile ? iconSelected : icon}
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
