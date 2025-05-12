import React, { useEffect, useRef } from 'react'
import DynamicSVG from '../utils/DynamicSVG'

const Test = () => {
  const mapRef = useRef(null);
  const platformRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const platform = new window.H.service.Platform({
        apikey: 'YOUR_API_KEY_HERE'
      });
      platformRef.current = platform;

      const defaultLayers = platform.createDefaultLayers();

      const map = new window.H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          zoom: 14,
          center: { lat: 52.5200, lng: 13.4050 } // Default center
        }
      );

      // Enable interactions
      const behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));
      const ui = window.H.ui.UI.createDefault(map, defaultLayers);

      // Get user's location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(coords);
            const marker = new window.H.map.Marker(coords);
            map.addObject(marker);
          },
          (err) => {
            console.error('Error getting location', err);
          }
        );
      }

      return () => {
        map.dispose();
      };
    };

    loadMap();
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '500px' }}
      id="here-map"
    ></div>
  );
};

export default Test