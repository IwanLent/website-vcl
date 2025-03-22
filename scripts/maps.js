document.addEventListener('DOMContentLoaded', () => {
    // Centrum coördinaten voor Lent
    const lentCoords = [51.8575, 5.8575];

    // Functie om een kaart te initialiseren
    function initMap(elementId, center = lentCoords, zoom = 13) {
        const map = L.map(elementId).setView(center, zoom);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        return map;
    }

    // Functie om GPX bestand te laden en op de kaart te tonen
    async function loadGPX(map, gpxFile) {
        try {
            const response = await fetch(gpxFile);
            const gpxText = await response.text();
            const parser = new DOMParser();
            const gpx = parser.parseFromString(gpxText, 'text/xml');
            
            const points = [];
            const trackpoints = gpx.getElementsByTagName('trkpt');
            
            for (let point of trackpoints) {
                const lat = parseFloat(point.getAttribute('lat'));
                const lon = parseFloat(point.getAttribute('lon'));
                points.push([lat, lon]);
            }

            // Teken de route op de kaart
            const polyline = L.polyline(points, {
                color: '#007984',
                weight: 4,
                opacity: 0.8
            }).addTo(map);

            // Pas de kaart zoom aan om de hele route te tonen
            map.fitBounds(polyline.getBounds());

        } catch (error) {
            console.error('Fout bij laden GPX bestand:', error);
        }
    }

    // Initialiseer alle kaarten
    const maps = {
        'waalrijn': {
            map: initMap('map-waalrijn'),
            gpx: 'routes/VCLWaalRijnPad45.gpx'
        },
        'dijken': {
            map: initMap('map-dijken'),
            gpx: 'routes/VCLDijken65.gpx'
        },
        'kleverberg': {
            map: initMap('map-kleverberg'),
            gpx: 'routes/VCLKleverberg50.gpx'
        },
        'italiaanseweg': {
            map: initMap('map-italiaanseweg'),
            gpx: 'routes/VCLItaliaanseweg55.gpx'
        },
        'posbank': {
            map: initMap('map-posbank'),
            gpx: 'routes/VCLPosbank65.gpx'
        }
    };

    // Laad GPX bestanden voor alle kaarten
    Object.values(maps).forEach(({ map, gpx }) => {
        loadGPX(map, gpx);
    });
}); 