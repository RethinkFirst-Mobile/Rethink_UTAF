import { MobileBasePage } from 'globals/mobile/mobile-base.page';

class ModalDialogComponent extends MobileBasePage {
  // #region ***************Confirmation Dialog Modal Locators***************
  //Getters and setters for Confirmation Dialog Modal Locators like Yes, No, Cancel, OK buttons

  private actionLocator!: string;
  private bodyMessageLocator!: string;

  set actionType(buttonText: string) {
    this.actionLocator = `//android.widget.TextView[@text="${buttonText}"]`;
  }

  get action() {
    return driver.isAndroid ? $(this.actionLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  set bodyMessage(bodyText: string) {
    this.bodyMessageLocator = `//android.widget.TextView[contains(@text,"${bodyText}")]`;
  }

  get message() {
    return driver.isAndroid ? $(this.bodyMessageLocator).getElement() : $('#iOSLocator').getElement(); // locator for Android
  }

  // #endregion
}
export const modalDialogComponent = new ModalDialogComponent();
