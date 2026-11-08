---
name: unslop
description: Maakt van een vibecoded interface die naar AI ruikt een ontworpen scherm met een eigen karakter. Haalt een richting uit het product zelf en verbetert daarna witruimte, kleur, iconen, tekst, typografie, layout, details, beeld en beweging, in die volgorde. Kan een echt hero-beeld laten genereren als er een beeldtool is. Nederlandse bewerking van unslop door NinA AI Agency, met extra regels voor Nederlandstalige interfaces. Gebruik wanneer iemand vraagt om een scherm te unslopen, op te poetsen, op te schonen of opnieuw te ontwerpen zodat het niet meer AI-gegenereerd oogt, of wanneer een interface de bekende signalen toont, zoals paars-blauwe verlopen, gloed, verlooptekst, emoji in labels, badges als "Nieuw ✨", glanzende blobs, hoofdletterlabels met brede spatiëring, pulserende elementen, ongelijke witruimte of opgeklopte teksten als "Ontdek de kracht van AI". Werkt in React, Tailwind, HTML en CSS, voor dashboards, apps en landingspagina's.
license: CC-BY-4.0
metadata:
  author: Damir Sokolovsky
  x: https://x.com/heydamir
  site: https://heydamir.design/unslop
  source: https://github.com/heydamir/unslop
  adaptation: NinA AI Agency, https://www.nina-ai.nl/toolkit/unslop
---

# Unslop (Nederlandse bewerking)

