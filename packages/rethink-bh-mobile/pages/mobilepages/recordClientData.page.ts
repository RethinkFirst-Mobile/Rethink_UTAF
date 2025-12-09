import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class RecordClientDataPage extends MobileBasePage {
  private clientSelectionLocator!: string;
  private skillSelectionLocator!: string;
  private behaviorSelectionLocator!: string;

  set clientName(clientNameVal: string) {
    this.clientSelectionLocator = `//android.widget.TextView[@text=(.,'${clientNameVal}')]`;
  }

  get client() {
    return driver.isAndroid ? $(this.clientSelectionLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  set skill(skillName: string) {
    this.skillSelectionLocator = `//android.widget.TextView[@text=(.,'${skillName}')]`;
  }

  get selectedSkill() {
    return driver.isAndroid ? $(this.skillSelectionLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  set behavior(behaviorName: string) {
    this.behaviorSelectionLocator = `//android.widget.TextView[@text=(.,'${behaviorName}')]`;
  }

  get selectedBehavior() {
    return driver.isAndroid ? $(this.behaviorSelectionLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get programDetails() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Program Details"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
}
export const recordClientDataPage = new RecordClientDataPage();
