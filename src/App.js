// /home/harvest/hack/3dmapper/src/App.js
import React, { Component } from 'react';
import MyStreetView from './Components/MyStreetView';

class App extends Component {
  state = {
    isGoogleApiLoaded: false,
  };

  componentDidMount() {
    window.initMap = this.handleApiLoaded;
    this.loadGoogleMapsApi();
  }

  handleApiLoaded = () => {
    this.setState({ isGoogleApiLoaded: true });
  };

  loadGoogleMapsApi = () => {
    if (window.google) {
      this.handleApiLoaded();
      return;
    }
  
    if (!document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&callback=initMap`;
      script.async = true;
      document.head.appendChild(script);
    }
  };
  

  render() {
    const { isGoogleApiLoaded } = this.state;
    const streetViewLocation = { lat: 38.9422747, lng: -92.3289485 };

    return (
      <div className="App">
        {isGoogleApiLoaded ? (
          <MyStreetView location={streetViewLocation} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default App;
