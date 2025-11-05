import { MilliSeconds } from '../../globals/enums/milliseconds.enum';

export class MobileBasePage {
  async typeText(element: WebdriverIO.Element, text: string, timeoutValue = MilliSeconds.XL) {
    await this.waitForPresence(element, timeoutValue);
    await element.setValue(text);
  }

  async getText(element: WebdriverIO.Element, timeoutValue = MilliSeconds.XL) {
    await this.waitForPresence(element, timeoutValue);
    return element.getText();
  }

  /**
   * Waits for an element to be displayed before proceeding with other actions.
   * @param element The WebdriverIO element object.
   * @param timeout The maximum time to wait (default 10000ms).
   */
  async waitForPresence(element: WebdriverIO.Element, timeoutValue = MilliSeconds.XL) {
    await element.waitForDisplayed({
      timeout: timeoutValue,
      timeoutMsg: `Exception : waitForPresence - element (${element.selector}) did not appear even after timeout of ${timeoutValue} MilliSeconds`,
    });
  }

  /**
   * Clicks on an element after waiting for it to be displayed and clickable.
   * @param element The WebdriverIO element object.
   */
  async click(element: WebdriverIO.Element) {
    await this.waitForPresence(element);
    await element.waitForClickable({ timeout: 5000, timeoutMsg: 'Element was not clickable.' });
    await element.click();
  }

  /**
   * Sets a value in a text field after waiting for it and clearing it.
   * @param element The WebdriverIO element object.
   * @param value The text to enter.
   */
  async setValue(element: WebdriverIO.Element, value: string): Promise<void> {
    await this.waitForPresence(element);
    await element.clearValue();
    await element.setValue(value);
  }

  /**
   * Checks if an element is currently displayed without throwing an error if it's not found immediately.
   * @param element The WebdriverIO element object.
   * @returns True if displayed, false otherwise.
   */
  static async isDisplayed(element: WebdriverIO.Element): Promise<boolean> {
    try {
      // Using a shorter wait for just a presence check
      return await element.isDisplayed();
    } catch (error) {
      console.warn('Element not found for isDisplayed check: ' + (error as Error).message);
      return false;
    }
  }

  /**
   * Performs a tap gesture on a specific element or coordinates.
   * @param element Optional element object.
   * @param x X coordinate (if element not used).
   * @param y Y coordinate (if element not used).
   */
  static async tap(element?: WebdriverIO.Element, x?: number, y?: number): Promise<void> {
    if (element) {
      await element.waitForDisplayed({ timeout: 10000 });
      await element.click(); // WebdriverIO click often translates to a native tap action
    } else if (x !== undefined && y !== undefined) {
      await driver.performActions([
        {
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [{ type: 'tap', x, y }],
        },
      ]);
    } else {
      throw new Error('Invalid parameters for tap method. Provide either an element or x/y coordinates.');
    }
  }

  // Swipe methods remain the same as they use global driver window size calculations
  static async swipe(
    startPercentage: { x: number; y: number },
    endPercentage: { x: number; y: number },
    duration = 800,
  ): Promise<void> {
    // ... (implementation as before, using driver.getWindowSize()) ...
    const { width, height } = await driver.getWindowSize();
    const startX = width * startPercentage.x;
    const startY = height * startPercentage.y;
    const endX = width * endPercentage.x;
    const endY = height * endPercentage.y;

    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: startX, y: startY },
          { type: 'pointerDown', button: 0 },
          { type: 'pause', duration: 100 },
          { type: 'pointerMove', duration: duration, x: endX, y: endY },
          { type: 'pointerUp', button: 0 },
        ],
      },
    ]);
  }

  static async swipeUp(): Promise<void> {
    await this.swipe({ x: 0.5, y: 0.8 }, { x: 0.5, y: 0.2 }, 500);
  }

  static async swipeDown(): Promise<void> {
    await this.swipe({ x: 0.5, y: 0.2 }, { x: 0.5, y: 0.8 }, 500);
  }
}
