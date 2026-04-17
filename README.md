# Fietsclub VCL Website

Een toegankelijke en mobielvriendelijke website voor Fietsclub VCL, gebouwd met HTML, CSS en JavaScript.

De site is statisch en heeft geen build-stap nodig. De pagina's kunnen direct via GitHub Pages worden gepubliceerd.

## Structuur

```text
/
|-- index.html             # Homepage
|-- about.html             # Over ons
|-- routes.html            # Donderdagse routes
|-- routes-sunday.html     # Zondagse routes
|-- safety.html            # Veiligheid & regels
|-- photos.html            # Foto's
|-- contact.html           # Contact
|-- style.css              # Hoofdstylesheet
|-- images/                # Afbeeldingen
|-- routes/                # GPX-bestanden voor de kaartjes
|-- scripts/
|   |-- main.js            # Mobiel menu
|   |-- maps.js            # Leaflet-kaarten en GPX-weergave
|   |-- lightbox.js        # Niet actief gekoppeld op de huidige fotopagina
|   `-- download_routes.js # Hulpscript, niet nodig voor de website zelf
```

## Contactgegevens

Het contactadres op de website is:

```text
VeloClubLent@gmail.com
```

Telefoonnummer en socialmedia-links worden niet op de site getoond. Externe links naar NTFU en Komoot blijven wel aanwezig.

## Content aanpassen

### Tekst aanpassen

1. Open het gewenste HTML-bestand.
2. Zoek de tekst die je wilt aanpassen.
3. Pas de tekst aan.
4. Sla het bestand op.

### Routes aanpassen of toevoegen

De routepagina's gebruiken lokale GPX-bestanden voor de kaartweergave en directe links naar Komoot voor de volledige route.

Voor donderdagse routes:

1. Open `routes.html`.
2. Voeg of wijzig een routeblok met een kaartcontainer, route-informatie en Komoot-link.
3. Zet het bijbehorende GPX-bestand in de map `routes/`.
4. Koppel het kaart-id en GPX-bestand in `scripts/maps.js`.

Voor zondagse routes geldt hetzelfde, maar dan in `routes-sunday.html`.

Voorbeeld:

```html
<div class="route-card">
    <div class="route-map" id="map-voorbeeld"></div>
    <div class="route-content">
        <h2>Route naam</h2>
        <div class="route-meta">
            <span>Afstand: 60 km</span>
            <span>Hoogtemeters: 100 hm</span>
        </div>
        <p>Korte routebeschrijving.</p>
        <a href="https://www.komoot.com/nl-nl/tour/ROUTE-ID" class="btn">Bekijk op Komoot</a>
    </div>
</div>
```

Daarna voeg je in `scripts/maps.js` een item toe:

```js
'map-voorbeeld': {
    center: [51.8667, 5.8667],
    gpx: 'routes/voorbeeld.gpx'
}
```

### Foto's aanpassen

1. Voeg de nieuwe foto toe aan de map `images/`.
2. Open `photos.html`.
3. Voeg een nieuw foto-item toe of wijzig een bestaand item.

Voorbeeld:

```html
<div class="photo-item">
    <img src="images/foto.jpg" alt="Beschrijving van de foto" loading="lazy">
</div>
```

## Styling aanpassen

### Kleuren wijzigen

Open `style.css` en pas de waarden in de `:root` sectie aan:

```css
:root {
    --primary-color: #000000;
    --secondary-color: #007984;
    --text-color: #333333;
    --background-color: #ffffff;
    --accent-color: #007984;
    --max-width: 1200px;
}
```

### Layout aanpassen

1. Open `style.css`.
2. Zoek de relevante CSS-regels.
3. Pas de waarden aan.
4. Test de wijziging op desktop en mobiel.

## Lokaal bekijken

De gewone pagina's kunnen direct in de browser worden geopend. Voor de routekaartjes is een lokale webserver betrouwbaarder, omdat de GPX-bestanden via `fetch()` worden geladen.

Een eenvoudige optie:

```bash
python -m http.server 8000
```

Open daarna:

```text
http://localhost:8000/
```

## Publiceren

De website is geschikt voor GitHub Pages:

1. Push de wijzigingen naar de GitHub repository.
2. Ga naar de repository-instellingen.
3. Open de GitHub Pages-instellingen.
4. Selecteer de branch die gepubliceerd moet worden.

## Technische vereisten

- Geen build-stappen nodig
- Geen frameworks
- Pure HTML, CSS en JavaScript
- Geen server-side code
- Geen database
