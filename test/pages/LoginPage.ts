import ActionHelper from '../helpers/actionHelper';

class LoginPage {
    // iOS Selectors
    get iosLoginBtn() { return $('~Log in'); }
    get iosUsernameField() { return $('//XCUIElementTypeTextField[@name="Username or Email"]'); }
    get iosPasswordField() { return $('//XCUIElementTypeSecureTextField[@name="Password"]'); }
    get iosSignInBtn() { return $('//XCUIElementTypeButton[@name="Sign in"]'); }
    get iosTapOutside() { return $('//XCUIElementTypeImage[@name="Company Logo"]'); }

    // Android Selectors
    get androidLoginBtn() { return $('//android.widget.TextView[@text="Log in"]'); }
    get androidUsernameField() { return $('//android.widget.EditText[@resource-id="signInName"]'); }
    get androidPasswordField() { return $('//android.widget.EditText[@resource-id="password"]'); }
    get androidSignInBtn() { return $('//android.widget.Button[@resource-id="next"]'); }

    async login(username: string, password: string) {
        if ((global as any).driver.isIOS) {
            await ActionHelper.clickElement(this.iosLoginBtn);
            console.log('Clicked Login button (iOS).');

            // Handle alert if present
            try {
                if (await (global as any).driver.getAlertText()) {
                    const alertText = await (global as any).driver.getAlertText();
                    console.log(`Alert detected: ${alertText}`);
                    await (global as any).driver.acceptAlert();
                    console.log('iOS alert accepted.');
                }
            } catch (e) {
                console.log('No alert present.');
            }

            await ActionHelper.typeText(this.iosUsernameField, username);
            console.log('Entered username (iOS).');

            await ActionHelper.typeText(this.iosPasswordField, password);
            console.log('Entered password (iOS).');

            try {
                await this.iosTapOutside.click();
                console.log('Tapped Company Logo to dismiss keyboard (iOS).');
            } catch (e) {
                console.warn('Could not tap Company Logo.');
            }

            await ActionHelper.clickElement(this.iosSignInBtn);
            console.log('Clicked Sign In (iOS).');
        } else {
            await ActionHelper.clickElement(this.androidLoginBtn);
            console.log('Clicked Login button (Android).');

            await ActionHelper.typeText(this.androidUsernameField, username);
            console.log('Entered username (Android).');

            await ActionHelper.typeText(this.androidPasswordField, password);
            console.log('Entered password (Android).');

            await ActionHelper.clickElement(this.androidSignInBtn);
            console.log('Clicked Sign-In button (Android).');
        }
    }
}

export default new LoginPage();