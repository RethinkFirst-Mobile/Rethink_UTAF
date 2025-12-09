import { Then } from '@wdio/cucumber-framework';

//import SecurePage from '../../pages/webpages/secure.page';
import { calendarPage } from '../../pages/mobilepages/calendar.page';
import loginPage from '../../pages/mobilepages/login.page';

Then('I click on the Login button', async () => {
  await expect(await loginPage.isDisplayed(await loginPage.loginButton));
  (await loginPage.loginButton).click();
});

Then('I should be logged in to the application successfully', async () => {
  if (!(await calendarPage.isDisplayed(await calendarPage.calendarPageTitle))) {
    await loginPage.click(await loginPage.yesButton);
    await loginPage.click(await loginPage.okButton);
    //     if (await calendarPage.isDisplayed(await calendarPage.calendarPageTitle)) {
    //   // First condition passed
    //   if (await loginPage.isDisplayed(await loginPage.yesButton)) {
    //     // Second condition passed
    //     await loginPage.click(await loginPage.yesButton);
    //   }
    // }
  }
});
