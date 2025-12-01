import { Then } from '@wdio/cucumber-framework';

import SecurePage from '../../pages/secure.page';

Then('I should see a flash message saying {string}', async (message) => {
  await expect(SecurePage.flashAlert).toBeDisplayed();
  await expect(await SecurePage.getText(SecurePage.flashAlert)).toContain(message);
});
