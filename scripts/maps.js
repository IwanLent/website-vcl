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

    // Functie om route te laden en te tekenen op de kaart
    async function loadRoute(map, routeId) {
        try {
            // Haal de route data op van de publieke Komoot pagina
            const response = await fetch(`https://www.komoot.com/nl-nl/route/${routeId}/embed`);
            const html = await response.text();
            
            // Extraheer de route data uit de HTML
            const match = html.match(/window\.__INITIAL_STATE__\s*=\s*({.*?});/);
            if (match) {
                const data = JSON.parse(match[1]);
                const coordinates = data.route.coordinates.map(coord => [coord.lat, coord.lng]);

                // Teken de route op de kaart
                const polyline = L.polyline(coordinates, {
                    color: '#007984',
                    weight: 4,
                    opacity: 0.8
                }).addTo(map);

                // Pas de zoom aan om de hele route te tonen
                map.fitBounds(polyline.getBounds());
            }
        } catch (error) {
            console.error('Fout bij laden route:', error);
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

    // Initialiseer alle kaarten en laad routes
    for (const [mapId, routeId] of Object.entries(routes)) {
        const mapElement = document.getElementById(mapId);
        if (mapElement) {
            const map = initMap(mapId);
            loadRoute(map, routeId);
        }
    }
}); 