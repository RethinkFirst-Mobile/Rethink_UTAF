import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class LoginPage extends MobileBasePage {
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
  get loginOKButton() {
    return driver.isAndroid ? $('//android.widget.Button').getElement() : $('#iOSLocator').getElement(); 
  }
  get rememberMe() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Remember Me"]/..').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  get forgotUsername() {
    return driver.isAndroid ? $('new UiSelector().text("username")').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }
  get forgotPassword() {
    return driver.isAndroid ? $('new UiSelector().text("password")').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }
  get inputResetCredentials() {
    return driver.isAndroid ? $('//android.widget.EditText').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }
  get submitButton() {
    return driver.isAndroid
      ? $('//(androidx.compose.ui.platform.ComposeView//android.widget.Button)[1]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  get cancelButton() {
    return driver.isAndroid
      ? $('//(androidx.compose.ui.platform.ComposeView//android.widget.Button)[2]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  get apiChooserQARadioOption() {
    return driver.isAndroid
      ? $('//android.view.ViewGroup//android.view.View[2]/android.view.View[2]').getElement()
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
  get mandateFieldError() {
    return driver.isAndroid
      ? $('(//android.widget.TextView[@text="This is a required field."])').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get inputEmailFormatError() {
    return driver.isAndroid
      ? $('new UiSelector().textContains("Input an email in the format: example@example.com")').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  async chooseApiQAOption() {
    await super.click(await this.rethinkLogo);
    await super.click(await this.apiChooserQARadioOption);
    await super.click(await this.loginOKButton);
  }

  async loginToApp(username: string, password: string) {
    await super.setValue(await this.inputUsername, username);
    await super.setValue(await this.inputPassword, password);
    await super.click(await this.loginOKButton);
  }
}
export const loginPage = new LoginPage();
