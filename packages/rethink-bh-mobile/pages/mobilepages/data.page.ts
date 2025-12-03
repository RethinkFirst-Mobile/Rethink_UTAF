/* eslint-disable class-methods-use-this */
import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class DataPage extends MobileBasePage {
  get dataTitle() {
    return driver.isAndroid
      ? $(
          '//android.view.View[@content-desc="Include Completed"]/..//android.widget.TextView[@text="Data"]',
        ).getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get dataMenuIcon() {
    return driver.isAndroid
      ? $(
          '//android.widget.TextView[@text="Calendar"]/../following-sibling::android.view.View/android.widget.TextView[@text="Data"]',
        ).getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get includeButton() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Include Completed"]').getElement()
      : $('#iOSLocator').getElement();
    // locator for Android
  }

  get plusIcon() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="New Session"]').getElement()
      : $('#iOSLocator').getElement();
    // locator for Android
  }

  get editIcon() {
    return driver.isAndroid
      ? $('//android.view.View[contains(@content-desc,"!NE !NE")]').getElement()
      : $('#iOSLocator').getElement();
    // locator for Android
  }
}
export const dataPage = new DataPage();
