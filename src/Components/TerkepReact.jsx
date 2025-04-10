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
                    <p></p>
                    <img src="https://alisononfoot.com/wp-content/uploads/2024/07/Things-to-do-in-Ronda2-2048x1470.jpg" alt="" style={{width: "80px"}} />
                    </Popup>
                </Marker>

                <Marker position={plazadetorosCoords} icon={customIcon}>
                    <Popup>
                     Plaza de Toros
                     <p></p>
                     <img src="99.jpg" alt="" style={{width: "80px"}}/>
                    </Popup>
                </Marker>

                <Marker position={AlamedadelTajoCoords} icon={customIcon}>
                    <Popup>
                    Alameda del Tajo
                    <p></p>
                    <img src="https://www.andalucia.com/sites/default/files/MVC222850078-Ronda-%20Andalucia-Spain-copyright-m-chaplow.jpg" alt="" style={{width: "80px"}}/>
                    </Popup>
                </Marker>

                <Marker position={CasadelReyMoroCoords} icon={customIcon}>
                    <Popup>
                    Casadel Rey Moro
                    <p></p>
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/a9/6e/42/vue-de-la-casa-des-jardins.jpg?w=1200&h=-1&s=1" alt="" style={{width: "80px"}}/>
                    </Popup>
                </Marker>

                <Marker position={BanosArabesCoords} icon={customIcon}>
                    <Popup>
                    Baños Arabes
                    <p></p>
                    <img src="https://www.emocionday.com/media/catalog/product/cache/7/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/a/xbanos-arabes-en-granada-circuito-termal-bienestar-emocionday_6_1.jpg.pagespeed.ic.TGhT1PsJ9d.jpg" alt="" style={{width: "80px"}}/>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}