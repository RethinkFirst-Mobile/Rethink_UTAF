import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class LoginPage extends MobileBasePage {
  private environmentSelectionLocator!: string;
  private environmentSelectionLocator_iOS!: string;

  get rethinkLogo() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Rethink BH Logo"]').getElement()
      : $('//XCUIElementTypeImage[@name="Rethink Logo"]').getElement();
  }

  get inputUsername() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Username"]/..').getElement()
      : $('//XCUIElementTypeTextField[@name="Username"]').getElement();
  }

  get inputPassword() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Password"]/..').getElement()
      : $('//XCUIElementTypeSecureTextField[@name="Password"]').getElement();
  }

  get login() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Login"]').getElement()
      : $('//XCUIElementTypeButton[@name="Sign In"]').getElement();
  }

  get rememberMe() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Remember Me"]/..').getElement()
      : $('//XCUIElementTypeSwitch[@name="Remember Me"]').getElement();
  }

  get faceIdImage() {
    return driver.isAndroid
      ? $('#Android Locator').getElement()
      : $('(//XCUIElementTypeSwitch[@value="0"])[2]').getElement();
  }

  get forgotUsername() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@content-desc="Forgot   username"]').getElement()
      : $('//XCUIElementTypeButton[@name="ForgotUsername"]').getElement();
  }

  get forgotPassword() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@content-desc="Forgot   password"]').getElement()
      : $('//XCUIElementTypeButton[@name="ForgotPassword"]').getElement();
  }

  get forgotIText() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="I forgot my"]').getElement()
      : $('//XCUIElementTypeStaticText[@name="I forgot my"]').getElement();
  }

  get inputResetCredentials() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Email"]/..').getElement()
      : $('//XCUIElementTypeTextField[@name="ForgotCredentialsEmail"]').getElement();
  }

  get submit() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Submit"]').getElement()
      : $('//XCUIElementTypeButton[@name="ForgotCredentialsSubmit"]').getElement();
  }

  get cancel() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Cancel"]').getElement()
      : $('//XCUIElementTypeButton[@name="ForgotCredentialsCancel"]').getElement();
  }

  get termsOfUse() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Terms of Use"]').getElement()
      : $('//XCUIElementTypeButton[@name="Terms of Use"]').getElement();
  }

  get errorPopup() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Could not login."]').getElement()
      : $('//XCUIElementTypeStaticText[@name="Failed to login"]').getElement();
  }

  get termsOfUsePopUp() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Do you agree to the Terms of Use?"]').getElement()
      : $('#iOS Locator').getElement();
  }

  get yes() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="Yes"]').getElement() : $('#iOS Locator').getElement();
  }

  get no() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="No"]').getElement() : $('#iOS Locator').getElement();
  }

  get mandateFieldError() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="This is a required field."]').getElement()
      : $('#iOS Locator').getElement();
  }

  get inputEmailFormatError() {
    return driver.isAndroid
      ? $('//android.widget.TextView[contains(@text,"Input an email in the format: example@example.com")]').getElement()
      : $('//XCUIElementTypeStaticText[@name="Please enter a valid email address."]').getElement();
  }

  get ok() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="OK"]').getElement()
      : $('//XCUIElementTypeButton[@name="OK"]').getElement(); // locator for Android
  }

  set environmentChooser(envValue: string) {
    this.environmentSelectionLocator = `//android.view.View[@content-desc=(.,'${envValue}')]`;
    this.environmentSelectionLocator_iOS = `//XCUIElementTypeStaticText[@name="${envValue}"]`;
  }
  get chooseEnvironment() {
    return driver.isAndroid
      ? $(this.environmentSelectionLocator).getElement()
      : $(this.environmentSelectionLocator_iOS).getElement();
  }

  async environmentChooserOptions() {
    await super.click(await this.rethinkLogo);
    await super.click(await this.chooseEnvironment);
    await super.click(await this.ok);
  }

  async loginToApp(username: string, password: string) {
    await super.type(await this.inputUsername, username);
    await super.type(await this.inputPassword, password);
    await super.click(await this.login);
  }
}
export const loginPage = new LoginPage();
