import { MilliSeconds } from '../../globals/enums/milliseconds.enum';

export class MobileBasePage {
  async type(element: WebdriverIO.Element, text: string, timeoutValue = MilliSeconds.XL) {
    await this.waitForPresence(element, timeoutValue);
    await element.setValue(text);
  }

  async getText(element: WebdriverIO.Element, timeoutValue = MilliSeconds.XL) {
    await this.waitForPresence(element, timeoutValue);
    return element.getText();
  }

  async getValue(element: WebdriverIO.Element, timeoutValue = MilliSeconds.XL) {
    await this.waitForPresence(element, timeoutValue);
    return element.getValue();
  }

  async waitForPresence(element: WebdriverIO.Element, timeoutValue = MilliSeconds.XL) {
    await element.waitForDisplayed({
      timeout: timeoutValue,
      timeoutMsg: `Exception : waitForPresence - element (${element.selector}) did not appear even after timeout of ${timeoutValue} MilliSeconds`,
    });
  }

  async click(element: WebdriverIO.Element) {
    await element.waitForClickable({ timeout: 5000, timeoutMsg: 'Element was not clickable.' });
    await element.click();
  }

  async tap(element: WebdriverIO.Element) {
    await element.waitForClickable({ timeout: 5000, timeoutMsg: 'Element was not clickable.' });
    await element.tap();
  }

  async isDisplayed(element: WebdriverIO.Element) {
    return element.isDisplayed();
  }

  async isEnabled(element: WebdriverIO.Element) {
    return element.isEnabled();
  }

  async swipe(
    swipeDirection: 'up' | 'down' | 'left' | 'right',
    swipeDuration = MilliSeconds.XXXS,
    percent?: number,
    element?: WebdriverIO.Element,
  ) {
    await browser.swipe({
      direction: swipeDirection,
      duration: swipeDuration,
      percent: percent,
      scrollableElement: element,
    });
  }

  async longPress(element: WebdriverIO.Element, pressDuration = MilliSeconds.XXXS) {
    await this.waitForPresence(element, MilliSeconds.XXS);
    await element.longPress({ duration: pressDuration });
  }

  async scrollToBottom() {
    await this.swipe('down', MilliSeconds.XXXS, 1.0);
  }

  async scrollToTop() {
    await this.swipe('up', MilliSeconds.XXXS, 0.0);
  }

  async scrollToWebElement(element: WebdriverIO.Element) {
    await element.scrollIntoView({ block: 'center', inline: 'center' });
  }

  async scrollToMobileElement(
    element: WebdriverIO.Element,
    scrollDirection?: 'up' | 'down' | 'left' | 'right',
    maxScrolls?: number,
    scrollableElement?: WebdriverIO.Element,
  ) {
    await element.scrollIntoView({
      direction: scrollDirection,
      maxScrolls: maxScrolls,
      scrollableElement: scrollableElement,
    });
  }

  // // Add Drag and Drop Action
  // public void dragAndDropAction(WebElement element, int endX, int endY)
  // {
  //     ((JavascriptExecutor) driver).executeScript("mobile: dragGesture", ImmutableMap.of(
  //             "elementId", ((RemoteWebElement) element).getId(),
  //             "endX", endX,
  //             "endY", endY
  //     ));
  // }

  // // Add Methods for pressing Mobile Keys
  // public void pressKeyCodeAction(int keyCode)
  // {
  //     ((JavascriptExecutor) driver).executeScript("mobile: pressKeyCode", ImmutableMap.of(
  //             "keycode", keyCode
  //     ));
  //   }

  // Add Touch related actions
  // Add Rotate Method
  // Add Clear method
  // Add Pinch and Zoom methods
  // Add Multi touch actions
  // Add get Attribute Value method
  // Add is Enabled method
  // Add is Selected method
  // Add get Size method
  // Add get Location method
  // Add activate App method
  // Add background App method
  // Add close App method
  // Add reset App method
  // Add install App method
  // Add remove App method
  // Add launch App method
  // Add battery Info method
  // Add device Time method
  // add device Orientation method
  // add device Lock and Unlock methods
  // add device Network Connection methods
  // add device Shake method
  // add finger Print method
  // add face ID method
  // add face Unlock method
  // add hide Keyboard method
  // add mobile Gestures methods
  // add phone Call methods
  // add phone SMS methods
  // add user Location method
  // add user Notifications method
  // add user Permissions method
  // add zoom method
  // Add method to input values slowly like human typing
  // Connection Status - AIRPLANE/WIFI/DATA/HOTSPOT ETC.,
  //
}
