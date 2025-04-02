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
            const parser = new DOMParser();
            const gpxDoc = parser.parseFromString(gpxData, 'text/xml');
            
            // Haal de coördinaten op uit het GPX bestand
            const trackPoints = gpxDoc.getElementsByTagName('trkpt');
            const coordinates = [];
            
            for (let point of trackPoints) {
                const lat = parseFloat(point.getAttribute('lat'));
                const lon = parseFloat(point.getAttribute('lon'));
                coordinates.push([lat, lon]);
            }
            
            // Teken de route op de kaart
            L.polyline(coordinates, {
                color: '#007984',
                weight: 3,
                opacity: 0.8
            }).addTo(map);
            
            // Pas de kaart aan om de hele route te tonen
            map.fitBounds(L.latLngBounds(coordinates));
        } catch (error) {
            console.error('Fout bij het laden van de GPX route:', error);
        }
    }

    // Alle routes met hun centrum coördinaten en GPX URLs
    const routes = {
        // Donderdagse routes
        'map-waalrijn': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/waalrijn.gpx'
        },
        'map-italiaanseweg': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/italiaanseweg.gpx'
        },
        'map-kleverberg': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/kleverberg.gpx'
        },
        'map-posbank': {
            center: [52.0333, 6.0167], // Posbank
            gpx: 'routes/posbank.gpx'
        },
        'map-betuwe': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/betuwe.gpx'
        },
        'map-maaswaal': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/maaswaal.gpx'
        },
        
        // Zondagse routes
        'map-veluwezoom': {
            center: [52.0333, 6.0167], // Veluwezoom
            gpx: 'routes/veluwezoom.gpx'
        },
        'map-kootwijk': {
            center: [52.1333, 5.7833], // Kootwijk
            gpx: 'routes/kootwijk.gpx'
        },
        'map-stuwwallen': {
            center: [51.8667, 5.8667], // Lent
            gpx: 'routes/stuwwallen.gpx'
        },
        'map-venray': {
            center: [51.5333, 5.9833], // Venray
            gpx: 'routes/venray.gpx'
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