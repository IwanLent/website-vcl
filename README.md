# Fietsclub VCL Website

Een toegankelijke en mobielvriendelijke website voor Fietsclub VCL, gebouwd met HTML, CSS en JavaScript.

## Structuur

```
/
├── index.html          # Homepage
├── routes.html         # Routes pagina
├── veiligheid.html     # Veiligheid & Regels pagina
├── fotos.html          # Foto's pagina
├── contact.html        # Contact pagina
├── over-ons.html       # Over ons pagina
├── style.css          # Hoofdstylesheet
├── images/            # Afbeeldingen
│   ├── logo.png       # Club logo
│   ├── header.jpg     # Header afbeelding
│   └── foto1.jpg      # Club foto's
├── routes/            # GPX bestanden
│   ├── bosroute.gpx
│   └── waterroute.gpx
└── scripts/           # JavaScript bestanden
    ├── main.js        # Hoofdscript
    └── lightbox.js    # Lightbox functionaliteit
```

## Content aanpassen

### Tekst aanpassen
1. Open het gewenste HTML-bestand
2. Zoek de tekst die je wilt aanpassen
3. Vervang de tekst tussen de `<p>` tags
4. Sla het bestand op

### Routes toevoegen
1. Open `routes.html`
2. Kopieer het voorbeeld route-blok:
```html
<article class="route-card">
    <div class="route-map">
        <iframe 
            src="https://www.komoot.com/tour/1234567/embed"
            width="100%" 
            height="300" 
            frameborder="0"
            title="Route kaart"
            allowfullscreen>
        </iframe>
    </div>
    <div class="route-content">
        <h2>Route naam</h2>
        <p class="route-meta">
            <span>Lengte: XX km</span>
            <span>Moeilijkheid: Niveau</span>
        </p>
        <p>Route beschrijving</p>
        <div class="route-actions">
            <a href="routes/route.gpx" class="button" download>
                Download GPX
            </a>
        </div>
    </div>
</article>
```
3. Pas de inhoud aan
4. Voeg het GPX-bestand toe aan de `routes/` map
5. Update de iframe src met de juiste Komoot/Strava embed URL

### Foto's toevoegen
1. Voeg de nieuwe foto toe aan de `images/` map
2. Open `fotos.html`
3. Kopieer het voorbeeld foto-blok:
```html
<div class="photo-item">
    <img src="images/foto.jpg" alt="Beschrijving van de foto" loading="lazy">
    <div class="photo-overlay">
        <button class="photo-button" aria-label="Vergroot foto">
            <span class="icon">+</span>
        </button>
    </div>
</div>
```
4. Pas de src en alt-tekst aan

### YouTube video's toevoegen
1. Open `veiligheid.html`
2. Kopieer het voorbeeld video-blok:
```html
<div class="video-container">
    <h3>Video titel</h3>
    <iframe 
        src="https://www.youtube.com/embed/VIDEO-ID"
        title="Video beschrijving"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>
```
3. Vervang VIDEO-ID met het ID van je YouTube video
4. Pas de titel en beschrijving aan

## Styling aanpassen

### Kleuren wijzigen
1. Open `style.css`
2. Zoek de `:root` sectie bovenaan
3. Pas de kleurwaarden aan:
```css
:root {
    --primary-color: #2c5282;
    --secondary-color: #4299e1;
    --text-color: #2d3748;
    --background-color: #ffffff;
    --accent-color: #f6ad55;
}
```

### Layout aanpassen
1. Open `style.css`
2. Zoek de relevante CSS-regels
3. Pas de waardes aan
4. Test de wijzigingen op verschillende schermformaten

## Publiceren

De website is gebouwd voor GitHub Pages en kan direct worden gepubliceerd:

1. Push alle wijzigingen naar de GitHub repository
2. Ga naar repository instellingen
3. Scroll naar "GitHub Pages" sectie
4. Selecteer de branch die je wilt publiceren
5. De website is beschikbaar op `https://[gebruikersnaam].github.io/[repository-naam]`

## Toegankelijkheid

De website is gebouwd met toegankelijkheid in gedachten:
- Semantische HTML structuur
- ARIA labels waar nodig
- Toetsenbord navigatie
- Voldoende contrast
- Responsive design

## Browser ondersteuning

De website werkt in alle moderne browsers:
- Chrome (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Edge (laatste 2 versies)

## Technische vereisten

- Geen build-stappen nodig
- Geen frameworks gebruikt
- Pure HTML, CSS en JavaScript
- Geen server-side code
- Geen database nodig 