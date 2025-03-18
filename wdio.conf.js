const path = require('path');

exports.config = {
    runner: 'local',
    port: 4724,
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        'appium:platformName': 'Android',
        "appium:deviceName": "sdk_gphone64_arm64",
        "appium:platformVersion": "15.0",
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/rethinked-v-25.1.1-(84)-debug 1.apk')
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
