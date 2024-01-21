import React, { ReactNode } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
type MapProps = {
  center: [number, number];
  zoom: number;
  children?: ReactNode;
};

export default function Map(prop: MapProps) {
  const pin = L.icon({
    iconUrl: "/pin.svg",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });


  return (
    <MapContainer
      markerZoomAnimation
      zoomAnimation
      className="z-0 rounded-lg shadow-xl"
      center={prop.center}
      zoom={prop.zoom}
      style={{ height: "70vh", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        zIndex={1}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-8.592738632092548, 116.10511223313067]} icon={pin}>
        <Popup>
          Anjayyyyyyy Blom Jadi
        </Popup>
      </Marker>
    </MapContainer>
  );
}
