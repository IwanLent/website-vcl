const fs = require('fs');
const https = require('https');
const path = require('path');

// Routes met hun Komoot IDs
const routes = {
    // Donderdagse routes
    'VCLWaalRijnPad45.gpx': '3355919',
    'VCLItaliaanseweg55.gpx': '3355920',
    'VCLKleverberg50.gpx': '3355921',
    'VCLPosbank65.gpx': '3355922',
    'VCLBetuwe60.gpx': '3355923',
    'VCLMaasWaal55.gpx': '3355924',
    
    // Zondagse routes
    'VCLVeluwezoom105.gpx': '3355381',
    'VCLKootwijk103.gpx': '3355383',
    'VCLStuwwallen139.gpx': '3355384',
    'VCLVenray121.gpx': '3355385'
};

// Maak routes directory als deze niet bestaat
const routesDir = path.join(__dirname, '..', 'routes');
if (!fs.existsSync(routesDir)) {
    fs.mkdirSync(routesDir);
}

// Download functie
function downloadGPX(filename, routeId) {
    const url = `https://www.komoot.com/api/v1/routes/${routeId}/gpx`;
    const filepath = path.join(routesDir, filename);

    https.get(url, (response) => {
        if (response.statusCode === 200) {
            const fileStream = fs.createWriteStream(filepath);
            response.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded: ${filename}`);
            });
        } else {
            console.error(`Error downloading ${filename}: ${response.statusCode}`);
        }
    }).on('error', (err) => {
        console.error(`Error downloading ${filename}:`, err);
    });
}

// Download alle routes
Object.entries(routes).forEach(([filename, routeId]) => {
    downloadGPX(filename, routeId);
}); 