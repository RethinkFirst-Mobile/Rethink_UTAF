import { Given } from '@wdio/cucumber-framework';
import { When } from '@wdio/cucumber-framework';
import { Then } from '@wdio/cucumber-framework';
import allureReporter from '@wdio/allure-reporter';
import { loginPage } from 'packages/rethink-bh-mobile/pages/mobilepages/login.page';

Given('User on the login screen', async () => {
  allureReporter.addFeature('Login Feature');
  allureReporter.addStory('Validating Login screen');
  await expect(await loginPage.rethinkLogo).toBeDisplayed();
});

When('User tries to retrieve the {string} with {string}', async (type: string, email: string) => {
  if (type === 'username') {
    await expect(await loginPage.forgotUsername).toBeDisplayed();
    await (await loginPage.forgotUsername).click();
    await expect(await loginPage.resetUsernamePage).toBeDisplayed();
    await expect(await loginPage.inputResetCredentials).toBeDisplayed();
    await (await loginPage.inputResetCredentials).setValue(email);
  } else if (type === 'password') {
    await expect(await loginPage.forgotPassword).toBeDisplayed();
    await (await loginPage.forgotPassword).click();
    await expect(await loginPage.resetPasswordPage).toBeDisplayed();
    await expect(await loginPage.inputResetCredentials).toBeDisplayed();
    await (await loginPage.inputResetCredentials).setValue(email);
  }
});

Then('User should able to see the message {string}', async (message) => {
  if (await loginPage.isDisplayed(await loginPage.inputEmailFormatError)) {
    expect(await loginPage.getText(await loginPage.inputEmailFormatError)).toBe(message);
    await loginPage.click(await loginPage.submit);
  } else if (await loginPage.isDisplayed(await loginPage.mandateFieldError)) {
    expect(await loginPage.getText(await loginPage.mandateFieldError)).toBe(message);
    await loginPage.click(await loginPage.submit);
  } else {
    await loginPage.click(await loginPage.submit);
    if (await loginPage.isDisplayed(await loginPage.resetSuccessMessage)) {
      expect(await loginPage.getText(await loginPage.resetSuccessMessage)).toBe(message);
      await loginPage.click(await loginPage.submit);
    } else {
      throw new Error(`None of the expected validation messages were displayed. Actual message: ${message}`);
    }
  }
});
