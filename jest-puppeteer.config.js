module.exports = {
    launch: {
        headless: false, // Enable UI mode
        // slowMo: 250, // slow down by 250ms


        // headless: process.env.HEADLESS !== 'false',
        // slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
        // devtools: true  // Enable devtools

        // PUPPETEER_PRODUCT=firefox npm install
        product: 'chrome',

        // product: 'chrome',  // Launch chrome browser
        // product: 'firefox', // Launch firefox browser
        // ignoreHTTPSErrors: true, // Ignore HTTPS errors during navigation
        // executablePath: "/Applications/Google Chrome", // Path to a browser executable 

        // args: ['--window-size=1920,1080'], // Browser windowsize
        args: ['--start-maximized'], // Browser windowsize
        // args: ['--start-fullscreen'], // Browser windowsize
        // args: ['--start-maximized'], // Browser windowsize
        
        defaultViewport: null, //  Ignore default viewport size
        // defaultViewport: {width:1920,height:1080}, // viewport for each page. Defaults to an 800x600 viewport.
        // defaultViewport: '1120x1680', //  viewport for each page. Defaults to an 800x600 viewport.  ??
        // width: '100', // page width in pixels.    ??
        // height: '100', // page height in pixels.  ??
        // timeout: 60000, // timeout in ms //Maximum time in milliseconds to wait for the browser instance to start. Defaults to 30000 (30 seconds). Pass 0 to disable timeout.

        // , //
        // , //
        // , //


        
    }
}