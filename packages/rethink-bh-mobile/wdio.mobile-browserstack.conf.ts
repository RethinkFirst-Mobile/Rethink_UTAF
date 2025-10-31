import merge from 'deepmerge';
import { config as browserStackConfig } from '../../globals/mobile/configs/wdio.mobile-browserstack.conf';

export const config: WebdriverIO.Config = merge(browserStackConfig, {
  services: [
    [
      'browserstack',
      {
        testObservabilityOptions: {
          projectName: 'RethinkBH',
          buildName: 'rethink-bh-mobile',
        },
      },
    ],
  ],
  capabilities: [
    {
      browserName: process.env.BROWSER,
      'bstack:options': {
        deviceName: process.env.DEVICE_NAME,
        platformVersion: process.env.PLATFORM_VERSION,
        platformName: process.env.PLATFORM_NAME,
        app: process.env.APP_PATH,
        appPackage: process.env.APP_PACAKGE,
        appActivity: process.env.APP_ACTIVITY,
      },
    },
  ],
});
