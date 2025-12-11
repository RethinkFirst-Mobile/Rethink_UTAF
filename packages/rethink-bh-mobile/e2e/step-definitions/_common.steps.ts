import { When } from '@wdio/cucumber-framework';

import LoginPage from '../../pages/webpages/login.page';

When('I login with {string} and {string}', async (username, password) => {
  await LoginPage.login(username, password);
});
