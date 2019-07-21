import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


export default class MyMap extends Component {
  state = {
    lat: 54.1275990177612,
    lng: -2.43310303309547,
    zoom: 13,
  }

  render() {
    var position
    if (this.props) {
      position = [this.props.lat, this.props.long]
    } else {
      position = [this.state.lat, this.state.lng]
    }
    console.log(this.props)
    return (
      <div ref={this.mapWrapperRef} className="map-wrapper">
        {(typeof window !== 'undefined') ? (
           <Map ref={this.mapRef} center={position} zoom={this.state.zoom}
              style={{height: '540px'}}
            >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            <Marker position={position} >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
              </Marker>
          </Map>
        ) : null}
      </div>
    );
  }
}
