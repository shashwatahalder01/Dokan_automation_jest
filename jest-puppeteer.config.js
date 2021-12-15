module.exports = {
    launch: {
        headless: false, // Enable UI mode
        // slowMo: 250, // slow down by 250ms
        // headless: process.env.HEADLESS !== 'false',
        // slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
        // devtools: true  // Enable devtools
        product: chrome,  // Launch chrom browser
        // product: firefox, // Launch firefox browser
        // ignoreHTTPSErrors: true, // Ignore HTTPS errors during navigation
        // executablePath: "", // Path to a browser executable 
        defaultViewport: '800x600', // ets a consistent viewport for each page. Defaults to an 800x600 viewport.
        width: '900', // page width in pixels.
        height: '900', // page height in pixels.
        timeout: 60000, //Maximum time in milliseconds to wait for the browser instance to start. Defaults to 30000 (30 seconds). Pass 0 to disable timeout.

        , //
        , //
        , //
    }
}