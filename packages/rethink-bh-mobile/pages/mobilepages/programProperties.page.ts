import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class ProgramPropertiesPage extends MobileBasePage {
  get programPropertiesPageTitle() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Program Properties"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get backwardIcon() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Back"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get moreInfoIcon() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="More Info"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get moreInfoDialogOKButton() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="OK"]').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get settingsTab() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="SETTINGS"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get dataTab() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="DATA"]').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get notesTab() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="NOTES"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get baselineRadioButton() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Baseline"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get interventionRadioButton() {
    return driver.isAndroid
      ? $('(//android.widget.TextView[@text="Intervention"])[2]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get yesButton() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="Yes"]').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get cancelButton() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Cancel"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get noButton() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="No"]').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get inputNoteComments() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Additional Comments…"]/..').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
}
export const programPropertiesPage = new ProgramPropertiesPage();
