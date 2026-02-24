// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    headless: false,
    browserName: 'chromium',
    launchOptions: {
      slowMo: 800   // 👈 800ms delay between actions
    }
  }
});