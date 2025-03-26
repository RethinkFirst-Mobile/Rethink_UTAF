const ActionHelper = require('../helpers/actionHelper');
const ElementHelper = require('../helpers/elementHelper');

class LoginPage {
    async login(username, password) {
        const isIOS = driver.capabilities.platformName === 'iOS';

        if (isIOS) {
            const loginButton = await $(`~Log in`); // accessibility ID
            await ActionHelper.clickElement(loginButton);
        } else {
            const loginButton = await ElementHelper.getElementByText("Log in");
            await ActionHelper.clickElement(loginButton);
        }

        console.log("Clicked Login button.");

        // 💥 iOS system alert handling
        if (isIOS) {
            try {
                await driver.acceptAlert(); // taps "Continue"/"Allow"
                console.log("🛡️ iOS system alert accepted.");
            } catch (err) {
                if (err.message.includes("no such alert")) {
                    console.log("No iOS system alert to accept.");
                } else {
                    throw err;
                }
            }
        }

        if (isIOS) {
            await ActionHelper.typeText(await $(`~signInName`), username);
            console.log("Entered username (iOS).");

            await ActionHelper.typeText(await $(`~password`), password);
            console.log("Entered password (iOS).");

            await ActionHelper.clickElement(await $(`~next`));
            console.log("Clicked Sign-In button (iOS).");
        } else {
            await ActionHelper.typeText(await ElementHelper.getElementByResourceId("signInName"), username);
            console.log("Entered username (Android).");

            await ActionHelper.typeText(await ElementHelper.getElementByResourceId("password"), password);
            console.log("Entered password (Android).");

            await ActionHelper.clickElement(await ElementHelper.getElementByResourceId("next"));
            console.log("Clicked Sign-In button (Android).");
        }
    }
}

module.exports = new LoginPage();
