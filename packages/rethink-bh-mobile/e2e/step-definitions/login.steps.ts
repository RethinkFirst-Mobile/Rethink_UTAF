import { Given } from '@wdio/cucumber-framework';
import { When } from '@wdio/cucumber-framework';
import { Then } from '@wdio/cucumber-framework';
import allureReporter from '@wdio/allure-reporter';
import { calendarPage } from '../../pages/mobilepages/calendar.page';
import { loginPage } from 'packages/rethink-bh-mobile/pages/mobilepages/login.page';

Given('User is on the login page', async () => {
  allureReporter.addFeature('Login Feature');
  allureReporter.addStory('Validating Login Page Navigation');
  await driver.relaunchActiveApp();
  expect((await loginPage.rethinkLogo).isDisplayed());
});

When('User tries logging into the app with {string} and {string}', async (username, password) => {
  await loginPage.environmentChooserOptions('QA');
  expect(await loginPage.isDisplayed(await loginPage.chooseEnvironment));
  expect(await loginPage.isDisplayed(await loginPage.okButton));
  expect(await loginPage.isDisplayed(await loginPage.inputUsername));
  expect(await loginPage.isDisplayed(await loginPage.inputPassword));
  expect(await loginPage.isDisplayed(await loginPage.loginButton));
  await loginPage.loginToApp(username, password);
});

Then('User validates is displayed', async () => {
  if (!(await loginPage.isDisplayed(await loginPage.mandateFieldError))) {
    if (await loginPage.isDisplayed(await loginPage.yesButton)) {
      expect(await loginPage.isDisplayed(await loginPage.termsOfUse));
      expect(await loginPage.isDisplayed(await loginPage.termsOfUsePopUp));
      await loginPage.click(await loginPage.yesButton);

      if (await loginPage.isDisplayed(await loginPage.okButton)) {
        expect(await loginPage.isDisplayed(await loginPage.errorPopup));
        await loginPage.click(await loginPage.okButton);
      }
    }
  } else if (await calendarPage.isDisplayed(await calendarPage.calendarPageTitle)) {
    expect(await calendarPage.getText(await calendarPage.calendarPageTitle)).toBe('Calendar');
  }
});
