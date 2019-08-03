import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { StaticQuery, graphql } from "gatsby"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

class MyMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      lat: 54.1275990177612,
      lng: -2.43310303309547,
      zoom: 13,
      name: '',
      markers: []
    }
    this.formatMarkers = this.formatMarkers.bind(this)
  }

  componentDidMount(){
    this.formatMarkers()
    console.log('state', this.state)
  }

  formatMarkers() {
    const markers = this.props.barns.edges.map(({node}) => {
      return {
        lat: node.lat,
        long: node.long,
        name: node.name,
        id: node.id
      }
    })
    return markers.map(marker => (
      <Marker position={[marker.lat, marker.long]} key={marker.id}>
        <Popup>
        {marker.name}
        </Popup>
      </Marker>
    ))
  }

  render() {
    var position
    if (this.props.long) {
      position = [this.props.lat, this.props.long]
    } else {
      position = [this.state.lat, this.state.lng]
    }
    const name = this.props.barnName
    const map = css`
      height: 540px;
    `
    console.log('props', this.props)
    return (
      <div>
        {(typeof window !== 'undefined') ? (
           <Map
              ref={this.mapRef}
              center={position}
              zoom={this.state.zoom}
              css={map}
            >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            <Marker position={position} >
              <Popup>
                {name}
              </Popup>
            </Marker>
            {this.formatMarkers()}
          </Map>
        ) : null}
      </div>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allBarnsJson {
          edges {
            node {
              id
              name
              lat
              long
            }
          }
        }
      }
    `}
    render={(data) => (
      <MyMap barns={data.allBarnsJson} />
    )}
  />
)
