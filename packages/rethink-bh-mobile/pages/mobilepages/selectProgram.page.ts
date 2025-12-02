import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class SelectProgramsPage extends MobileBasePage {
  private clientSelectionLocator!: string;

  get selectProgramsPageTitle() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Select Programs"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get backwardIcon() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Back"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  set selectClient(Name: string) {
    this.clientSelectionLocator = `//android.widget.TextView[@text=(.,'${Name}')]`;
  }

  get clientName() {
    return driver.isAndroid ? $(this.clientSelectionLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  get behaviorsCheckLists() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Behaviors"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectAllBehaviorsCheckbox() {
    return driver.isAndroid
      ? $('//android.widget.CheckBox[@content-desc="Select All Behaviors"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get skillsCheckLists() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Skills"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get selectAllSkillsCheckbox() {
    return driver.isAndroid
      ? $('//android.widget.CheckBox[@content-desc="Select All Skills"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get select() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Select"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
}
export const selectProgramsPage = new SelectProgramsPage();
