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
    verbose: true,
    reporters: ["default", "jest-allure"],
  };