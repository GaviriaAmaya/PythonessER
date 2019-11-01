import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Epslist from './Components/Eps'
import Location from './Components/Location'
import Emergencys from './Components/Emergencys';
import CurrentLocation from './Components/Maps';
import './App.css';
import * as FacilityData from './Components/data/ERPlaces.json';



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div className='container'>

      <div className='lists'>
        <Location/>
        <Epslist/>
        <Emergencys/>
      </div>
    <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        { FacilityData["IPS_list"].map( ips => (
      <Marker
          name={ips.IPS_name}
          position={{lat: ips.address.lat, lng: ips.address.lng}} />
        ) )}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEKEY
})(MapContainer);