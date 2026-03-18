"use client";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export type StoreLocation = {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
};

const markerIcon = L.divIcon({
  className: "store-marker",
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

// Fix for Leaflet markers in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function StoreMap({ locations }: { locations: StoreLocation[] }) {
  return (
    <MapContainer
      center={[34.0522, -118.2437]}
      zoom={11}
      scrollWheelZoom={false}
      className="store-map h-full w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={markerIcon}>
          <Popup>
            <strong>{loc.name}</strong>
            <br />
            {loc.address}
            <br />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

