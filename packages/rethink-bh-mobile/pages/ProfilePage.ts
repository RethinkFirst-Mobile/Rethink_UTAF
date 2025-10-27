/// <reference path="../global.d.ts" />
import ActionHelper from '../../../globals/mobile/actionHelper';

class ProfilePage {
    // iOS selectors
    get iosMoreBtn() {return $('-ios predicate string:type == "XCUIElementTypeStaticText" AND name == "More"');}
    get iosProfileBtn() {return $('//XCUIElementTypeStaticText[@name="Profile"]');}

    // Android selectors
    get androidMoreBtn() {return $('//android.widget.TextView[@text="More"]');}
    get androidProfileBtn() {return $('//android.view.View[@content-desc="Profile button icon"]');}

    // Shared selector
    get profileUsernameText() {
        return $('//*[contains(@text, "kavithasub") or @name="kavithasub"]');}

    async navigateToProfile() {
        if ((global as any).driver.isIOS) {
            await ActionHelper.clickElement(this.iosMoreBtn);
            console.log("Clicked 'More' button (iOS).");

            await ActionHelper.clickElement(this.iosProfileBtn);
            console.log("Clicked 'Profile' button (iOS).");
        } else {
            await ActionHelper.clickElement(this.androidMoreBtn);
            console.log("Clicked 'More' button (Android).");

            await ActionHelper.clickElement(this.androidProfileBtn);
            console.log("Clicked 'Profile' button (Android).");
        }
    }

    async verifyProfileDetails() {
        const usernameText = await ActionHelper.getText(this.profileUsernameText);
        console.log(`Verifying Username: ${usernameText}`);
        if (usernameText !== "kavithasub") {
            throw new Error(`Username mismatch! Expected "kavithasub", Found "${usernameText}"`);
        }

        console.log("Profile Verification Successful!");
    }
}

export default new ProfilePage();
