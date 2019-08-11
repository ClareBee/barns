import React, { Component } from 'react'
import { L, Map, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import { StaticQuery, graphql } from "gatsby"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

export default class MyMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      lat: 54.1275990177612,
      lng: -2.43310303309547,
      zoom: 10,
      name: '',
      markers: [],
      singleBarn: false
    }
    this.formatMarkers = this.formatMarkers.bind(this)
    this.popupRef = React.createRef();
    this.mapRef = React.createRef();
    this.setPageType = this.setPageType.bind(this)

  }

  componentDidMount(){
    this.formatMarkers()
    this.setPageType()
  }

  setPageType(){
    if(this.props.long){
      this.setState({
        singleBarn: true
      })
    }
  }

  formatMarkers() {
    const markers = this.props.allBarns.edges.map(({node}) => {
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
    var position, zoom, popupDisplay
    if (this.props.long) {
      position = [this.props.lat, this.props.long]
      popupDisplay = true
      zoom = this.props.zoom
    } else {
      position = [this.state.lat, this.state.lng]
      popupDisplay = false
      zoom = this.state.zoom
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
              zoom={zoom}
              css={map}
            >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            <Marker position={position} >
              <Tooltip permanent={this.state.singleBarn}>
                {name}
              </Tooltip>
            </Marker>
            {this.formatMarkers()}
          </Map>
        ) : null}
      </div>
    );
  }
}