unslop is gemaakt door Damir Sokolovsky ([@heydamir](https://x.com/heydamir)), die op X de serie Unslopping begon. Origineel: https://github.com/heydamir/unslop. De skill valt onder CC BY 4.0, dus deze vermelding blijft staan in elke kopie of bewerking.

Deze versie is een Nederlandse bewerking door NinA AI Agency ([nina-ai.nl/toolkit/unslop](https://www.nina-ai.nl/toolkit/unslop)). Wat er anders is: de instructies zijn vertaald, en er zijn regels bijgekomen voor Nederlandstalige interfaces (tekst, getallen, datums, hoofdletters en woordlengte, zie [references/nederlands.md](references/nederlands.md)). De referentiebestanden in `references/` en de scripts zijn het Engelse origineel.

Vibecoded interfaces gaan op dezelfde voorspelbare manieren mis. Elk vlak gloeit, elk label heeft een emoji, de witruimte is wat het model die dag intikte en de tekst schreeuwt. Unslopping repareert het vakwerk en houdt het product heel. De functies, de inhoud en de volgorde van de secties blijven. Wat verandert: elke maat, kleur, elk woord en elk beeld wordt een bewuste keuze.

Slop weghalen is maar de helft. Een scherm dat schoon is maar bij elk product zou kunnen horen, is het volgende template. Elke run eindigt met een scherm dat alleen dit product kan hebben.

Het verschil tussen slop en vakwerk zit in waar de rijkdom heen gaat. Slop smeert kleur en effecten over het chrome: de achtergronden, knoppen, randen en labels. Vakwerk houdt het chrome rustig en stopt de rijkdom in één of twee momenten in de inhoud die mensen onthouden, zoals een gerenderd object, een mooie grafiek of een beeld uit de wereld van het product.

Werk zoals een ontwerper die een redline-ronde doet: één laag tegelijk, over het hele scherm.

## Zo ziet goed eruit

- **Eén helder element.** Elk scherm heeft één verzorgd ding dat de kleur en het vakwerk draagt: een gerenderd object, een geschilderde scène of een rijke grafiek. Alles eromheen is rustig, zodat het meteen leest.
- **Rustig chrome.** Navigatie, knoppen en tekst gebruiken de getinte neutrale kleuren en één accent. Niets gloeit, niets concurreert met het heldere element.
- **Een helder idee.** Je kunt in één zin zeggen wat het beeld laat zien en waarom het bij dit product hoort.
- **Tekst op rustige ruimte.** De kop staat op een deel van het beeld of de layout dat ervoor vrij is gelaten, kort en specifiek, met één primaire en één secundaire actie en niets eronder gestapeld.
- **Echt product, echt materiaal.** Previews lijken op de echte app met geloofwaardige data, en objecten lijken op echte dingen met gewicht, licht en schaduw.

Welke beeldstijlen meestal werken en welke falen, staat in [references/visuals.md](references/visuals.md). Afgewerkte voorbeelden om van te leren staan in [references/refs.md](references/refs.md), en code-technieken zoals een beeld tekenen in tekens staan in [references/effects.md](references/effects.md).

## Zo voer je het uit

1. **Bekijk het scherm.** Zoek de bestanden die het renderen. Kun je de app draaien of het bestand in een browser openen en een screenshot maken, doe dat, zodat je beoordeelt wat mensen zien en niet alleen de code.
   - Alleen een link naar een live site, geen code? Sla de pagina op met `node <skill-map>/scripts/snapshot.mjs <url> unslop/original.html` en werk op een kopie van dat bestand. Voeg `--dark` of `--light` toe om het thema te volgen dat de gebruiker ziet. Het script bewaart ook `original.live.png`, een screenshot van de live pagina: render de opgeslagen kopie en vergelijk die twee voordat je begint. Bewegende achtergronden die door scripts getekend worden, overleven dat niet: beschrijf ze in de audit vanaf de live pagina.
   - Alleen een screenshot? Bouw het scherm eerst na als één statisch HTML-bestand dat er zo dicht mogelijk bij zit, en behandel dat als het origineel.
   - In beide gevallen is het resultaat een herontworpen pagina in code die de gebruiker kan doorgeven aan wie de echte site beheert. Zeg dat in het verslag.
2. **Audit.** Loop [references/signs.md](references/signs.md) door, en bij Nederlandse tekst ook [references/nederlands.md](references/nederlands.md). Noteer elk signaal dat je vindt, één regel per signaal, met waar het staat.
3. **Bepaal hoeveel er moet veranderen.** Lees de audit eerlijk voordat je iets plant.
   - **Veel slop**, veel signalen in kleur, typografie, iconen en tekst. Doorloop het hele proces hieronder.
   - **Weinig slop**, een scherm dat grotendeels ontworpen is met nog een paar signalen. Poetsmodus. Repareer alleen wat de audit vond, haal de richting uit het bestaande merk in plaats van een nieuwe te verzinnen, en houd palet, typografie, layout en beeld. Grotere ideeën, zoals een moment dat ontbreekt of een scène voor de hero, komen als suggestie in het verslag, niet als wijziging.
   - **Geen slop.** Zeg dat gewoon en stel hooguit twee of drie kleine verfijningen voor, met exacte waarden. Voer ze alleen door als de gebruiker akkoord gaat, en stop daar. Verander nooit een goed scherm alleen om het anders te maken.
4. **Leg de richting vast en stop.** Schrijf de vijf regels die hieronder staan. Laat de audit en de richting aan de gebruiker zien en wacht op een antwoord voordat je iets aanpast, want de richting later veranderen betekent alles opnieuw doen. Heb je een hulpmiddel om de gebruiker vragen te stellen, gebruik dat, anders vraag je het in gewone tekst en stop je. Sla het wachten alleen over als de gebruiker al heeft gezegd dat je het gewoon moet doen.
5. **Repareer in negen rondes, op volgorde.** Maak een ronde af over het hele scherm voordat je aan de volgende begint. Verandert bijna elke regel, plan de rondes dan op volgorde en schrijf het nieuwe scherm in één keer, zolang elke ronde is toegepast. Witruimte komt eerst, omdat alles anders leest zodra het ritme klopt. Tekst komt vóór typografie en layout, omdat de lengte van de kop bepaalt hoe groot hij wordt en waar hij staat. Beeld en beweging komen als laatste, omdat ze moeten passen bij een scherm dat zonder hen al werkt.
6. **Controleer.** Loop de checklist onderaan dit bestand na, render opnieuw en vergelijk met de auditlijst. Wat nog op de lijst staat, repareer je.
7. **Verslag.** Beschrijf de richting, een paar regels per ronde over wat er veranderde, en elke beeldprompt die je schreef.
8. **Opnemen, als erom gevraagd wordt of als de gebruiker iets wil delen.** Bouw het storybestand en render de video uit [Storyvideo](#storyvideo). Vraagt de gebruiker er aan het begin om, schrijf dan elke ronde gaandeweg in het storybestand.

Houd een run kort. Render het scherm hooguit drie keer om te controleren. Genereer je een beeld, start dat dan direct nadat de richting is bevestigd en werk intussen door aan de eerste rondes, in plaats van te wachten.

Exacte waarden voor elke ronde staan in [references/tokens.md](references/tokens.md).

## Richting

Schrijf vijf korte regels voordat je iets aanraakt. Haal ze uit wat de pagina zegt over wat het product doet en voor wie. Nooit uit wat trendy is.

- **Product.** Wat het doet en voor wie, in één gewone zin.
- **Karakter.** Twee of drie concrete woorden, zoals `rustig, precies, een beetje warm` of `snel, technisch, speels`. Woorden als clean, modern, strak, minimalistisch en premium mogen niet, want die beschrijven elk template.
- **Wereld.** De plek of het materiaal waar het product van nature bij hoort. Een notitie-app hoort bij papier en inkt, een monitoringtool bij instrumenten en nachtdiensten, een reisapp bij kaarten en licht door een raam. Deze wereld bepaalt de tint van de neutrale kleuren, het accent en het beeld.
- **Momenten.** Eén of twee plekken waar het scherm rijke kleur, materiaal en detail krijgt, gekozen uit wat het product laat zien. Een gerenderde kaart of een apparaat in de preview, een grafiek waarin elke kleur een reeks betekent, een object uit de wereld naast de inhoud. Schrijf op wat ze zijn.
- **Kenmerk.** Eén klein detail dat alleen dit product zou hebben, consequent gebruikt. Een live statusstip voor een monitoringtool, toetsen voor een developertool, met de hand getekende onderstrepingen voor een lesapp, een routelijn voor een bezorgapp. Eén detail, geen vijf.

De voorbeelden hier laten alleen zien hoe een antwoord eruitziet. Leid het jouwe af uit het product dat voor je ligt, ook als een voorbeeld toevallig past.

Heeft het product al een echt merk, zoals een logobestand, een kleur of een lettertype dat geen slop is, houd het dan en bouw de richting eromheen. Een verloop van violet naar blauw, sterretjes en gloed zijn slop, ook als ze in het logo zitten, dus die tellen niet als merk tenzij de gebruiker zegt dat ze dat wel zijn.

## 1. Witruimte

- Alles staat op een raster van 4px. Marges, paddings, tussenruimtes en vaste hoogtes zijn veelvouden van 4, dus 28 of 104 mag, ook al staan ze niet in de tokenlijst. Een stap van 2px mag voor kleine correcties in kleine bedieningselementen, en een oneven waarde die iets exact centreert blijft staan.
- Hetzelfde ding, dezelfde maat. Alle rijen in een lijst delen één hoogte en één tussenruimte, alle kaarten in een rij delen één padding.
- Ruimte laat groepering zien. Ruimte binnen een groep is kleiner dan ruimte tussen groepen, zodat een lijst als één blok leest en secties als losse delen.
- Dingen staan op één lijn. Iconen in één kolom, labels beginnen op één lijn, getallen rechts uitgelijnd in één kolom. Niets wordt met een losse translate of rare marge van de lijn geduwd.
- Padding volgt de dichtheid. Compacte panelen en zijbalken rond 16, kaarten 20 tot 24, paginaranden 24 tot 32.
- Navigatie is het dichtste deel van een app. Rijen zijn 32 tot 36 hoog met 2 tot 4 ertussen, iconen in één kolom, labels op één lijn. Een sectielabel staat dichter bij zijn eigen items dan bij de sectie erboven, bijvoorbeeld 24 erboven en 8 eronder. Meet de zijbalk na deze ronde: daar breekt de witruimte het vaakst.
- Haal losse waarden weg die het ritme breken, zoals `mt-[13px]` of `py-[11px]`, en vervang ze door stappen uit de schaal.

## 2. Kleur

- Bouw vanuit één neutrale reeks, getint naar de wereld uit de richting. Kies grafiet, warm of inkt uit de tokens, of tint je eigen reeks op dezelfde manier. Achtergrond, verhoogde vlakken, randen en tekst komen allemaal uit die reeks.
- In apps en dashboards blijven achtergronden, vlakken, randen en tekst neutraal: de grafietreeks of iets wat net zo grijs is. Mensen kijken er uren naar en de inhoud moet de kleur dragen. Een scherm waarvan de achtergrond oranje, bruin, blauw of groen leest, is te ver gegaan. De wereld zie je in het accent, de grafieken en de momenten, niet in de vlakken. Landingspagina's mogen hun vlakken verder naar de wereld tinten.
- Drie tekstrollen: primair, secundair en gedempt. Niet tien bijna gelijke tinten lavendel.
- In het chrome één accent, spaarzaam gebruikt. Het markeert de primaire actie, de selectie of het ene getal dat ertoe doet.
- De momenten uit de richting zijn de uitzondering. Daarbinnen mag kleur rijk zijn: meerdere tinten in een grafiek, een gerenderd object met echte materialen, een beeld met eigen licht, zolang het binnen de wereld blijft en elke kleur iets betekent.
- Heeft het merk een echte kleur, dan wordt die het accent en verdwijnt hij van de vlakken. Is er geen echte merkkleur, haal het accent dan uit de wereld.
- Een accent met tekst erop haalt een contrast van 4,5 op 1. Lukt dat niet, maak het donkerder of zet er donkere tekst op. Een accent dat als tekst of inkt op een licht vlak staat, heeft hetzelfde contrast nodig, dus gebruik daar een donkerdere tint.
- Bij donkere thema's kan de primaire knop gebroken wit uit de reeks zijn met donkere tekst, en kan het accent op een kleinere plek leven, zoals de selectie of een kerngetal. Dat oogt vaak bewuster dan een gekleurde knop.
- Signaalkleuren dragen alleen betekenis, zoals groen voor een goede verandering en rood voor een fout, en ze zijn getemperd zodat ze in het palet passen.
- Haal kleurverlopen op vlakken weg, net als verlooptekst, gekleurde gloed en gekleurde schaduwen, radiale kleurwolken en blobs achter de inhoud, en neonranden.
- Randen zijn rustige haarlijnen: de tekstkleur van de reeks op 6 tot 10% dekking.
- Bij donkere thema's komt diepte uit stappen in de vlakken en haarlijnen, niet uit schaduwen. Een venster of object dat boven een beeld zweeft, mag een zachte neutrale schaduw houden. Bij lichte thema's zijn schaduwen neutraal, zacht en klein.
- Een verloop mag alleen als kleine toonverschuiving binnen één neutrale kleur, zoals een actieve rij die van #2b2b2b naar #1f1f1f loopt. Nooit van de ene tint naar de andere.

## 3. Iconen

- Elke emoji die als icoon of als versiering in een label staat, wordt een lijnicoon uit één set. Gebruik de set die het project al heeft, anders lucide.
- Overal één maat en één lijndikte: 16 of 18px met een lijn van 1,5.
- Iconen krijgen de kleur van hun tekstrol, meestal secundair of gedempt. Ze krijgen nooit een eigen kleur.
- Het iconvak heeft in elke rij dezelfde breedte en de afstand tot het label staat vast, 8 of 10, zodat labels op één lijn staan.
- Laat iconen weg die niets toevoegen, zoals een emoji in elke kaarttitel of voor elk sectielabel. Categorieën die kleur nodig hebben, krijgen een kleine statusstip.

## 4. Tekst

- Koppen zeggen wat het product doet voor wie, in gewone woorden, zodat ze bij geen ander product passen. Gebruik de feiten die al op de pagina staan en verzin geen nieuwe.
- Geen uitroeptekens in interfacetekst, en nooit `!!`.
- Geen begroetingskoppen zoals `Welkom terug, Olaf! 👋`. De titel noemt de context, zoals de paginanaam of de periode, bijvoorbeeld `Oktober 2026`.
- Korte labels. `Zoeken`, niet `Zoek naar alles...`.
- Een verandering zegt waarmee ze vergeleken wordt, zoals `+12% t.o.v. vorige maand` of `3 minder dan vorige maand`.
- Koppen, subkoppen, labels, knoppen en bijschriften eindigen zonder punt. Alleen alinea's van meerdere zinnen houden hun punten.
- Geen hypewoorden zoals ontdek, ontgrendel, naadloos, krachtig, revolutionair, boost, next level, magisch of game-changer, en niet overal `AI-gestuurd`. In het Engels: supercharge, seamless, unlock, magic, revolutionize, game-changing en `AI-powered`.
- Claims die niet te controleren zijn, zoals `Geliefd bij 10.000+ teams` of `10x sneller`, worden rustig en specifiek als de gebruiker bevestigt dat ze kloppen, en verdwijnen anders. Vraag het, en zet ze in het verslag.
- Voorbeelddata ziet er echt uit, met geloofwaardige getallen en namen, nooit `[X]` of `123.456`.
- Badges als `PRO`, `Nieuw ✨` of `Beta 🚀` verdwijnen, tenzij het product ze echt nodig heeft, en dan zijn het rustige woorden.
- Is de interface Nederlands, volg dan ook [references/nederlands.md](references/nederlands.md): je of u en dat consequent, Nederlandse getal- en datumnotatie (`€ 48.210`, `12,5%`, `3 november 2026`), alleen een hoofdletter aan het begin, geen gedachtestreepjes, geen Engelse labels als er een gewoon Nederlands woord is, en ruimte voor lange samenstellingen.

## 5. Typografie

- Kies letters die passen bij het karakter uit de richting, uit de families in de tokens. Houd het lettertype van het project als het bij een echt merk hoort. Een standaard als Inter die niemand koos, mag weg als een andere familie beter bij het karakter past. Eén familie voor de interface, plus hooguit één partner uit een willekeurige rij van de tokens: een mono voor cijfers en metadata, of een displayletter voor grote koppen.
- Een paar maten uit een schaal en twee gewichten, 400 en 500, met hooguit 600 voor zeldzame nadruk. Geen koppen in 700 tot 900, geen verlooptekst.
- Hiërarchie komt uit maat en kleur, niet uit gewicht.
- Overal alleen een hoofdletter aan het begin. Labels als `NAVIGATIE` of `BETAALD DEZE MAAND` met brede spatiëring worden `Navigatie` en `Betaald deze maand`.
- Kleine tekst krijgt nooit negatieve letterspatiëring. Leesbaarheid van kleine tekst betekent groter, iets zwaarder of iets ruimer. Krappe spatiëring is alleen voor grote displaytekst.
- Getallen gebruiken `tabular-nums` en één notatie op het hele scherm. Is één bedrag `€ 48.210`, dan is het volgende niet `€124.860,40`.
- Geen cursief voor nadruk.

## 6. Layout

- Houd de secties en hun volgorde. Binnen een sectie mogen uitlijning en verhoudingen veranderen als het scherm daar duidelijker van wordt.
- Apps en dashboards houden echte app-verhoudingen. De schil vult het venster, een zijbalk van 240 tot 280 en vloeiende inhoud, meestal begrensd rond 1440 tot 1600 breed, en de pagina is zo lang als de inhoud, met meer secties onder het eerste scherm. Krimp een app nooit tot een smalle gecentreerde kolom. Was het origineel getekend als een klein venster op een achtergrond, houd het dan zichtbaar een venster, met kader en achtergrond, en geef het binnenin toch desktopverhoudingen.
- De sterkste hero op een landingspagina is een scène. Eén gegenereerd beeld vult de hero van rand tot rand, het onderwerp staat aan één kant, en de kop staat op het rustige lege deel van datzelfde beeld, met de productweergave die van onderaf opkomt. Bekijk de hero in de referenties om te zien hoe dat werkt.
- Zonder scène gebruik je een asymmetrische verdeling: tekst aan één kant en het beeld minstens de helft van de breedte, of tekst boven een grote productweergave. Alles gestapeld en gecentreerd is de standaard van het template; houd dat alleen voor een korte hero zonder beeld.
- In een scènehero staat het tekstblok in het bovenste deel, in de ruimte tussen de navigatie en de bovenkant van de productweergave, op het optische midden, iets boven het echte midden.
- In een gesplitste hero centreer je het tekstblok verticaal tegenover het beeld, zodat geen van beide kanten een grote lege hoek laat. Is het beeld veel hoger, maak het dan korter in plaats van de tekst omlaag te duwen. Zwevende kaarten en apparaten naast de tekst zijn lastig in balans te krijgen: kies liever één stevig beeld. De afstand van de navigatie tot de kop uit de tokens geldt voor gestapelde hero's; een gesplitste hero wordt gecentreerd.
- Lange koppen lijn je links uit. Gecentreerde tekst werkt voor één of twee korte regels.
- Eén primaire actie en hooguit één secundaire ernaast. Al het andere gaat uit de hero.
- Navigatie blijft rustig: logo, de bestaande links, één knop. Inloggen is een rustige tekstlink ernaast, geen tweede knop. Een zwevende pilheader is niet nodig. Op kleine schermen klappen de links in tot één menuknop.
- Stel het eerste scherm als geheel samen. De hero vult de hoogte van het venster zonder dode lege strook. Is de inhoud korter, centreer hem dan of laat de productweergave laag beginnen en voorbij de onderrand doorlopen, zodat de pagina uitnodigt om te scrollen.
- Op kleine schermen stapelt alles in leesvolgorde, de kop zakt naar de mobiele maat uit de tokens en het beeld komt na de acties. Een drukke preview wordt op mobiel eenvoudiger, met minder rijen en kolommen, in plaats van verkleind. Geen tekst erin gaat onder 11px.

## 7. Details

- Geneste radius. Een binnenradius is de buitenradius min de padding ertussen, nooit minder dan 4. Bedieningselementen 8 tot 10, kaarten 12 tot 16, panelen 14 tot 20. Niet alles is een pil.
- Aantallen en metadata worden rustige tekst, vaak mono en gedempt, in plaats van gloeiende pillen.
- Sneltoetsen worden kleine toetsjes.
- Grafieken staan op een gedempt raster met gedempte mono-labels. Geen regenboogstaven binnen één reeks, geen gloeiende staven, geen dagnamen in hoofdletters. Is de grafiek nepruis, vervang hem dan door data die iets echts vertelt.
- Grafieken hebben een hiërarchie, net als tekst. Eén hoofdgrafiek is duidelijk het grootste ding op het scherm, met zorg getekend, zoals vloeiende lijnen of een gespiegelde vergelijking. Al het andere dat data laat zien, is kleiner en van een ander soort, zoals een gerangschikte lijst met dunne balken of een korte tabel, nooit een tweede grafiek van dezelfde maat.
- Eén accent per grafiek. Wat ertoe doet, zoals de huidige maand, de lijn die je volgt of het pakket dat groeide, krijgt het accent, en de rest staat in neutrale stappen uit de reeks. Meerdere tinten alleen als de grafiek echt reeksen uit elkaar moet houden, en ook dan leidt er één en zijn de rest rustig.
- Statkaarten zijn getallen. Een label, een groot getal en een verandering met waarmee vergeleken wordt. Geen sparklines, turven, mini-staafjes of iconen om ze te vullen: dat leest als versiering. Een kaart mag een echt ogend object bevatten als dat precies is wat het getal telt, zoals een betaald bonnetje naast betaalde omzet of bankpassen naast uitgaven. Gebruik er zoveel als zinvol is voor dat dashboard, zolang elke kaart op zichzelf leest en geen ervan een mini-grafiek is.
- Varieer de maten. Kaarten van gelijke breedte naast elkaar, elk met hetzelfde soort inhoud, lezen als een template. Geef het raster een ritme, zoals drie of vier compacte stats in een rij boven één brede grafiek, of een brede grafiek naast een smalle lijst.
- Kies het grafiektype bij de data. Een trend is een lijn, een vergelijking is staven, een aandeel is één gestapelde staaf of een lijst met balken, één doel is een voortgangsbalk.
- De actieve staat is een kleine stap in het vlak met een haarlijnaccent, geen verloop met gloed.
- Hover- en focusstaten bestaan en blijven binnen het palet. Een zichtbare focusring voor toetsenbordgebruikers.
- Het logo is de productnaam in de hoofdfamilie, plus een eenvoudig beeldmerk als dat er is. Geen woordmerk met verloop en geen tegel met sterretje.
- Het kenmerk uit de richting verschijnt waar het hoort en nergens anders.

## 8. Beeld

- Decoratieve vulling verdwijnt. Glanzende blobs, bollen, nevels, zwevende kubussen, gloeiende rasters, holografische breinen en robots zeggen niets over het product.
- Een hero op een landingspagina krijgt een beeld dat iets waars laat zien.
- Dashboards en appschermen hebben bijna nooit gegenereerde beelden nodig. Hun momenten komen uit het product zelf: een met zorg getekende grafiek, mooi gezette cijfers, echte inhoud zoals productfoto's of avatars, een status die levend voelt. Een fysiek ding waar het product mee werkt, zoals een betaalpas in een finance-app, bouw je meestal beter in code met echte materialen: een zacht verloop, een chip, een nummer.
- Genereer beelden voor een app alleen voor lege staten, onboarding en marketingmomenten, of als de gebruiker erom vraagt.
- Met een beeldgenerator is de eerste keus voor een landingshero een scène uit de wereld van de richting, breed genoeg gegenereerd om achter de hele hero te staan, met rustige lege ruimte waar de tekst komt. Die draagt de kleur en de sfeer, en het chrome blijft er rustig overheen.
- Onder de scène, of als beeld wanneer er geen tool is, laat je het product zien. Bouw in code een preview van wat de pagina al belooft, met de componenten van het project of zorgvuldige HTML en geloofwaardige data, zoals het hoofdscherm, één belangrijke kaart of het resultaat dat het product oplevert. Laten zien wat de tekst al belooft, is geen functie verzinnen. In een scènehero komt het van onder de rand omhoog en loopt het erlangs door.
- De productweergave draagt een moment, niet alleen een kale kaart. Een gerenderd object erin, zoals een betaalpas bij een getal, een rijke grafiek of een klein object uit de wereld. Dit zijn soorten objecten, dus er een gebruiken die past, mag.
- Bekijk vóór deze ronde de referenties in [references/refs.md](references/refs.md). Neem er kwaliteiten van over, zoals compositie, licht, terughoudendheid en hoe het moment geplaatst is, nooit hun onderwerp of layout.
- Gerenderde objecten en scènes komen uit een beeldgenerator als je die hebt. Heb je er geen, bouw dan wat kan in code, schrijf de prompts voor de rest en laat lege vakken van de juiste maat.
- Hoe je het onderwerp kiest, het promptrecept en hoe je het beeld plaatst, staat in [references/visuals.md](references/visuals.md). Lees dat vóór deze ronde. Vraag altijd toestemming en laat de prompt zien voor elke betaalde generatie.

## 9. Beweging

- Haal beweging weg die zonder reden blijft lopen, zoals `animate-pulse` of `animate-ping` op dingen die niet live zijn, glans over koppen, ademende gloed, zwevende elementen en parallax.
- Haal `transition-all` weg, verende animaties, `hover:scale` op kaarten en alles wat bij hover meer dan een paar pixels beweegt.
- Houd beweging die iets uitlegt. Een hover is een snelle wissel van kleur of vlak, indrukken is een heel kleine verkleining, een menu vervaagt in en komt een paar pixels omhoog vanaf waar het opent, een veranderd getal telt mee.
- Animeer kleur, achtergrond, rand, dekking en transform, en benoem ze, zoals `transition-colors` of `transition-[transform,opacity]` in Tailwind, in plaats van alles tegelijk. Animeer nooit breedte, hoogte, top, left, marges of grote blur: dat hapert op zwakke apparaten.
- Eén easing-curve en een paar duren op het hele scherm, uit de tokens. Kort voor feedback, iets langer voor dingen die binnenkomen.
- Hooguit één entree bij het laden, een korte fade en kleine beweging omhoog voor de hoofdinhoud met een kleine vertraging per element. Niet elke kaart die van een andere kant binnenvliegt.
- Respecteer `prefers-reduced-motion`: dan staat alles direct op zijn plek.

## Storyvideo

Een korte video waarin het scherm zichzelf stap voor stap unslopt, met rode redlines op de slop. Bekijk [refs/story-dashboard-frames.webp](references/refs/story-dashboard-frames.webp) voordat je hem bouwt: acht frames uit zo'n video, op volgorde. Die video ging viral, en zo werkt hij:

- **Niets wordt verwisseld, alles vervormt.** Eén pagina, en elke stap verandert alleen CSS, zodat padding, tussenruimtes, maten, kleuren, radii en schaduwen ter plekke van de oude naar de nieuwe waarde bewegen. Je ziet de witruimte opengaan, het paars wegtrekken, de hoeken zachter worden.
- **Een golf.** Elementen starten een paar tientallen milliseconden na elkaar, van linksboven naar beneden, zodat een verandering over het scherm loopt in plaats van alles tegelijk om te klappen.
- **Tekst rolt.** Tekst die verandert, vervaagt, en de nieuwe woorden komen letter voor letter omhoog.
- **Eerst redlines.** De slop krijgt rode selectiekaders met labels, een witruimtestap toont rode maten die wit worden zodra ze kloppen, een detailstap omlijnt hoeken met hun radius.
- **Dichtbij en kort.** Vierkant, dicht ingezoomd op het deel dat het meest verandert, zodat het op een telefoon leest, en ongeveer 10 seconden.

Het kost een paar minuten extra, dus maak hem alleen als de gebruiker dat wil.

1. **Eén storybestand.** Bouw `unslop-story/story.html`, een losse kopie van het originele scherm met de stijlen in het bestand. Laat de originele regels staan zoals ze zijn: dat is stap 0.
2. **Stappen.** Drie tot vijf, waarbij je rondes samenvoegt zodat elke stap iets zichtbaars verandert, zoals `Spacing`, `Color and icons`, `Type and copy`, `Details`. Een nieuwe grafiek of een nieuw beeld komt in de laatste stap. Zet ze in de head als `<meta name="unslop-steps" content="Spacing, Color and icons, Type and copy, Details">`. Een naam met Spacing toont witruimtematen, een naam met Details toont hoekomlijningen. Houd deze Engelse stapnamen aan: het script herkent ze.
3. **Elke stap is CSS erbovenop.** Schrijf de wijzigingen van stap 1 onder `.s1`, van stap 2 onder `.s2` enzovoort, zoals `.s1 .card { padding: 24px }` of `.s2 body { background-color: #141415 }`. De klassen stapelen, dus stap 3 heeft nog steeds de regels van stap 1 en 2. Verander waarden, nooit structuur, zodat de browser ertussen kan bewegen.
4. **Wat niet kan bewegen, en hoe je dat oplost.**
   - Verlopen, gloed en kleurwolken: zet ze op een eigen laag en laat de `opacity` naar 0 gaan, terwijl de effen kleur eronder verandert. Verlooptekst staat alleen op de `.from`-span, nooit op de swap of de ouder ervan, want een tekstclip pakt ook de verborgen nieuwe tekst.
   - Pillen: schrijf hun radius als de halve hoogte, zoals `23px`, niet `9999px`, anders verandert de hoek pas in het laatste frame.
   - Gebruik swaps spaarzaam, alleen waar de woorden veranderen, hooguit acht per story. Twintig swaps die tegelijk vervagen lezen als een harde overgang tussen twee plaatjes, en dat is precies wat de video niet mag zijn. Veranderingen in gewicht, maat, spatiëring en kleur bewegen vanzelf, dus die hebben nooit een swap nodig. Een nieuwe letterfamilie wisselt direct in zijn stap, zonder swaps.
   - Tekst die verandert, een nieuwe letterfamilie, een emoji die een icoon wordt: `<span class="swap" data-at="3"><span class="from">Welkom terug, Olaf! 👋</span><span class="to">Oktober 2026</span></span>`. Bij stap 3 vervaagt het oude deel en rolt het nieuwe binnen.
   - Emoji die iconen worden: zet het nieuwe icoon naast de emoji in hetzelfde vak, allebei absoluut gestapeld, en laat hun `opacity` in de stap in elkaar overvloeien. Dat is geen swap en telt niet mee voor de limiet.
   - Dingen die verdwijnen, zoals een badge `Nieuw ✨`: `data-out="2"` klapt ze in bij stap 2.
   - Dingen die verschijnen, zoals een legenda: `data-in="4"` laat ze invagen bij stap 4. Reserveer hun ruimte zodat niets verspringt.
5. **Redlines.** De maten volgen de elementen live, dus hun getallen tellen van de oude naar de nieuwe waarde terwijl alles beweegt. Dat is het moment waar mensen naar kijken, dus kies ze goed.
   - `data-gap` zet je op de blokken van een verticale stapel, zoals de merkrij, het zoekveld, de navigatiegroep en de pakkettengroep in een zijbalk, of de kop, de statrij en de grafiek in de hoofdkolom. Niet op elke rij, anders loopt het scherm vol met piepkleine labels van 2px. Mik op vier tot zes gemeten tussenruimtes per stapel, en geef elke stapel een eigen naam als er meer dan één is, zoals `data-gap="sidebar"` en `data-gap="main"`.
   - `data-radius` zet je op twee tot vier knoppen en kaarten waarvan de hoeken veranderen.
   - `data-slop="Verlooptekst"` en dergelijke markeert de slop in een korte eerste tel, hooguit vijf, op de duidelijkste voorbeelden die uit elkaar liggen, met korte labels. Dit is optioneel: de referentievideo heeft ze niet.
6. **Alleen het scherm en zijn achtergrond.** De video toont de storypagina zoals hij is, zonder extra venster, rand of schaduw eromheen, zodat de eigen achtergrond van de pagina het beeld vult en het scherm het enige kader is. Staat het scherm in een venster dat groeit naar desktopverhoudingen, veranker het dan links in de story zodat het naar rechts breder wordt in plaats van zijwaarts te glijden. De storypagina rendert op 1440 breed en minstens 900 hoog, dus maak niets op maat met `100vh`, en houd `position: fixed` alleen voor achtergrondlagen.
7. **Camera.** `<meta name="unslop-frame" content="0 0 960">` bepaalt welk deel van de pagina het beeld vult, als x, y en breedte in paginapixels. Richt x en y op de linkerbovenhoek van het scherm zelf, zodat het frame begint met de paginaachtergrond eromheen, en zoom dicht in op waar de meest zichtbare verandering gebeurt, meestal de zijbalk of de kop en de eerste kaarten.
8. **Renderen.** `node <skill-map>/scripts/story.mjs unslop-story/story.html unslop-story.mp4`, standaard vierkant, `--wide` voor 16:9. Daarvoor zijn Playwright en ffmpeg nodig; ontbreekt er een, geef de gebruiker dan het ene commando waarmee hij het installeert. Wil je hem eerst live zien, draai hem dan met `--play` in plaats van een uitvoerpad, dan loopt hij in een browservenster tot je het sluit. Haal er met ffmpeg een paar frames uit en bekijk ze voordat je hem oplevert. Het storybestand en de video controleren telt niet mee voor de renderlimiet van een run.
9. **Het storybestand is een presentatiestuk.** Het schone resultaat gaat gewoon als code mee in de eigen stack van het project, zonder `.s`-klassen of story-attributen. Elke video draagt een kleine vermelding `unslop by @heydamir`, zoals de licentie vraagt.

## Niet doen

- Verander de productnaam niet, ook niet als er AI in staat. Houd een echt logo zoals het is. Is het logo zelf slop, zoals een emoji of een sterretje in een tegel met verloop, teken het dan plat opnieuw: alleen het woordmerk in de nieuwe letter, of een eenvoudig teken uit het idee van het product in één effen kleur. Nooit een glanzende bol, een bal met verloop, gloed of een tegel met verloop: die lezen op het eerste gezicht als AI.
- Verander niet wat het product is. Houd de functies, de inhoud en de volgorde van de secties, tenzij de gebruiker om meer vraagt. Opvulinhoud die niets betekent, mag vervangen worden door inhoud die dat wel doet.
- Vervang weggehaalde versiering niet door nieuwe versiering, en ruil niet de ene trend in voor de andere, zoals glas, korrel, ruis, neon of bento-rasters.
- Verzin geen functies, claims of data.
- Val niet terug op dezelfde look voor elk product. De richting bepaalt de tint van het palet, de letter en het beeld, niet de gewoonte.

## Checklist

- [ ] De richting staat op papier en elke ronde volgt haar
- [ ] Elke witruimte staat op de schaal van 4px en gelijke dingen hebben gelijke maten
- [ ] Iconen, labels en getallen staan elk in één uitgelijnde kolom
- [ ] Eén getinte neutrale reeks, drie tekstrollen, één accent met genoeg contrast
- [ ] Geen kleurverlopen, verlooptekst, gloed, gekleurde schaduwen of kleurblobs
- [ ] Geen emoji meer in de interface
- [ ] Eén iconenset in één maat en lijndikte
- [ ] Letter gekozen bij het karakter, gewichten 400 tot 600, geen hoofdletterlabels met brede spatiëring, geen cursief, geen negatieve spatiëring op kleine tekst
- [ ] Geen uitroeptekens, geen punt achter korte teksten, geen begroetingskop, geen ongecontroleerde claims
- [ ] Getallen in één notatie met tabelcijfers; bij Nederlandse tekst `€ 48.210`, `12,5%` en `3 november 2026`
- [ ] Bij Nederlandse tekst: je of u consequent, geen gedachtestreepjes, geen onnodig Engels, lange woorden passen op mobiel
- [ ] Geneste radii kloppen
- [ ] Een hero heeft een echt beeld of een productpreview met minstens één moment, nooit vulling en nooit een vak met "placeholder"
- [ ] Het eerste scherm is als geheel samengesteld, zonder dode lege strook
- [ ] Geen herhalende of verende beweging, één easing-curve, geen geanimeerde layout-eigenschappen
- [ ] Templatetoets. Als je de productnaam verwisselt met die van een ander product, past het scherm dan nog steeds? Zo ja, duw de richting harder door in de tekst, het beeld en het kenmerk
