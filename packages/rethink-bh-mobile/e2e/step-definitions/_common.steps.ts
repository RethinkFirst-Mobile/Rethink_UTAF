import { When } from '@wdio/cucumber-framework';
import LoginPage from '../../pages/webpages/login.page';
import { loginPage } from 'packages/rethink-bh-mobile/pages/mobilepages/login.page';

When('I login with {string} and {string}', async (username, password) => {
  await LoginPage.login(username, password);
});

When('User tries to retrieve the {string} with {string}', async (type: string, email: string) => {
  if (type === 'username') {
    await loginPage.forgotUsernameProcess(email);
  } else if (type === 'password') {
    await loginPage.forgotPasswordProcess(email);
  }
});
