export class MobileBasePage {
  async clickElement(element: WebdriverIO.Element) {
    await element.waitForDisplayed({ timeout: 20000 });
    await element.click();
  }

  async typeText(element: WebdriverIO.Element, text: string) {
    await element.waitForDisplayed({ timeout: 20000 });
    await element.click();
    await element.setValue(text);
  }

  async getText(element: WebdriverIO.Element): Promise<string> {
    await element.waitForDisplayed({ timeout: 20000 });
    return element.getText();
  }
}
