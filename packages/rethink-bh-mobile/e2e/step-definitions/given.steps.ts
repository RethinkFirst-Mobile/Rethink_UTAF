import { Given } from '@wdio/cucumber-framework';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pages/login.page';

Given('I am on the login page', async () => {
  allureReporter.addFeature('Login Feature');
  allureReporter.addStory('Validating Login Page Navigation');
  await LoginPage.open();
});
