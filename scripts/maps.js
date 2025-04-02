document.addEventListener('DOMContentLoaded', () => {
    // Functie om een kaart te initialiseren
    function initMap(elementId, center) {
        const mapElement = document.getElementById(elementId);
        if (mapElement) {
            const map = L.map(elementId).setView(center, 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);
            return map;
        }
        return null;
    }

    // Functie om een GPX route te laden en te tekenen
    async function loadGPX(map, gpxUrl) {
        try {
            const response = await fetch(gpxUrl);
            const gpxText = await response.text();
            const parser = new DOMParser();
            const gpxDoc = parser.parseFromString(gpxText, 'text/xml');
            
            // Converteer GPX naar GeoJSON
            const geoJson = toGeoJSON.gpx(gpxDoc);
            
            // Teken de route op de kaart
            if (geoJson.features.length > 0) {
                // Teken de route lijn
                const routeLine = L.geoJSON(geoJson, {
                    style: {
                        color: '#007984',
                        weight: 3,
                        opacity: 0.8
                    }
                }).addTo(map);

                // Haal waypoints op
                const waypoints = geoJson.features.filter(f => f.geometry.type === 'Point');
                
                // Teken waypoints als markers
                waypoints.forEach(waypoint => {
                    const coords = waypoint.geometry.coordinates;
                    const marker = L.marker([coords[1], coords[0]], {
                        icon: L.divIcon({
                            className: 'route-waypoint',
                            html: '<div class="waypoint-marker"></div>',
                            iconSize: [12, 12]
                        })
                    });
                    
                    if (waypoint.properties.name) {
                        marker.bindPopup(waypoint.properties.name);
                    }
                    
                    marker.addTo(map);
                });

                // Pas de kaart aan om de hele route te tonen
                const bounds = routeLine.getBounds();
                if (bounds.isValid()) {
                    map.fitBounds(bounds);
                }
            }
        } catch (error) {
            console.error('Fout bij het laden van de GPX route:', error);
        }
    }

    // Alle routes met hun centrum coördinaten en GPX URLs
    const routes = {
        // Donderdagse routes
        'map-waalrijn': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/WaalRijnPad.gpx'
        },
        'map-italiaanseweg': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/Italiaanse_weg.gpx'
        },
        'map-kleverberg': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/Kleverberg.gpx'
        },
        'map-posbank': {
            center: [52.0333, 6.0167], // Posbank
            gpx: 'routes/Posbank.gpx'
        },
        'map-betuwe': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/Betuwe.gpx'
        },
        'map-maaswaal': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/MaasWaal.gpx'
        },
        
        // Zondagse routes
        'map-veluwezoom': {
            center: [52.0333, 6.0167], // Veluwezoom
            gpx: 'routes/Veluwezoom_Hoenderloo.gpx'
        },
        'map-kootwijk': {
            center: [52.1333, 5.7833], // Kootwijk
            gpx: 'routes/Kootwijk.gpx'
        },
        'map-stuwwallen': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/De_3_STUWWALLEN.gpx'
        },
        'map-venray': {
            center: [51.5333, 5.9833], // Venray
            gpx: 'routes/Rondje_zuid_via_Venray.gpx'
        }
    };

    // Voeg CSS toe voor de waypoint markers
    const style = document.createElement('style');
    style.textContent = `
        .waypoint-marker {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #007984;
            border: 2px solid white;
            box-shadow: 0 0 4px rgba(0,0,0,0.4);
        }
    `;
    document.head.appendChild(style);

    // Initialiseer alle kaarten
    for (const [mapId, routeInfo] of Object.entries(routes)) {
        const map = initMap(mapId, routeInfo.center);
        if (map) {
            loadGPX(map, routeInfo.gpx);
        }
    }
}); 