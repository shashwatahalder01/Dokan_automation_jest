module.exports = {
  preset: "jest-puppeteer", // we specify jest-puppeteer preset, which will allow us to use Jest with Puppeteer
  globals: {
    URL: "https://www.google.com/",
    USERNAME: "",
    PASSWORD: "",
  }, // In globals we declare variables, which will be available in our whole test suite
  // bail: 5, // for example: Stop running tests after `n` failures
  // testPathIgnorePatterns: ['/node_modules/', 'dist'],
  testMatch: ["**/tests/**/*.test.js"], // In testMatch we are only saying in which folder and for which files Jest should be looking for.
  testTimeout: 300000, // Timeout of a test in milliseconds.
  // maxWorkers: 1, // Specifies the maximum number of workers the worker-pool will spawn for running tests.
  verbose: true, // Show details of tests, if false show only summary
  // testRunner: "jest-jasmine2", // test runner for allure report . after jest 24> jest-circus is default test runner.
  // reporters: ["default", "jest-allure"],
  setupFiles: ["dotenv/config"], //setupFile will be run once per test file &  will be run once per test file.
  // setupFilesAfterEnv: ["jest-allure/dist/setup"], // setupFilesAfterEnv  will run some code immediately after the test framework has been installed in the environment but before the test code itself.
};
