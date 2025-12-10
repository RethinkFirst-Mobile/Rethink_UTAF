/* eslint-disable class-methods-use-this */
import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class SelectClientsPage extends MobileBasePage {
  get pageTitle() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Select Clients"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get searchClient() {
    return driver.isAndroid
      ? $('//android.widget.EditText[@content-desc="Client Search"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get clearClientSearch() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Clear"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get back() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Back"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectClients() {
    return driver.isAndroid
      ? $('	//android.widget.TextView[@text="Select"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get previewProgram() {
    return driver.isAndroid
      ? $(
          '(//android.widget.TextView[@text="Select"]/../following-sibling::android.view.View/android.view.View/android.widget.ImageView)[1]',
        ).getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectClientsCheckbox() {
    return driver.isAndroid
      ? $(
          '(//android.widget.TextView[@text="Select"]/../following-sibling::android.view.View/android.view.View/android.widget.CheckBox)[1]',
        ).getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
}
export const selectClientsPage = new SelectClientsPage();
