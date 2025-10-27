import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../../pages/LoginPage';
import config from '../../../../globals/mobile/config';

Given('the app is launched', async () => {
    // Optionally add launch logic or just pause for demo
    await (global as any).driver.pause(2000);
});

When('the user enters valid credentials', async () => {
    await LoginPage.login(config.username, config.password);
});

Then('the user should see the home screen', async () => {
    // Add a check for a home screen element or pause for demo
    await (global as any).driver.pause(2000);
    // Example: expect(await HomePage.isDisplayed()).toBe(true);
});
