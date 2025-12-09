import { Then } from '@wdio/cucumber-framework';

//import SecurePage from '../../pages/webpages/secure.page';
import { calendarPage } from '../../pages/mobilepages/calendar.page';
import loginPage from '../../pages/mobilepages/login.page';

Then('I click on the Login button', async () => {
  expect(await loginPage.isDisplayed(await loginPage.loginButton));
  (await loginPage.loginButton).click();
});

Then('I should be logged in to the application for valid credentials', async () => {
  if (!(await calendarPage.isDisplayed(await calendarPage.calendarPageTitle))) {
    if (await loginPage.isDisplayed(await loginPage.yesButton)) {
      await loginPage.click(await loginPage.yesButton);
    }
    if (await loginPage.isDisplayed(await loginPage.okButton)) {
      await loginPage.click(await loginPage.okButton);
    }
  } else if (await loginPage.isDisplayed(await loginPage.mandateFieldError)) {
    //
  }
});
