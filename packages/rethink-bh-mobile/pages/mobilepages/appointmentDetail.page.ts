import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class AppointmentDetailPage extends MobileBasePage {
  private selectTimeVerificationLocator!: string;

  get appointmentDetailPageTitle() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Appointment Detail"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get save() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="Save"]').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get backwardIcon() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="backIcon"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get detailsMenu() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="DETAILS"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get notesMenu() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="NOTES"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get verifyMenu() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="VERIFY"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get collectData() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Collect Data"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectTemplate() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Select Template"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectTemplateBackIcon() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Back"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectTemplateSearchBox() {
    return driver.isAndroid
      ? $('//android.widget.EditText[@content-desc="Search"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectTemplateClearSearchIcon() {
    return driver.isAndroid
      ? $('//android.widget.ImageView[@content-desc="Clear Search"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectedTemplateListItem() {
    return driver.isAndroid
      ? $('//android.widget.ScrollView/android.view.View').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get clear() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Clear"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get warningPopupForClearSelectedTemplate() {
    return driver.isAndroid
      ? $(
          '//android.widget.TextView[contains(@text,"Are you sure you want to clear the selected template?")]',
        ).getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get yes() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="Yes"]').getElement() : $('#iOSLocator').getElement(); // locator for Android //need to check as duplicate
  }

  get cancel() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Cancel"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get ok() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="OK"]').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get modifyTemplateSelectionConfirmationDialog() {
    return driver.isAndroid
      ? $(
          '//android.widget.TextView[contains(@text,"You will lose all your changes when you make a selection. Continue?")]',
        ).getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get confirmationDialogYes() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="Yes"]').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get confirmationDialogNo() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="No"]').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get staffVerificationSection() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Staff Verification"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get staffActualTime() {
    return driver.isAndroid
      ? $('//(android.widget.TextView[matches(@text,"^[0-9]{1,2}:[0-9]{1,2} ?(am|pm)?$")])[1]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get staffEndTime() {
    return driver.isAndroid
      ? $('//(android.widget.TextView[matches(@text,"^[0-9]{1,2}:[0-9]{1,2} ?(am|pm)?$")])[2]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectHourValue() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Select hour"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectMinuteValue() {
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

  get selectHourMarker() {
    return driver.isAndroid
      ? $('//android.view.View[matches(@content-desc, "[0-9]{1,2} o\'clock")]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectMinutesMarker() {
    return driver.isAndroid
      ? $('//android.view.View[matches(@content-desc, "[0-9]{1,2} minutes")]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get inputHoursMinutesManuallyPickerIcon() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="select input mode"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get inputHoursValueManually() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="for hour"]/..').getElement()
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

  get inputParentName() {
    return driver.isAndroid
      ? $('//(android.widget.TextView[@text="Parent Name"]/../android.widget.EditText)[1]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get inputRelationStatus() {
    return driver.isAndroid
      ? $('//(android.widget.TextView[@text="Relation"]/../android.widget.EditText)[2]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get mandateFieldError() {
    return driver.isAndroid
      ? $('//android.widget.TextView[contains(@text,"Please fill out all required fields.")]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get tapToAddSignatureBox() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Tap to add signature"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get inputSignature() {
    return driver.isAndroid
      ? $('//androidx.compose.ui.viewinterop.ViewFactoryHolder').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  get clearSignatureIcon() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Clear"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
}
export const appointmentDetailPage = new AppointmentDetailPage();
