import { When } from '@wdio/cucumber-framework';

import LoginPage from '../../pages/mobilepages/login.page';

When('I login with {string} and {string}', async (username, password) => {
  await driver.relaunchActiveApp();
  await LoginPage.loginToApp(username, password);
});
