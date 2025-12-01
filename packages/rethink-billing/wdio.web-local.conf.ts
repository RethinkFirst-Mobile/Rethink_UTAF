import merge from 'deepmerge';
import yargs from 'yargs';
import { WebPage } from '../../globals/web/web.page';
import { config as localConfig } from '../../globals/web/configs/wdio.web-local.conf';

const webPage = new WebPage();

export const config: WebdriverIO.Config = merge(localConfig, {
  baseUrl: yargs.parseSync().url,
  // =====================
  // Services  Configuration
  // =====================
  services: [],

  // ============
  // Capabilities
  // ============
  capabilities: [
    {
      browserName: process.env.BROWSER,
    },
  ],
  before: async () => {
    await webPage.deleteAllCookies();
    await webPage.maximizeWindowSize();
    await browser.sharedStore.set('baseURL', yargs.parseSync().url as string);
  },
});
