import { Given } from '@wdio/cucumber-framework';

import LoginPage from '../../pages/login.page';

const pages = {
  login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page: keyof typeof pages) => {
  await pages[page].open();
});
