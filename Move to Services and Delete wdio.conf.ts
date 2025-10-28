import path from 'path';

// PLATFORM: 'android' | 'ios' | undefined (both)
const platform = process.env.PLATFORM;
// PROVIDER: 'local' (default) | 'browserstack' | 'bitbar'
const provider = (process.env.PROVIDER || 'local').toLowerCase();

// Remote provider credentials
const BROWSERSTACK_USER = process.env.BROWSERSTACK_USER;
const BROWSERSTACK_KEY = process.env.BROWSERSTACK_KEY;
const BITBAR_USER = process.env.BITBAR_USER;
const BITBAR_KEY = process.env.BITBAR_KEY;

const ANDROID_APP =
  process.env.ANDROID_APP || path.join(process.cwd(), 'app/android/rethinked-v-25.1.1-(84)-debug 1.apk');
const IOS_APP =
  process.env.IOS_APP ||
  '/Users/simonlopatin/Library/Developer/Xcode/DerivedData/iosApp-dzuuchkhwhfuvvfbhbybftveqmxc/Build/Products/Debug-iphonesimulator/iosApp.app';

const androidCaps: any = {
  'appium:platformName': 'Android',
  'appium:deviceName': 'sdk_gphone64_arm64',
  'appium:platformVersion': '15.0',
  'appium:automationName': 'UiAutomator2',
  'appium:systemPort': 8200,
  'appium:app': ANDROID_APP,
  'appium:noReset': false,
};

const iosCaps: any = {
  'appium:platformName': 'iOS',
  'appium:deviceName': 'iPhone 16',
  'appium:platformVersion': '18.2',
  'appium:automationName': 'XCUITest',
  'appium:wdaLocalPort': 8100,
  'appium:app': IOS_APP,
  'appium:noReset': false,
  'appium:fullReset': false,
};

if (provider === 'browserstack') {
  androidCaps['bstack:options'] = Object.assign(
    { projectName: process.env.BSTACK_PROJECT || 'Rethink' },
    androidCaps['bstack:options'] || {},
  );
  iosCaps['bstack:options'] = Object.assign(
    { projectName: process.env.BSTACK_PROJECT || 'Rethink' },
    iosCaps['bstack:options'] || {},
  );
}

if (provider === 'bitbar') {
  androidCaps['bitbar:options'] = Object.assign(
    { projectName: process.env.BITBAR_PROJECT || 'Rethink' },
    androidCaps['bitbar:options'] || {},
  );
  iosCaps['bitbar:options'] = Object.assign(
    { projectName: process.env.BITBAR_PROJECT || 'Rethink' },
    iosCaps['bitbar:options'] || {},
  );
}

const capabilities: any[] = [];
if (!platform || platform === 'android') {
  capabilities.push(androidCaps);
}
if (!platform || platform === 'ios') {
  capabilities.push(iosCaps);
}

export const config: any = {
  runner: 'local',
  specs: ['./features/**/*.feature'],
  exclude: [],
  maxInstances: 1,
  capabilities,

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 20000,
  connectionRetryTimeout: 300000,
  sessionCreationTimeout: 300000,
  connectionRetryCount: 3,

  hostname: '0.0.0.0',
  port: 4723,
  path: '/wd/hub',
  protocol: 'http',
  services: [],

  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  framework: 'cucumber',
  cucumberOpts: {
    require: ['./features/step-definitions/*.ts'],
    timeout: 120000,
    // Add more options as needed
  },

  beforeSession(config1: any, capabilities1: any, specs: string[]) {
    console.log(`Provider: ${provider}`);
    const isCleverLoginSpec = specs.some((file: string) =>
      path.basename(file).toLowerCase().includes('cleverlogin.spec.js'),
    );

    if (capabilities1['appium:platformName'] === 'iOS') {
      if (isCleverLoginSpec) {
        capabilities1['appium:fullReset'] = true;
        capabilities1['appium:noReset'] = false;
        console.log('Running cleverLogin.spec.js with fullReset: true');
      } else {
        capabilities1['appium:fullReset'] = false;
        capabilities1['appium:noReset'] = true;
        console.log('Running other specs with default reset settings');
      }
    }

    console.log(`Starting session on ${capabilities1['appium:platformName']}`);
  },

  before() {
    console.log('Initializing session...');
  },

  beforeTest(test: any) {
    const allure = require('@wdio/allure-reporter').default;
    allure.addFeature(test.title);
    allure.addStory(test.parent);
    console.log(`Running test: ${test.title}`);
  },

  async afterTest(test: any, context: any, { error }: { error: any }) {
    const allure = require('@wdio/allure-reporter').default;
    if (error) {
      // @ts-ignore - driver global is provided by WebdriverIO runtime
      const screenshot = await driver.takeScreenshot();
      allure.addAttachment('Screenshot', screenshot, 'image/png');
      console.log(`Test failed: ${test.title}`);
    } else {
      console.log(`Test passed: ${test.title}`);
    }
  },

  onComplete() {
    console.log('Test execution completed.');
    console.log('To generate the report, run:');
    console.log('npx allure generate allure-results --clean && npx allure open');
  },
};

// Provider specific overrides
if (provider === 'local') {
  config.services = [
    [
      'appium',
      {
        command: 'appium',
        args: {
          address: '0.0.0.0',
          port: 4723,
          log: './appium.log',
        },
      },
    ],
  ];
  config.hostname = '0.0.0.0';
  config.port = 4723;
  config.protocol = 'http';
  config.path = '/wd/hub';
} else if (provider === 'browserstack') {
  if (!BROWSERSTACK_USER || !BROWSERSTACK_KEY) {
    throw new Error('BROWSERSTACK_USER and BROWSERSTACK_KEY must be set for provider=browserstack');
  }
  config.hostname = 'hub.browserstack.com';
  config.port = 443;
  config.protocol = 'https';
  config.path = '/wd/hub';
  config.services = ['browserstack'];
  config.capabilities = config.capabilities.map((cap: any) => {
    cap['bstack:options'] = Object.assign(
      {
        userName: BROWSERSTACK_USER,
        accessKey: BROWSERSTACK_KEY,
      },
      cap['bstack:options'] || {},
    );
    return cap;
  });
} else if (provider === 'bitbar') {
  if (!BITBAR_USER || !BITBAR_KEY) {
    throw new Error('BITBAR_USER and BITBAR_KEY must be set for provider=bitbar');
  }
  config.hostname = process.env.BITBAR_HOSTNAME || 'cloud.bitbar.com';
  config.port = 443;
  config.protocol = 'https';
  config.path = process.env.BITBAR_PATH || '/wd/hub';
  config.capabilities = config.capabilities.map((cap: any) => {
    cap['bitbar:options'] = Object.assign(
      {
        user: BITBAR_USER,
        key: BITBAR_KEY,
      },
      cap['bitbar:options'] || {},
    );
    return cap;
  });
} else {
  throw new Error(`Unknown provider: ${provider}`);
}

export default config;
