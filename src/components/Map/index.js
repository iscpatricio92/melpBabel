import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '95%',
    height: '95%'
  };
  export class MapContainer extends Component {
    
    render() {
        console.log(this.props);
        const {city, location, street}=this.props.address;
      return (
        <Map
          google={this.props.google}
          zoom={16}
          style={mapStyles}
          initialCenter={{
           lat: location.lat,
           lng: location.lng
          }}
        >
        <Marker
          onClick={this.onMarkerClick}
          name={street + " "+city}
        />
        
        </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAI3RRCrWYpm3ZnWkCMiBuMKDyMzSlVc4Y'
  })(MapContainer);