import React, { Component } from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import { css } from "@emotion/core"
import "leaflet/dist/leaflet.css"
import "../styles/map.css"
import L from "leaflet"

export default class MyMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 54.126188,
      lng: -2.170927,
      zoom: 9,
      name: "",
      markers: [],
      singleBarn: false,
    }
    this.formatMarkers = this.formatMarkers.bind(this)
    this.popupRef = React.createRef()
    this.mapRef = React.createRef()
    this.setPageType = this.setPageType.bind(this)
  }

  componentDidMount() {
    this.formatMarkers()
    this.setPageType()
    this.mapRef.current.leafletElement.scrollWheelZoom.disable()
  }

  componentDidUpdate() {
    this.mapRef.current.leafletElement.setMinZoom(9)
    this.mapRef.current.leafletElement.setMaxZoom(19)
    if (this.state.singleBarn) {
      this.popupRef.current.leafletElement.openPopup()
    }
  }

  setPageType() {
    if (this.props.long) {
      this.setState({
        singleBarn: true,
      })
    }
  }

  formatMarkers() {
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    })
    const markers = this.props.allBarns.edges.map(({ node }) => {
      return {
        lat: node.lat,
        long: node.long,
        name: node.name,
        id: node.id,
      }
    })
    return markers.map(marker => (
      <Marker position={[marker.lat, marker.long]} key={marker.id}>
        <Popup>{marker.name}</Popup>
      </Marker>
    ))
  }

  render() {
    var position, zoom
    if (this.props.long) {
      position = [this.props.lat, this.props.long]
      zoom = this.props.zoom
    } else {
      position = [this.state.lat, this.state.lng]
      zoom = this.state.zoom
    }
    const name = this.props.barnName

    return (
      <React.Fragment>
        {typeof window !== "undefined" ? (
          <Map
            ref={this.mapRef}
            center={position}
            zoom={zoom}
            css={css`
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
              border-radius: 5px;
            `}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} ref={this.popupRef}>
              <Popup>{name}</Popup>
            </Marker>
            {this.formatMarkers()}
          </Map>
        ) : null}
      </React.Fragment>
    )
  }
}
