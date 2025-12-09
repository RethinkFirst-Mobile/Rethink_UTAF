import { Then } from '@wdio/cucumber-framework';
import SecurePage from '../../pages/webpages/secure.page';
import { loginPage } from 'packages/rethink-bh-mobile/pages/mobilepages/login.page';

Then('I should see a flash message saying {string}', async (message) => {
  await expect(SecurePage.flashAlert).toBeDisplayed();
  await expect(await SecurePage.getText(SecurePage.flashAlert)).toContain(message);
});

Then('User should able to see the message {string}', async (message) => {
  const actualMessages = await loginPage.getDisplayedMessages();
  let found = false;
  for (const actualMessage of actualMessages) {
    try {
      await expect(actualMessage).toContain(message);
      found = true;
    } catch {
      // continue to next message
    }
  }
  if (!found) {
    await loginPage.submit();
    throw new Error(`None of the displayed messages contained: ${message}`);
  }
  await loginPage.submit();
});
