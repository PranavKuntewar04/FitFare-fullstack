import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '250px',
};

export default function Map({ lat, lng }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  const center = {
    lat: lat,
    lng: lng,
  };

  const onLoad = (mapInstance) => {
    mapRef.current = mapInstance;
    setMap(mapInstance);
  };

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
