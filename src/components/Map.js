import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


export default class MyMap extends Component {
  state = {
    lat: 55.5,
    lng: -1.54,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]

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
