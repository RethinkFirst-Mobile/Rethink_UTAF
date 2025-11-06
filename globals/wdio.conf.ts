/* eslint-disable @typescript-eslint/no-require-imports */
import root from 'app-root-path';
import { MilliSeconds } from './enums/milliseconds.enum';
import allureReporter from '@wdio/allure-reporter';

const mergeResults = require('wdio-json-reporter/mergeResults');
const allure = require('allure-commandline');

export const config: WebdriverIO.Config = {
  // WebDriver Configs
  // path: '/wd/hub',
  // connectionRetryTimeout: 120000,
  // connectionRetryCount: 3,
  logLevel: 'debug',
  outputDir: `${root}/packages/${process.env.TEAM}/tmp/wdlogs/`,

  // WebDriverIO Configs
  automationProtocol: 'webdriver',
  baseUrl: undefined,
  waitforTimeout: MilliSeconds.XXL,
  waitforInterval: MilliSeconds.XXS,

  // TestRunner Configs
  // TODO:target for specific spec file
  specs: [`${root}/packages/${process.env.TEAM}/e2e/features/**/*.feature`],
  exclude: [],
  suites: {},
  capabilities: [],
  maxInstances: 1,
  maxInstancesPerCapability: 1,
  bail: 0,
  services: [],
  framework: 'cucumber',
  cucumberOpts: {
    backtrace: false,
    requireModule: [],
    failAmbiguousDefinitions: true, // wdio specific
    failFast: false,
    dryRun: false,
    format: ['pretty'],
    ignoreUndefinedDefinitions: false, // wdio specific
    name: [],
    profile: [],
    require: [`${root}/packages/${process.env.TEAM}/e2e/**/*.steps.ts`],
    snippetSyntax: undefined,
    snippets: true,
    source: false,
    strict: true,
    tagsInTitle: false,
    retry: 0,
    retryTagFilter: '',
    tagExpression: '',
    timeout: (process.env.DEBUG_TIME_OUT as unknown as number) || 5 * MilliSeconds.XXL,
    scenarioLevelReporter: false,
    order: 'defined',
  },
  reporters: [
    'spec',
    [
      'cucumberjs-json',
      {
        jsonFolder: `${root}/packages/${process.env.TEAM}/tmp/reports`,
        language: 'en',
      },
    ],
    [
      'allure',
      {
        outputDir: `${root}/packages/${process.env.TEAM}/tmp/allure-reports`,
        disableWebdriverStepsReporting: true,
        useCucumberStepReporter: false,
        addConsoleLogs: true, // Attach console logs to reports

        reportedEnvironmentVars: {
          NODE_VERSION: `${process.version}`,
          BROWSER: `${process.env.BROWSER}`,
          Device: `${process.env.DEVICE_NAME}`,
          PLATFORM: `${process.env.PLATFORM_NAME}`,
        },
      },
    ],
  ],

  /**
   * Hook that gets executed before the suite starts
   * @param {Object} suite suite details
   */
  beforeSuite: function (suite) {
    allureReporter.addFeature(suite.title);
  },

  beforeTest: function (test) {
    // Add dynamic metadata based on test context if needed
    allureReporter.addArgument('Test ID', test.parent + '::' + test.title);
  },

  afterTest: async function (test) {
    // Take a screenshot
    const screenshot = await browser.takeScreenshot();
    // Add the screenshot as an attachment to the Allure report
    // 'Failure Screenshot' is the attachment name in the report
    // 'image/png' is the MIME type
    allureReporter.addAttachment('afterTest_' + test.fullName, Buffer.from(screenshot, 'base64'), 'image/png');
  },

  afterStep: async function () {
    // Take a screenshot
    const screenshot = await browser.takeScreenshot();
    // Add the screenshot as an attachment to the Allure report
    // 'Failure Screenshot' is the attachment name in the report
    // 'image/png' is the MIME type
    allureReporter.addAttachment('afterStep_' + test.name, Buffer.from(screenshot, 'base64'), 'image/png');
  },

  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  onComplete: function () {
    mergeResults(`${root}/packages/${process.env.TEAM}/tmp`, 'wdio-*', 'testResults.json');
    const generation = allure(['generate', 'allure-results', '--clean', '-o', 'allure-report']);

    return new Promise<void>((resolve, reject) => {
      generation.on('close', function (code: number) {
        if (code === 0) {
          console.log('Allure report generated successfully');
          resolve();
        } else {
          console.log('Allure report generation failed with code:', code);
          reject(new Error('Allure report generation failed'));
        }
      });
    });
  },
};
