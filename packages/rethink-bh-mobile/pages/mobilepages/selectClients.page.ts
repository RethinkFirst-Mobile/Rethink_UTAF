/* eslint-disable class-methods-use-this */
import { MilliSeconds } from 'globals/enums/milliseconds.enum';
import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class SelectClientsPage extends MobileBasePage {
  get selectClientsTitle() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Select Clients"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get searchInput() {
    return driver.isAndroid
      ? $('//android.widget.EditText[@content-desc="Client Search"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get clearButton() {
    return driver.isAndroid
      ? $('(//androidx.compose.ui.platform.ComposeView//android.widget.Button)[1]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get backButton() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Back"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectButton() {
    return driver.isAndroid
      ? $('//androidx.compose.ui.platform.ComposeView//android.view.View[2]/android.widget.Button').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get eyeIcon() {
    return driver.isAndroid
      ? $('//android.widget.ImageView[@content-desc="Preview Program !!!, !!!"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get checkbox() {
    return driver.isAndroid
      ? $('//android.widget.CheckBox[@content-desc="!!!, !!!"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  //   const items = await $$('//android.widget.ImageView[starts-with(@content-desc, "Preview Program")]');
  //   for (const item of items) {
  //   const desc = await item.getAttribute('content-desc');
  //   console.log(`Found: ${desc}`);
  //   await item.click(); // or any other action
  // }
  async clickOnClearButton() {
    await super.click(await this.clearButton);
  }
  async clickOnEyeIcon() {
    await super.click(await this.eyeIcon);
  }
  async clickOnSelectButton() {
    await super.click(await this.selectButton);
  }
  async clickOnBackButton() {
    await super.click(await this.backButton);
  }
  async clickOnSearchInput() {
    await super.typeText(await this.searchInput, 'ABC', MilliSeconds.S);
  }
}
export const samplePage = new SelectClientsPage();
