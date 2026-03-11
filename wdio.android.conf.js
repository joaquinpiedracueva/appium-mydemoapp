const path = require('node:path');
const os = require('node:os');

exports.config = {
  runner: 'local',
  specs: ['./tests/**/*.test.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Pixel_8_Pro_API_35',
    'appium:avd': 'Pixel_8_Pro_API_35',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.resolve(__dirname, 'apps/android/mda-2.2.0-25.apk'),
    'appium:avdLaunchTimeout': 180000,
    'appium:avdReadyTimeout': 180000,
  }],
  logLevel: 'warn',
  waitforTimeout: 10000,
  connectionRetryTimeout: 300000,
  connectionRetryCount: 3,
  services: [['appium', {
    logPath: os.tmpdir(),
    command: path.resolve(__dirname, 'appium-wrapper.sh'),
    args: {
      basePath: '/',
    },
  }]],
  framework: 'mocha',
  reporters: ['spec', ['allure', {
    outputDir: 'allure-results/android',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: false,
    reportedEnvironmentVars: { PLATFORM: 'Android' },
  }]],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
