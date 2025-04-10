import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Terkep() {
    const rondaCoords = [36.7428, -5.1628];
    const puentenevoCoords = [36.7377787155, -5.1595410285];
    const plazadetorosCoords = [36.742361, -5.167067]
    const AlamedadelTajoCoords = [36.7436, -5.16768]
    const CasadelReyMoroCoords = [36.73979, -5.16432]
    const BanosArabesCoords = [36.73883, -5.16277]
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

                <Marker position={puentenevoCoords} icon={customIcon}>
                    <Popup>
                    Puente Nuevo
                    </Popup>
                </Marker>

                <Marker position={plazadetorosCoords} icon={customIcon}>
                    <Popup>
                     Plaza de Toros
                    </Popup>
                </Marker>

                <Marker position={AlamedadelTajoCoords} icon={customIcon}>
                    <Popup>
                    Alameda del Tajo
                    </Popup>
                </Marker>

                <Marker position={CasadelReyMoroCoords} icon={customIcon}>
                    <Popup>
                    Casadel Rey Moro
                    </Popup>
                </Marker>

                <Marker position={BanosArabesCoords} icon={customIcon}>
                    <Popup>
                    Baños Arabes
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}