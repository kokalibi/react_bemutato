import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Terkep() {
    const rondaCoords = [36.7428, -5.1628];
    const customIcon = new L.Icon({
        iconUrl: '/pngwing.com.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
    });

    return (
        <div style={{ height: '500px' }}>
            <MapContainer center={rondaCoords} zoom={13} style={{ width: '100%', height: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={rondaCoords} icon={customIcon}>
                    <Popup>
                        Ronda, Spanyolország
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
