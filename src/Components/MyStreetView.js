// /home/harvest/hack/3dmapper/src/Components/MyStreetView.js
import React, { Component } from 'react';

class MyStreetView extends Component {
  componentDidMount() {
    if (window.google) {
      this.initStreetView();
    } else {
      console.error('Google Maps API not loaded');
    }
  }

  initStreetView = () => {
    const location = this.props.location;

    new window.google.maps.StreetViewPanorama(
      document.getElementById('street-view-container'),
      {
        position: location,
        pov: { heading: 4.49, pitch: 5 },
        zoom: 1,
      }
    );
  }

  render() {
    return (
      <div id="street-view-container" style={{ height: '100vh', width: '100vw' }}></div>
    );
  }
}

export default MyStreetView;
