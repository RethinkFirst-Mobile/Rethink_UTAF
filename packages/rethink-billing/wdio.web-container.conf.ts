import merge from 'deepmerge';
import yargs from 'yargs';
import { config as containerConfig } from '../../globals/web/configs/wdio.web-container.conf';
import { WebPage } from '../../globals/web/web.page';

const webPage = new WebPage();

export const config: WebdriverIO.Config = merge(containerConfig, {
  baseUrl: yargs.parseSync().url,
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
    await browser.sharedStore.set('baseURL', (await yargs.parseSync().url) as string);
  },
});
