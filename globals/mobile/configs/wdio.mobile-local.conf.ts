import merge from 'deepmerge';
import { config as baseConfig } from '../../wdio.conf';

export const config: WebdriverIO.Config = merge(baseConfig, {
  host: '0.0.0.0',
  port: 4723,
  // =====================
  // Services  Configuration
  // =====================
  services: [
    [
      'appium',
      {
        // For options see
        // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        args: {
          // For arguments see
          // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        },
        command: 'appium --allow-insecure chromedriver_autodownload',
      },
    ],
    ['shared-store'],
  ],
  maxInstances: 5,
});
