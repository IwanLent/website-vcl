document.addEventListener('DOMContentLoaded', () => {
    // Functie om een Komoot embedded kaart te laden
    function loadKomootMap(elementId, routeId) {
        const mapElement = document.getElementById(elementId);
        if (mapElement) {
            // Maak een iframe voor de Komoot embedded kaart
            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';
            iframe.style.borderRadius = '8px 8px 0 0';
            iframe.allow = 'geolocation';
            iframe.src = `https://www.komoot.com/nl-nl/tour/${routeId}/embed`;
            
            // Voeg het iframe toe aan het map element
            mapElement.innerHTML = '';
            mapElement.appendChild(iframe);
        }
    }

    // Alle routes met hun Komoot IDs
    const routes = {
        // Donderdagse routes
        'map-waalrijn': '1495743184',
        'map-italiaanseweg': '1507847976',
        'map-kleverberg': '2097349482',
        'map-posbank': '2098591535',
        'map-betuwe': '2097947933',
        'map-maaswaal': '2065939802',
        
        // Zondagse routes
        'map-veluwezoom': '2097641502',
        'map-kootwijk': '2055333587',
        'map-stuwwallen': '1150071633',
        'map-venray': '2110982347'
    };

    // Laad alle kaarten
    for (const [mapId, routeId] of Object.entries(routes)) {
        loadKomootMap(mapId, routeId);
    }
}); 