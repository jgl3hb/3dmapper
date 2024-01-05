import React, { useState } from 'react';
import { GoogleMap, LoadScript, StreetViewPanorama } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const columbiaMO = { lat: 38.9517, lng: -92.3341 }; // Coordinates of Columbia, MO

function App() {
  const [showStreetView, setShowStreetView] = useState(false);

  const toggleStreetView = () => {
    setShowStreetView(!showStreetView);
  };

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={columbiaMO}
        zoom={14}
      >
        {showStreetView && (
          <StreetViewPanorama
            position={columbiaMO}
            visible={true}
          />
        )}
      </GoogleMap>
      <button onClick={toggleStreetView} style={{ position: 'absolute', top: '10px', left: '10px' }}>
        {showStreetView ? 'Hide Street View' : 'Show Street View'}
      </button>
    </LoadScript>
  );
}

export default App;
