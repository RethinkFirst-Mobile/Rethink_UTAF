import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class ProgramPropertiesPage extends MobileBasePage {
  private dataCollectionModeLocator!: string;

  set dataCollection(name: string) {
    this.dataCollectionModeLocator = `//android.widget.TextView[@text=.,'${name}')]`;
  }

  get dataCollectionMode() {
    return driver.isAndroid ? $(this.dataCollectionModeLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get additionalComments() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Additional Comments…"]/..').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
}
export const programPropertiesPage = new ProgramPropertiesPage();
