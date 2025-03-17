const ActionHelper = require('../helpers/actionHelper');
const ElementHelper = require('../helpers/elementHelper');

class LoginPage {
    async login(username, password) {
        await ActionHelper.clickElement(await ElementHelper.getElementByText("Log in"));
        console.log("Clicked Login button.");

        await ActionHelper.typeText(await ElementHelper.getElementByResourceId("signInName"), username);
        console.log("Entered username.");

        await ActionHelper.typeText(await ElementHelper.getElementByResourceId("password"), password);
        console.log("Entered password.");

        await ActionHelper.clickElement(await ElementHelper.getElementByResourceId("next"));
        console.log("Clicked Sign-In button.");
    }
}

module.exports = new LoginPage();


/*

class LoginPage {
    get loginButton() { return $('android=new UiSelector().text("Log in")'); }
    get usernameField() { return $('android=new UiSelector().resourceId("signInName")'); }
    get passwordField() { return $('android=new UiSelector().resourceId("password")'); }
    get signInButton() { return $('android=new UiSelector().resourceId("next")'); }

    async login(username, password) {
        await this.loginButton.waitForDisplayed({ timeout: 5000 });
        await this.loginButton.click();

        await this.usernameField.waitForDisplayed({ timeout: 5000 });
        await this.usernameField.setValue(username);

        await this.passwordField.waitForDisplayed({ timeout: 5000 });
        await this.passwordField.setValue(password);

        await this.signInButton.waitForDisplayed({ timeout: 5000 });
        await this.signInButton.click();

        await driver.pause(5000); // Ensure login completes before proceeding
    }
}

module.exports = new LoginPage();

*/