import { MobileBasePage } from 'globals/mobile/mobile-base.page';

class ModalDialogComponent extends MobileBasePage {
  // #region ***************Confirmation Dialog Modal Locators***************
  //Getters and setters for Confirmation Dialog Modal Locators like Yes, No, Cancel, OK buttons
  private dialogActionsLocator!: string;
  private dialogBodyLocator!: string;

  set confirmDialog(actionsName: string) {
    this.dialogActionsLocator = `//android.widget.TextView[@text="${actionsName}"]`;
  }

  get DialogActions() {
    return driver.isAndroid ? $(this.dialogActionsLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }
  // #endregion

  // #region ***************Confirmation Dialog Body Text Locators***************
  //Getters and setters for Confirmation Dialog Body Text Locators

  set confirmDialogBody(bodyText: string) {
    this.dialogBodyLocator = `//android.widget.TextView[contains(@text,"${bodyText}")]`;
  }

  get DialogBody() {
    return driver.isAndroid ? $(this.dialogBodyLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }
}
export const modalDialogComponent = new ModalDialogComponent();
