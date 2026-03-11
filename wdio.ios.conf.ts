import path from 'node:path';
import os from 'node:os';
import { execSync } from 'node:child_process';

export const config = {
  runner: 'local',
  specs: ['./tests/**/*.spec.ts'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 17 Pro',
    'appium:platformVersion': '26.2',
    'appium:automationName': 'XCUITest',
    'appium:app': path.resolve(__dirname, 'apps/ios/My Demo App.app'),
  }],
  logLevel: 'warn',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
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
    outputDir: 'allure-results/ios',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: false,
    reportedEnvironmentVars: { PLATFORM: 'iOS' },
  }]],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  onComplete: () => {
    execSync('xcrun simctl shutdown all');
    execSync('killall Simulator 2>/dev/null || true');
  },
};
