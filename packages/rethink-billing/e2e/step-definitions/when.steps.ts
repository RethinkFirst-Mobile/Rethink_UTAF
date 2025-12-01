import { When } from '@wdio/cucumber-framework';

import LoginPage from '../../pages/login.page';

When('I login with {string} and {string}', async (username, password) => {
  await LoginPage.login(username, password);
});
