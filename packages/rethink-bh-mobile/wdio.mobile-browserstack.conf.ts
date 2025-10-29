import merge from 'deepmerge';
import env from 'dotenv-safe';
import root from 'app-root-path';
import { config as browserStackConfig } from '../../globals/mobile/configs/wdio.mobile-browserstack.conf';

env.config({
  example: `${root}/.env.example`,
});

export const config: WebdriverIO.Config = merge(browserStackConfig, {
  capabilities: [
    {
      maxInstances: 5,
      browserName: process.env.BROWSER,
      'bstack:options': {
        buildName: process.env.TEAM,
        os: process.env.BROWSERSTACK_OS,
        projectName: process.env.TEAM,
        local: 'false',
        debug: 'true',
        networkLogs: 'true',
        consoleLogs: 'info',
      },
    },
  ],
});
