/* eslint-disable class-methods-use-this */
import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class DataPage extends MobileBasePage {
  get dataButton() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="Data"]').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get dataTitle() {
    return driver.isAndroid
      ? $('(//android.widget.TextView[@text="Data"])[1]').getElement()
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
      ? $('//android.view.View[@content-desc="Bug Bun, Wednesday, Nov 19, 5:48pm"]').getElement()
      : $('#iOSLocator').getElement();
    // locator for Android
  }
}
export const samplePage = new DataPage();
