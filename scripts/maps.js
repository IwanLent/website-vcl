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
            const gpxData = await response.text();
            const gpx = new gpxParser();
            gpx.parse(gpxData);
            
            // Teken de route op de kaart
            const route = gpx.tracks[0];
            if (route) {
                const coordinates = route.points.map(point => [point.lat, point.lon]);
                L.polyline(coordinates, {
                    color: '#007984',
                    weight: 3,
                    opacity: 0.8
                }).addTo(map);
                
                // Pas de kaart aan om de hele route te tonen
                if (coordinates.length > 0) {
                    map.fitBounds(L.latLngBounds(coordinates));
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
            gpx: 'routes/2025-03-20_1495743184_#VCL WaalRijnPad.gpx'
        },
        'map-italiaanseweg': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/2025-03-14_1507847976_#VCL Italiaanse weg.gpx'
        },
        'map-kleverberg': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/2025-03-14_2097349482_#VCL Kleverberg.gpx'
        },
        'map-posbank': {
            center: [52.0333, 6.0167], // Posbank
            gpx: 'routes/2025-03-14_2098591535_#VCL Posbank.gpx'
        },
        'map-betuwe': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/2025-03-15_2098599755_#VCL Betuwe.gpx'
        },
        'map-maaswaal': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/2025-02-22_2065939802_VCL Classic - MaasWaal.gpx'
        },
        
        // Zondagse routes
        'map-veluwezoom': {
            center: [52.0333, 6.0167], // Veluwezoom
            gpx: 'routes/2025-03-14_2097641502_VCL Veluwezoom - Hoenderloo.gpx'
        },
        'map-kootwijk': {
            center: [52.1333, 5.7833], // Kootwijk
            gpx: 'routes/2025-02-15_2055333587_VCL Classic - Kootwijk.gpx'
        },
        'map-stuwwallen': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/2023-06-03_1150071633_VCL De 3 STUWWALLEN.gpx'
        },
        'map-venray': {
            center: [51.5333, 5.9833], // Venray
            gpx: 'routes/2025-03-22_2110982347_VCL Rondje zuid via Venray.gpx'
        }
    };

    // Initialiseer alle kaarten
    for (const [mapId, routeInfo] of Object.entries(routes)) {
        const map = initMap(mapId, routeInfo.center);
        if (map) {
            loadGPX(map, routeInfo.gpx);
        }
    }
}); 