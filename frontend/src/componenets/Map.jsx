import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



const containerStyle = {
  width: '100%',
  height: '250px',
};

export default function Map({lat, lng}) {
  const [map, setMap] = useState(null);
  
  const onLoad = (mapInstance) => {
      setMap(mapInstance);
  };

  const center = {
    lat: lat,
    lng: lng
  } 
  
  
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        >
        <Marker 
        center={center} />
      </GoogleMap>
    </LoadScript>
  );
};

