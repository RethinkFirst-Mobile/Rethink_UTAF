import { Given } from '@wdio/cucumber-framework';
import allureReporter from '@wdio/allure-reporter';
//import Page from './../../../../packages/rethink-bh-mobile/pages/webpages/page';
import loginPage from 'packages/rethink-bh-mobile/pages/mobilepages/login.page';

Given('I am on the login page', async () => {
  allureReporter.addFeature('Login Feature');
  allureReporter.addStory('Validating Login Page Navigation');
  await expect((await loginPage.rethinkLogo).isDisplayed());
});
