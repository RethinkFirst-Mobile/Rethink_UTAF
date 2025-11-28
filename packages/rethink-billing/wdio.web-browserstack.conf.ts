import merge from 'deepmerge';
import env from 'dotenv-safe';
import root from 'app-root-path';
import yargs from 'yargs';
import { config as browserStackConfig } from '../../globals/mobile/configs/wdio.mobile-browserstack.conf';

env.config({
  example: `${root}/.env.example`,
});

export const config: WebdriverIO.Config = merge(browserStackConfig, {
  baseUrl: yargs.parseSync().url,
  // ============
  // Capabilities
  // ============
  capabilities: [
    {
      browserName: process.env.BROWSER,
      'bstack:options': {
        buildName: process.env.TEAM,
        os: 'OS X',
        osVersion: 'Big Sur',
        projectName: process.env.TEAM,
        local: false,
        debug: true,
        networkLogs: true,
        browserVersion: 'latest',
      },
    },
  ],
});
