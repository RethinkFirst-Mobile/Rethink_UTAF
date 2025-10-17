import CleverPage from '../pages/CleverPage';

describe('Clever Login', () => {
    beforeEach(async () => {
        await (global as any).driver.pause(5000);
        await CleverPage.loginButton.waitForDisplayed({ timeout: 15000 });
    });

    it('Should login using Clever integration', async () => {
        await CleverPage.loginWithClever();
        console.log("Clever login flow completed and user verified.");
    });
});