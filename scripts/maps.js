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
    async function loadGPX(map, gpxFile) {
        try {
            const response = await fetch(gpxFile);
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

    // Alle routes met hun GPX bestanden
    const routes = {
        'map-waalrijn': 'routes/VCLWaalRijnPad45.gpx',
        'map-dijken': 'routes/VCLDijken65.gpx',
        'map-kleverberg': 'routes/VCLKleverberg50.gpx',
        'map-italiaanseweg': 'routes/VCLItaliaanseweg55.gpx',
        'map-posbank': 'routes/VCLPosbank65.gpx'
    };

    // Initialiseer alle kaarten en laad GPX bestanden
    for (const [mapId, gpxFile] of Object.entries(routes)) {
        const mapElement = document.getElementById(mapId);
        if (mapElement) {
            const map = initMap(mapId);
            loadGPX(map, gpxFile);
        }
    }
}); 