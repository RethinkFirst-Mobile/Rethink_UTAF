import merge from 'deepmerge';
import { config as baseConfig } from '../../globals/mobile/configs/wdio.mobile-local.conf';

export const config: WebdriverIO.Config = merge(baseConfig, {
  // =====================
  // Services  Configuration
  // =====================
  services: [],

  // For iOS bases mobile device
  capabilities: [
    {
      platformName: 'iOS',
      browserName: 'Safari',
      'appium:options': {
        automationName: 'XCUITest',
        deviceName: 'iPhone 16 Pro',
        platformVersion: '18.5',
        clearSystemFiles: true,
        appiumVersion: '3.1.0',
        udid: '75222290-4700-4B05-A710-7716F11B9EFE', // Specific simulator ID
        //orientation: 'PORTRAIT',
        //nativeInstrumentsLib: true,
        //isolateSimDevice: true,
        //commandTimeout: '7200',
        app: 'packages/rethink-bh-mobile/resources/Big Calculator 1.3.ipa',
      },
    },
  ],

  // // For Android bases mobile device
  // capabilities: [{
  //     appiumVersion: '1.6.5',
  //     automationName: 'Appium',
  //     platformName: 'Android',
  //     //platformVersion: '9.0',
  //     deviceName: 'Android Emulator',
  //     //deviceName: 'iPhone 6s',
  //     browserName: 'chrome',
  //     // chromeOptions: {
  //     //   androidPackage: 'com.android.chrome',
  //     // },
  //     //setDebugApp: '--persistent com.android.chrome',
  //     chromeOptions: {args: ['--no-managed-user-acknowledgment-check', '--no-user-gesture-required', '--oobe-force-show-screen ⊗']},
  //     //orientation: 'PORTRAIT',
  //     //nativeInstrumentsLib: true,
  //     //isolateSimDevice: true,
  //     //clearSystemFiles: true,
  //     //app: APP_PATH
  //     commandTimeout: '7200',
  //     noReset: false,
  //     //show_on_first_run_allowed: false,
  //     dontStopAppOnReset: false,
  //     show_on_first_run_allowed : false,
  //     show_welcome_page: false,
  //     appActivity: '.MainActivity',
  //     appWaitActivity: 'SplashActivity',
  //     noSign: true,
  //     // intentCategory: 'android.intent.category.APP_CONTACTS',
  //     // intentAction: 'android.intent.action.MAIN',
  // }],
});
