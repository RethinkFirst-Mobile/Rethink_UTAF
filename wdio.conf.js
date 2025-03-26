const path = require('path');

const platform = process.env.PLATFORM || 'android';

let capabilities = [];

if (platform === 'android') {
    capabilities = [{
        'appium:platformName': 'Android',
        'appium:deviceName': 'sdk_gphone64_arm64',
        'appium:platformVersion': '15.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/rethinked-v-25.1.1-(84)-debug 1.apk')
    }];
} else if (platform === 'ios') {
    capabilities = [{
        'appium:platformName': 'iOS',
        'appium:deviceName': 'iPhone 16', 
        'appium:platformVersion': '18.2',
        'appium:automationName': 'XCUITest',
        'appium:app': '/Users/simonlopatin/Library/Developer/Xcode/DerivedData/iosApp-dzuuchkhwhfuvvfbhbybftveqmxc/Build/Products/Debug-iphonesimulator/iosApp.app',
        'appium:noReset': false
      }];
}

exports.config = {
    runner: 'local',
    port: 4724,
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 1,
    capabilities,
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 15000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [['appium', { command: 'appium' }]],

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
        timeout: 60000
    },

    beforeSession: function () {
        console.log(`🚀 Starting ${platform.toUpperCase()} test execution...`);
    },

    before: function (capabilities, specs) {
        console.log("🔧 Initializing session...");
    },

    beforeTest: function (test) {
        const allure = require('@wdio/allure-reporter').default;
        allure.addFeature(test.title);
        allure.addStory(test.parent);
        console.log(`🎯 Executing test: ${test.title}`);
    },

    afterTest: async function (test, context, { error }) {
        const allure = require('@wdio/allure-reporter').default;
        if (error) {
            await driver.takeScreenshot();
            allure.addAttachment('Screenshot', await driver.takeScreenshot(), 'image/png');
            console.log(`❌ Test failed: ${test.title}`);
        } else {
            console.log(`✅ Test passed: ${test.title}`);
        }
    },

    onComplete: function () {
        console.log("✅ Test execution completed.");
        console.log("📊 To generate the report, run:");
        console.log("npx allure generate allure-results --clean && npx allure open");
    }
};
