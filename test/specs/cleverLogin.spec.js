const CleverPage = require('../pages/CleverPage');

describe('Clever Login', () => {
    //this.timeout(120000);
    beforeEach(async () => {
        await driver.pause(5000);
        await CleverPage.loginButton.waitForDisplayed({ timeout: 15000 });
    });

    it('Should login using Clever integration', async () => {
        await CleverPage.loginWithClever();
        console.log("Clever login flow completed and user verified.");
    });
});
