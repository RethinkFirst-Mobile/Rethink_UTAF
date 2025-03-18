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
