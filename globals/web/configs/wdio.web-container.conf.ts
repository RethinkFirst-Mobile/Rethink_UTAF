import merge from 'deepmerge';
import { BrowsersContainerService } from '../services/browsers-container.service';

import { config as baseConfig } from '../../wdio.conf';

export const config: WebdriverIO.Config = merge(baseConfig, {
  path: '/wd/hub',
  hostname: 'localhost',
  runner: 'local',
  port: 4444,
  // =====================
  // Services  Configuration
  // =====================
  services: [[BrowsersContainerService as unknown as string, {}], ['shared-store']],
});
