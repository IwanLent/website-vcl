document.addEventListener('DOMContentLoaded', () => {
    // Centrum coördinaten van Lent
    const lentCoords = [51.8575, 5.8625];

    // Functie om een kaart te initialiseren
    function initMap(elementId) {
        const map = L.map(elementId).setView(lentCoords, 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        return map;
    }

    // Functie om GPX bestand te laden en te tekenen op de kaart
    async function loadGPX(map, routeId) {
        try {
            const response = await fetch(`https://www.komoot.com/api/v1/routes/${routeId}/gpx`);
            const gpxText = await response.text();
            const parser = new DOMParser();
            const gpxDoc = parser.parseFromString(gpxText, 'text/xml');
            
            const trackPoints = Array.from(gpxDoc.getElementsByTagName('trkpt')).map(trkpt => [
                parseFloat(trkpt.getAttribute('lat')),
                parseFloat(trkpt.getAttribute('lon'))
            ]);

            const polyline = L.polyline(trackPoints, {
                color: '#007984',
                weight: 4,
                opacity: 0.8
            }).addTo(map);

            map.fitBounds(polyline.getBounds());
        } catch (error) {
            console.error('Fout bij laden GPX:', error);
        }
    }

    // Alle routes met hun Komoot IDs
    const routes = {
        // Donderdagse routes
        'map-waalrijn': '3355919',
        'map-italiaanseweg': '3355920',
        'map-kleverberg': '3355921',
        'map-posbank': '3355922',
        'map-betuwe': '3355923',
        'map-maaswaal': '3355924',
        
        // Zondagse routes
        'map-veluwezoom': '3355381',
        'map-kootwijk': '3355383',
        'map-stuwwallen': '3355384',
        'map-venray': '3355385'
    };

    // Initialiseer alle kaarten en laad GPX bestanden
    for (const [mapId, routeId] of Object.entries(routes)) {
        const mapElement = document.getElementById(mapId);
        if (mapElement) {
            const map = initMap(mapId);
            loadGPX(map, routeId);
        }
    }
}); 