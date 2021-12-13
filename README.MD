#  Dokan_automation_jest(e2e)


















# # Jest-Puppeteer Setup

## # Project setup

<br>

### # Initialize npm

    npm init -y

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

### # Add the following section to your package.json:

    {
    "scripts": {
        "test": "jest"
    }
    }

### # Run Tests
    npm run test


### # Add Allure Report
    npm install --save-dev jest-allure


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