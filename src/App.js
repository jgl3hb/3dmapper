import React, { useState } from 'react';
import { GoogleMap, LoadScript, StreetViewPanorama } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const columbiaMO = { lat: 38.942257, lng: -92.328942 }

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
        zoom={16}
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
