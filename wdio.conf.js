const path = require('path');
const platform = process.env.PLATFORM;

// Define Android capabilities
const androidCaps = {
    'appium:platformName': 'Android',
    'appium:deviceName': 'sdk_gphone64_arm64',
    'appium:platformVersion': '15.0',
    'appium:automationName': 'UiAutomator2',
    'appium:systemPort': 8200,
    'appium:app': path.join(process.cwd(), 'app/android/rethinked-v-25.1.1-(84)-debug 1.apk'),
    'appium:noReset': false
};

// Define iOS capabilities
const iosCaps = {
    'appium:platformName': 'iOS',
    'appium:deviceName': 'iPhone 16',
    'appium:platformVersion': '18.2',
    'appium:automationName': 'XCUITest',
    'appium:wdaLocalPort': 8100,
    'appium:app': '/Users/simonlopatin/Library/Developer/Xcode/DerivedData/iosApp-dzuuchkhwhfuvvfbhbybftveqmxc/Build/Products/Debug-iphonesimulator/iosApp.app',
    'appium:noReset': false,
    'appium:fullReset': false
};

// Assemble capabilities based on PLATFORM env var
let capabilities = [];
if (!platform || platform === 'android') { capabilities.push(androidCaps); }
if (!platform || platform === 'ios') { capabilities.push(iosCaps); }

exports.config = {
    runner: 'local',
    port: 4723,
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 1,
    capabilities,

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 20000,
    connectionRetryTimeout: 300000,
    sessionCreationTimeout: 300000,
    connectionRetryCount: 3,

    services: [
        ['appium', {
            command: 'appium',
            args: {
                address: '0.0.0.0',
                port: 4723,
                log: './appium.log',
            }
        }]
    ],

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },

    beforeSession: function (config, capabilities, specs) {
        const isCleverLoginSpec = specs.some(file =>
            path.basename(file).toLowerCase().includes('cleverlogin.spec.js')
        );

        if (capabilities['appium:platformName'] === 'iOS') {
            if (isCleverLoginSpec) {
                capabilities['appium:fullReset'] = true;
                capabilities['appium:noReset'] = false;
                console.log('Running cleverLogin.spec.js with fullReset: true');
            } else {
                capabilities['appium:fullReset'] = false;
                capabilities['appium:noReset'] = true;
                console.log('Running other specs with default reset settings');
            }
        }

        console.log(`Starting session on ${capabilities['appium:platformName']}`);
    },

    before: function () {
        console.log("Initializing session...");
    },

    beforeTest: function (test) {
        const allure = require('@wdio/allure-reporter').default;
        allure.addFeature(test.title);
        allure.addStory(test.parent);
        console.log(`Running test: ${test.title}`);
    },

    afterTest: async function (test, context, { error }) {
        const allure = require('@wdio/allure-reporter').default;
        if (error) {
            const screenshot = await driver.takeScreenshot();
            allure.addAttachment('Screenshot', screenshot, 'image/png');
            console.log(`Test failed: ${test.title}`);
        } else {
            console.log(`Test passed: ${test.title}`);
        }
    },

    onComplete: function () {
        console.log("Test execution completed.");
        console.log("To generate the report, run:");
        console.log("npx allure generate allure-results --clean && npx allure open");
    }
};
