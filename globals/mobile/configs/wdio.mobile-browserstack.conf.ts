import merge from 'deepmerge';
import { config as baseConfig } from '../../wdio.conf';

export const config: WebdriverIO.Config = merge(baseConfig, {
  path: '/wd/hub',
  // =====================
  // Services  Configuration
  // =====================
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  maxInstances: 5,
  services: [
    [
      'browserstack',
      {
        browserstackLocal: false,
        accessibility: false,
        local: false,
        debug: true,
        networkLogs: true,
        consoleLogs: 'info',
      },
    ],
    ['shared-store'],
  ],
});
