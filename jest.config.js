module.exports = {
    // we specify jest-puppeteer preset, which will allow us to use Jest with Puppeteer
    preset: "jest-puppeteer",
    // In globals we declare variables, which will be available in our whole test suite
    globals: {
        URL: "https://www.google.com/",
        USERNAME: "",
        PASSWORD: "",
    },
    // In testMatch we are only saying in which folder and for which files Jest should be looking for.
    testMatch: [
      "**/tests/**/*.test.js"
    ],
    testTimeout: 60000,  // Timeout of a test in milliseconds. 
    // maxWorkers: 1, // Specifies the maximum number of workers the worker-pool will spawn for running tests.
    verbose: true,  // Show details of tests, if false show only summary 
    testRunner: "jest-jasmine2",
    // reporters: ["default", "jest-allure"],
    setupFilesAfterEnv: ["jest-allure/dist/setup"]
    // setupFilesAfterEnv: ["jest-allure/dist/setup"]
    
  };

  