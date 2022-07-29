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
const markerColorSelected = base.colors.primary;

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
      gestureHandling: "greedy",
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

  const icon = (selected) => {
    return {
      path: window.google.maps.SymbolPath.CIRCLE,
      fillColor: selected ? markerColorSelected : markerColor,
      fillOpacity: 1,
      strokeWeight: 1.5,
      strokeColor: "#ffffff",
      scale: 16,
    };
  };

  const label = (tags) => {
    const properties = {
      fontFamily: "Fontawesome",
      fontWeight: "900",
      fontSize: "14px",
      color: "white",
      text: "\uf2e7",
    };

    if (tags.includes("Drinks")) {
      properties.text = "\uf000";
    }

    if (tags.includes("Cafe") || tags.includes("Sweets")) {
      properties.text = "\uf0f4";
    }

    return properties;
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
            zIndex={isSelected ? window.google.maps.Marker.MAX_ZINDEX + 1 : undefined}
            icon={icon(isSelected)}
            label={label(place.tags)}
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
