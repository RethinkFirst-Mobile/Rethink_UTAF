import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class CommonPage extends MobileBasePage {
  private pageTitleLocator!: string;
  private selectTabsLocator!: string;

  set pageTitleName(titleName: string) {
    this.pageTitleLocator = `//android.widget.TextView[@text=.,'${titleName}')]`;
  }

  get pageTitle() {
    return driver.isAndroid ? $(this.pageTitleLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get save() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="Save"]').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get back() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Back"] | //android.view.View[@content-desc="backIcon"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  set tabName(tabText: string) {
    this.selectTabsLocator = `//android.widget.TextView[@text=.,'${tabText}')]`;
  }

  get tab() {
    return driver.isAndroid ? $(this.selectTabsLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get clear() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Clear"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get moreInfo() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="More Info"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get add() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="add"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get remove() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="remove"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
}
export const commonPage = new CommonPage();
