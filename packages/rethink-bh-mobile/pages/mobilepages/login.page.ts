import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class LoginPage extends MobileBasePage {
  private environmentSelectionLocator!: string;

  get rethinkLogo() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Rethink BH Logo"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get inputUsername() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Username"]/..').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get inputPassword() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Password"]/..').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get loginButton() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Login"]').getElement()
      : $('#iOSLocator').getElement(); //locator for Android
  }

  get rememberMe() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Remember Me"]/..').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get forgotUsername() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@content-desc="Forgot   username"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get forgotPassword() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@content-desc="Forgot   password"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get inputResetCredentials() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Email"]/..').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get submitButton() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Submit"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get cancelButton() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Cancel"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get termsOfUse() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Terms of Use"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get errorPopup() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Could not login."]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get termsOfUsePopUp() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Do you agree to the Terms of Use?"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get yesButton() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="Yes"]').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get noButton() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="No"]').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get mandateFieldError() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="This is a required field."]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get inputEmailFormatError() {
    return driver.isAndroid
      ? $('//android.widget.TextView[contains(@text,"Input an email in the format: example@example.com")]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get okButton() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="OK"]').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  set environmentChooser(envValue: string) {
    this.environmentSelectionLocator = `//android.view.View[@content-desc=(.,'${envValue}')]`;
  }
  get chooseEnvironment() {
    return driver.isAndroid ? $(this.environmentSelectionLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  async environmentChooserOptions() {
    await super.click(await this.rethinkLogo);
    await super.click(await this.chooseEnvironment);
    await super.click(await this.okButton);
  }

  async loginToApp(username: string, password: string) {
    await super.type(await this.inputUsername, username);
    await super.type(await this.inputPassword, password);
    await super.click(await this.loginButton);
  }
}
export const loginPage = new LoginPage();
