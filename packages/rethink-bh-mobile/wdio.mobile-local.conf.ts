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
      platformName: process.env.PLATFORM_NAME,
      browserName: process.env.BROWSER,
      'appium:options': {
        automationName: process.env.AUTOMATION_NAME,
        deviceName: process.env.DEVICE_NAME,
        platformVersion: process.env.PLATFORM_VERSION,
        clearSystemFiles: true,
        appiumVersion: '3.1.0',
        ...(process.env.PLATFORM_NAME === 'iOS' && {
          app: process.env.APP_PATH,
          bundleId: process.env.APP_BUNDLEID,
        }),
        ...(process.env.PLATFORM_NAME === 'android' && {
          app: process.env.APP_PATH,
          appPackage: process.env.APP_PACAKGE,
          appActivity: process.env.APP_ACTIVITY,
        }),
      },
    },
  ],
});
