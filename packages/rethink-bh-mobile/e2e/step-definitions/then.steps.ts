import { Then } from '@wdio/cucumber-framework';

import SecurePage from '../../pages/secure.page';

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveText(message);
});
