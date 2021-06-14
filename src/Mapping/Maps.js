import './Maps.css'
import MosqueList from './../data/MosqueList'

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function ARC( text ){

  return(
    <div>
      {text}
    </div>
  )
}

const GOOGLE_MAP_API_KEY = "AIzaSyCnsKWHQNPLThV4US96E56NO5Adx3fTSQo"


 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 6.6143,
      lng: 3.3583
    },
    zoom: 5
  };
  

  render() {
    console.log( this.props )
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ GOOGLE_MAP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={MosqueList[0].center.lat}
            lng={MosqueList[0].center.lng}
            text="Alausa Central Mosque"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;

