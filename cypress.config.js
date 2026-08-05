const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: 'hs3g2w',

  reporter: 'cypress-mochawesome-reporter',

  trashAssetsBeforeRuns: true,

  //Folders/ Files
  downloadsFolder: 'cypress/downloads',
  fixturesFolder: 'cypress/fixtures',

  //Screenshots
  screenshotsFolder: 'cypress/screenshots',
  screenshotOnRunFailure: true,

  //Videos
  video: true,
  videosFolder: 'cypress/videos',
  videoCompression: false,

  e2e: {
    baseUrl: 'https://www.demoblaze.com',

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // --- AGREGAR DESDE AQUÍ ---
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' || browser.name === 'electron') {
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--no-sandbox');
        }
        return launchOptions;
      });
      // --- HASTA AQUÍ ---

      return config;
    },
  },
});