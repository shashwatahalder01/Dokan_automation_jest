#  Dokan_automation_Jest-Puppeteet(e2e)


















# # Jest-Puppeteer Setup

## # Project setup

<br>

### # Initialize npm

    npm init -y
### Initialize Jest (optional)
    jest --init

### # Install jest and puppeteer

    npm install --save-dev jest puppeteer jest-puppeteer

### # We will need to additionally install jest-cli globally in order to be able to run only single test separately from others.
    npm install -g jest-cli

### # Create jest.config.js
    module.exports = {
    // we specify jest-puppeteer preset, which will allow us to use Jest with Puppeteer
    preset: "jest-puppeteer",
    // In globals we declare variables, which will be available in our whole test suite
    globals: {
    URL: "http://localhost:8080"
    },
    // In testMatch we are only saying in which folder and for which files Jest should be looking for.
    testMatch: [
    "**/<path-to-the-tests-folder>/**.test.js"
    ],
    verbose: true
    };

### # Create jest-puppeteer.config.js

        module.exports = {
        launch: {
            headless: false, // Enable UI mode
            // slowMo: 250, // slow down by 250ms


            // headless: process.env.HEADLESS !== 'false',
            // slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
            // devtools: true  // Enable devtools

            // PUPPETEER_PRODUCT=firefox npm install
            // product: 'chrome',  // Launch chrome browser
            // product: 'firefox', // Launch firefox browser
            // ignoreHTTPSErrors: true, // Ignore HTTPS errors during navigation
            // executablePath: "/Applications/Google Chrome", // Path to a browser executable 

            // args: ['--window-size=1920,1080'], // Browser windowsize
            args: ['--start-maximized'], // Browser windowsize
            // args: ['--start-fullscreen'], // Browser windowsize
            
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

### # Add the following section to your package.json:

    {
    "scripts": {
        "test": "jest" // shows only summary report
        "test": "jest --verbose" // for showing details of every tests   or verbose: true,  in jest.config.json
        "test": "jest   && allure serve"  // run test with allure report
        "test": "jest -w 1  "  // run tests sequentially
        "test": "jest -w 1  && allure serve"  // run tests sequentially and with allure report
    }
    }

## # Run Test Commands
#### Run all tests
    npm test or npm t or npm run test 
    npm run test:au // for custom tests , run word is mendatory
#### Run single test
    Jest <path_of_the_test_file>
    e.g.  jest tests/demo1.test.js
#### Run tests sequentially 
    npm test -- --runInBand
    jest -w 1 or jest --maxWorkers 1  [In package.json> test]




### # Add Allure Report
    npm install --save-dev jest-allure

### # Uses Jest-circus or jest -v >27 ?
Jest-allure doesn't support jest-circus. As starting from jest@27 it uses jest-circus as default testrunner you must update jest.config.js and set:

    testRunner: "jest-jasmine2"


### # jest -v >24 ?
   Then add jest-allure/dist/setup to setupFilesAfterEnv section of your config.

    setupFilesAfterEnv: ["jest-allure/dist/setup"]
### # jest -v < 24 ?
   Add reporter to jest.config.js
        
    reporters: ["default", "jest-allure"],


### # To see a report in browser, run in console
    allure serve
### # If you want to generate html version, run in console
    allure generate

### # Necessary Allure Commands

    description(description: string): this;
    severity(severity: Severity): this;
    epic(epic: string): this;
    feature(feature: string): this;
    story(story: string): this;
    startStep(name: string): this;
    endStep(status?: Status): this;
    addArgument(name: string): this;
    addEnvironment(name: string, value: string): this;
    addAttachment(name: string, buffer: any, type: string): this;
    addLabel(name: string, value: string): this;
    addParameter(paramName: string, name: string, value: string): this;


### Necessary Commands Puppeteer
    page.click('[href="/login"]');
    page.waitForSelector('form');
    page.type('#name', 'Rick');
    page.type('#password','szechuanSauce');
    page.screenshot({ path: './screenshots/example.png' });
    page.pdf({ path: 'example.pdf', format: 'a4' });