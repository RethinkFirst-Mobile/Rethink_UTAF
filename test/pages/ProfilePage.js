const ActionHelper = require('../helpers/actionHelper');
const ElementHelper = require('../helpers/elementHelper');

class ProfilePage {
    async navigateToProfile() {
        await ActionHelper.clickElement(await ElementHelper.getElementByText("More"));
        console.log("Clicked 'More' button.");

        await ActionHelper.clickElement(await ElementHelper.getElementByDescription("Profile button icon"));
        console.log("Clicked 'Profile' button.");
    }

    async verifyProfileDetails() {
/*      const firstNameText = await ActionHelper.getText(await ElementHelper.getElementByText("Roman Dev-db1"));
        console.log(`Verifying First Name: ${firstNameText}`);
        if (firstNameText !== "Roman Dev-db1") {
            throw new Error(`First Name mismatch! Expected "Roman Dev-db1", Found "${firstNameText}"`);
        }

        const lastNameText = await ActionHelper.getText(await ElementHelper.getElementByText("Isanin Dev-db1"));
        console.log(`Verifying Last Name: ${lastNameText}`);
        if (lastNameText !== "Isanin Dev-db1") {
            throw new Error(`Last Name mismatch! Expected "Isanin Dev-db1", Found "${lastNameText}"`);
        }
*/
        const usernameText = await ActionHelper.getText(await ElementHelper.getElementByText("kavithasub"));
        console.log(`Verifying Username: ${usernameText}`);
        if (usernameText !== "kavithasub") {
            throw new Error(`Username mismatch! Expected "kavithasub", Found "${usernameText}"`);
        }

        console.log("Profile Verification Successful!");
    }
}

module.exports = new ProfilePage();

