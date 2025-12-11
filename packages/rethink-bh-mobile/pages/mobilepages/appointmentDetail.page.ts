import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class AppointmentDetailPage extends MobileBasePage {
  private selectTimeVerificationLocator!: string;
  private selectedTemplateLocator!: string;

  // #region ***************DETAILS_TABLocators***************

  get collectData() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Collect Data"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  // #endregion

  // #region ***************NOTES_TABLocators***************

  get selectTemplate() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Select Template"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get searchTemplate() {
    return driver.isAndroid
      ? $('//android.widget.EditText[@content-desc="Search"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  set selectedTemplateName(name: string) {
    this.selectedTemplateLocator = `//android.widget.TextView[@text=.,'${name}')]`;
  }

  get selectedTemplate() {
    return driver.isAndroid ? $(this.selectedTemplateLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  // #endregion

  // #region ***************VERIFY_TABLocators***************

  get staffVerificationSection() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Staff Verification"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get actualStartTime() {
    return driver.isAndroid
      ? $(
          '//android.widget.TextView[@text="Actual Start Time:"]/following-sibling::android.widget.TextView[1]',
        ).getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get actualEndTime() {
    return driver.isAndroid
      ? $(
          '//android.widget.TextView[@text="Actual End Time:"]/following-sibling::android.widget.TextView[1]',
        ).getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectHour() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Select hour"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectMinute() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Select minutes"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  set selectTimeVerification(action: string) {
    this.selectTimeVerificationLocator = `//android.widget.TextView[@text=.,'${action}')]`;
  }

  get selectTimeVerificationValue() {
    return driver.isAndroid ? $(this.selectTimeVerificationLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get inputModePicker() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="select input mode"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get inputHours() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="for hour"]/..').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get inputMinutes() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="for minute"]/..').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get clockPickerIcon() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="select picker mode"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get verifyAsStaff() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Verify as Staff"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get parentVerificationSection() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Parent/Guardian Verification"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get parentName() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Parent Name"]/../android.widget.EditText[1]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get relationStatus() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Relation"]/../android.widget.EditText[2]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get mandateFieldError() {
    return driver.isAndroid
      ? $('//android.widget.TextView[contains(@text,"Please fill out all required fields.")]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get addSignature() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Tap to add signature"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get signature() {
    return driver.isAndroid
      ? $('//androidx.compose.ui.viewinterop.ViewFactoryHolder').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get clearSignature() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Clear"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  // #endregion
  
}
export const appointmentDetailPage = new AppointmentDetailPage();
