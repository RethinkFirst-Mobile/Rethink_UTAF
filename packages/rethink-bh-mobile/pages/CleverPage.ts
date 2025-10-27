/// <reference path="../global.d.ts" />
import ActionHelper from '../../../globals/mobile/actionHelper';
import config from '../../../globals/mobile/config';

class CleverPage {
    get loginButton() { return $('//XCUIElementTypeButton[@name="Log in"]'); }
    get cleverLoginButton() { return $('//XCUIElementTypeButton[@name="Clever"]'); }
    get districtInput() { return $('//XCUIElementTypeOther[@value="\n"]'); }
    get districtSuggestion() { return $('//XCUIElementTypeOther[contains(@value,"Sandbox district")]'); }
    get districtConfirmation() { return $('//XCUIElementTypeStaticText[@name="#DEMO Vizzle Prod Sandbox District"]'); }
    get usernameField() { return $('//XCUIElementTypeTextField[@name="Username"]'); }
    get passwordField() { return $('//XCUIElementTypeSecureTextField[@name="Password"]'); }
    get cleverSubmitButton() { return $('(//XCUIElementTypeButton[@name="Log in"])[2]'); }
    get sessionHistory() { return $('//XCUIElementTypeButton[@name="Session History"]'); }

    async loginWithClever() {
        await ActionHelper.clickElement(this.loginButton);
        await driver.pause(10000);

        try {
            if (await driver.getAlertText()) {
                const alertText = await driver.getAlertText();
                console.log(`Alert detected: ${alertText}`);
                await driver.acceptAlert();
                console.log('iOS alert accepted.');
            }
        } catch (e) {
            console.log('No alert present.');
        }

        await ActionHelper.clickElement(this.cleverLoginButton);
        await this.districtInput.waitForDisplayed({ timeout: 10000 });
        await this.districtInput.click();
        await this.districtInput.setValue(config.districtId);
        await driver.pause(1000);

        await this.districtSuggestion.waitForDisplayed({ timeout: 10000 });
        await this.districtSuggestion.click();
        await this.districtConfirmation.waitForDisplayed({ timeout: 10000 });

        await this.usernameField.waitForDisplayed({ timeout: 10000 });
        await this.usernameField.click();
        await this.usernameField.setValue(config.cleverUsername);

        await this.passwordField.waitForDisplayed({ timeout: 10000 });
        await this.passwordField.click();
        await this.passwordField.setValue(config.cleverPassword);

        await this.cleverSubmitButton.waitForDisplayed({ timeout: 10000 });
        await this.cleverSubmitButton.click();

        await this.sessionHistory.waitForDisplayed({ timeout: 30000 });
    }
}

export default new CleverPage();
