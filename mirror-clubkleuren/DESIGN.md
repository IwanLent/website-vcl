# Vélo Club Lent: mirror in clubkleuren

Deze map is een zelfstandige mirror. De bronpagina's en de productieconfiguratie in de bovenliggende map zijn niet aangepast. Alle acht hoofdpagina's, de aanmeldfallback, foto's, sponsorlogo's, kaarten en GPX-bestanden zijn meegenomen. De productie-URL's blijven canoniek; de mirror gebruikt `noindex`.

## Goedgekeurde richting

- Product: samen wielrennen vanuit Lent, met duidelijke informatie voor nieuwe fietsers.
- Karakter: sportief, gemoedelijk, lokaal.
- Wereld: Waal, dijken en clubkleding; petrol, bordeaux, wit en bijna zwart.
- Momenten: de echte clubfoto en de bestaande routekaarten.
- Kenmerk: een dunne horizontale lijn, ontleend aan de strepen op het shirt.

## Negen rondes

1. Witruimte: één schaal van 4 pixels, gedeelde paginaranden en vaste tussenruimtes.
2. Kleur: petrol `#126e64`, donker petrol `#104f49`, bordeaux `#881044`, gebroken wit `#f7f8f5`, inkt `#172b28`. Visueel benaderd vanaf de kledingreferentie; geen gecertificeerde Pantone-conversie.
3. Iconen: emoji's vervangen door eenvoudige lijniconen van 18 pixels met lijnbreedte 1,5; overbodige route-icoontjes verwijderd.
4. Tekst: concrete koppen over fietsen vanuit Lent, rustige Nederlandse labels en consequente tijdnotatie. Bestaande afspraken en ritgegevens blijven behouden.
5. Typografie: de bestaande systeemletter behouden, koppen met gewicht 500 en nadruk tot 600, leesbare corpsen en tabelcijfers voor routegegevens.
6. Layout: de sectievolgorde behouden; gesplitste hero, rustiger clubintroductie en één kolom op mobiel.
7. Details: zichtbare focusringen, skiplink, uniform knopformaat, rustige randen en werkende Escape-bediening in het menu.
8. Beeld: eigen clubfoto's en originele sponsorlogo's behouden. Geen gegenereerde beelden of beeldprompts. De beschikbare foto's zijn klein; hogere resoluties kunnen later zonder layoutwijziging worden geplaatst.
9. Beweging: zweven en zoomen verwijderd; alleen korte kleurwisselingen en de menuknop behouden, met respect voor `prefers-reduced-motion`.

## Lokaal bekijken

Voer vanuit deze map `python -m http.server 8000` uit en open `http://localhost:8000/`. De kaarten hebben een HTTP-server en internet nodig voor Leaflet en OpenStreetMap. De oorspronkelijke externe diensten en hun afhankelijkheden zijn behouden. `aanmelden/index.html` werkt als statische fallback; op Vercel verzorgt `vercel.json` de HTTP-302.

## Gepubliceerde preview

- URL: https://website-p8he1o414-ijcvandermeer-lelystadnls-projects.vercel.app/
- Vercel-project: `website-vcl`; aparte previewdeployment `dpl_5XPTN8TcFRSuy7KrMi6VoFbj5oQX`, status `READY`.
- Toegang: de bestaande Vercel-login blijft vereist. Er is geen deellink aangemaakt.
- De productiedomeinen zijn niet gewijzigd. `www.veloclublent.nl` blijft gekoppeld aan productieversie `dpl_51uDSUhUDALX5AZMeG6tQNt1RxZK`.
- De preview bevat alle 40 benodigde bestanden. Hun checksums zijn via de Vercel-account-API vergeleken met de lokale bron. Ongebruikte oude logo's en afbeeldingen staan wel in de lokale mirror, maar zijn niet meegestuurd naar de preview.

## Uitgevoerde controles

- Negen HTML-pagina's: bestaande linkbestemmingen behouden, lokale verwijzingen en ankers geldig, unieke element-id's, Nederlandse taal en `noindex`.
- Elf originele GPX-bestanden: geldig XML, inhoud gelijk aan de oorspronkelijke bestanden, kaart-id's en verwijzingen behouden.
- Contrast: petrol op wit 6,10:1; wit op bordeaux 9,53:1; gewone tekst 6,27:1; gedempte tekst op de paginaachtergrond 4,55:1.
- JavaScript: syntaxiscontrole; gedragstests van het mobiele menu en de fotoviewer, inclusief Escape, focus, pijltjestoetsen, wisselen tussen foto's en swipen. Deze gedragstests gebruiken DOM-stubs en vervangen geen visuele browsertest.
- Alle bronbestanden van de oorspronkelijke website zijn met hun checksums van vóór de bewerking vergeleken en zijn ongewijzigd.
- Visuele desktop- en mobiele browsertests zijn niet uitgevoerd: de browsertoegang was niet beschikbaar. Het rechtstreeks ophalen van de beschermde preview werd door de automatische goedkeuringscontrole geweigerd, omdat dat hulpmiddel een tijdelijke deellink zou aanmaken. De bestandscontrole gebeurde vervolgens via de bestaande Vercel-accounttoegang, zonder de toegangsbeveiliging te wijzigen.

## Bronvermelding

Ontwerpworkflow gebaseerd op **unslop**, Damir Sokolovsky ([@heydamir](https://x.com/heydamir)), [origineel](https://github.com/heydamir/unslop), CC BY 4.0. Nederlandse bewerking: [NinA AI Agency](https://www.nina-ai.nl/toolkit/unslop). De clubinhoud en fotografie zijn afkomstig uit de bestaande Vélo Club Lent-website.
