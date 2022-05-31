import { useMemo } from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const mapContainerStyle = () => ({ width: "100%", height: "100vh" });

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const center = useMemo(() => ({ lat: 55.67, lng: 12.56 }), []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap zoom={13} center={center} mapContainerStyle={mapContainerStyle()}>
      <Marker key={"1"} position={{ lat: 55.67, lng: 12.56 }} />
    </GoogleMap>
  );
};

export default Map;
