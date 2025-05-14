import React, { useEffect, useRef } from 'react'
import DynamicSVG from '../utils/DynamicSVG'

const Test = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    
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