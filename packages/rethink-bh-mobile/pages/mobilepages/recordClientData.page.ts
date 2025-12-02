import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class RecordClientDataPage extends MobileBasePage {
  private clientSelectionLocator!: string;

  get recordClientDataPageTitle() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Record Client Data"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get backwardIcon() {
    return driver.isAndroid
      ? $('(//android.view.View[@content-desc="backIcon"])[2]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get moreInfoIcon() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="More Info"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get moreInfoDialogOK() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="OK"]').getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get skillsTab() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="SKILLS"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get behaviorsTab() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="BEHAVIORS"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  set selectClient(Name: string) {
    this.clientSelectionLocator = `//android.widget.TextView[@text=(.,'${Name}')]`;
  }

  get clientName() {
    return driver.isAndroid ? $(this.clientSelectionLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectedSkill() {
    return driver.isAndroid
      ? $('(//android.view.View[@content-desc="backIcon"])[1]').getElement()
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

  get selectedBehavior() {
    return driver.isAndroid
      ? $('(//android.view.View[@content-desc="backIcon"])[1]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get programDetailsIcon() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Program Details"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
}
export const recordClientDataPage = new RecordClientDataPage();
