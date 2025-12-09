import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class SelectProgramsPage extends MobileBasePage {
  private clientSelectionLocator!: string;

  set clientName(clientNameVal: string) {
    this.clientSelectionLocator = `//android.widget.TextView[@text=(.,'${clientNameVal}')]`;
  }

  get client() {
    return driver.isAndroid ? $(this.clientSelectionLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get behaviorsCheckLists() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Behaviors"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectAllBehaviors() {
    return driver.isAndroid
      ? $('//android.widget.CheckBox[@content-desc="Select All Behaviors"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get skillsCheckLists() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Skills"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectAllSkills() {
    return driver.isAndroid
      ? $('//android.widget.CheckBox[@content-desc="Select All Skills"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectPrograms() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Select"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
}
export const selectProgramsPage = new SelectProgramsPage();
