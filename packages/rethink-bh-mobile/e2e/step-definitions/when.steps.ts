import { When } from '@wdio/cucumber-framework';

import LoginPage from '../../pages/login.page';

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});
