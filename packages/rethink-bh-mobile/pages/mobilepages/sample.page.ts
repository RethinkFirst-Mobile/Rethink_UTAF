/* eslint-disable class-methods-use-this */
import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class SamplePage extends MobileBasePage {
  get inputUsername() {
    return driver.isAndroid ? $('#androidLocator').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  async logIn(username: string) {
    await super.setValue(await this.inputUsername, username);
  }
}
export const samplePage = new SamplePage();
