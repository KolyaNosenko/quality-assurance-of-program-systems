import fs from 'fs';
import path from 'path';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) =>
  path.resolve(appDirectory, relativePath);

export const config: WebdriverIO.Config = {
  runner: 'local',
  tsConfigPath: './tsconfig.json',
  hostname: 'localhost',
  port: 4723,
  path: '/',
  maxInstancesPerCapability: 1,
  specs: ['./test/specs/**/*.ts'],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'Pixel API 35',
      'appium:app': resolveApp(
        'Signal-Android-website-prod-universal-release-7.24.2.apk',
      ),
      'appium:automationName': 'UiAutomator2',
      'appium:appPackage': 'org.thoughtcrime.securesms',
      'appium:appActivity': '.RoutingActivity',
      'appium:noReset': true,
      'appium:fullReset': false,
    },
  ],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
