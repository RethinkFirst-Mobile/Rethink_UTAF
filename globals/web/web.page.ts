/* eslint-disable no-return-assign */
/* eslint-disable class-methods-use-this */
import { format } from 'date-fns';
import { Seconds } from '../enums/seconds.enum';

export class WebPage {
  async clearBrowserStorage() {
    await browser.deleteAllCookies();
    await browser.clearSessionStorage();
    await browser.clearLocalStorage();
  }

  async click(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    await this.waitForClickable(element, timeoutValue);
    await element.click();
  }

  async clearInput(element: WebdriverIO.Element) {
    await element.clearValue();
  }

  async clickElementUsingJS(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    await this.waitForClickable(element, timeoutValue);
    await browser.execute('return arguments[0].click()', element);
  }

  async getTextUsingJS(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    await this.waitForClickable(element, timeoutValue);
    return browser.execute('return arguments[0].value', element);
  }

  async clearValueUsingJS(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    await this.waitForClickable(element, timeoutValue);
    return browser.execute(`arguments[0].value =''`, element);
  }

  async deleteAllCookies() {
    await browser.deleteAllCookies();
  }

  async getElementsCount(elements: WebdriverIO.ElementArray, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(elements[0], timeoutValue);
    return elements.length;
  }

  async getAttributeValue(element: WebdriverIO.Element, attributeName: string) {
    await element.isExisting();
    return element.getAttribute(attributeName);
  }

  async getCssValue(element: WebdriverIO.Element, cssValue: string, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    return element.getCSSProperty(cssValue);
  }

  async getUrl() {
    return browser.getUrl();
  }

  async getActualWindowSize() {
    return browser.getWindowSize();
  }

  async getText(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    return element.getText();
  }

  async getTexts(elements: WebdriverIO.ElementArray, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(elements[0], timeoutValue);
    return elements.map(async (el) => el.getText());
  }

  async getSelectedOption(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    const selectedOption = await element.$('.//option[@selected="selected"]');
    if (await selectedOption.isDisplayed()) {
      return this.getText(selectedOption, timeoutValue);
    }
    return undefined;
  }

  async getCheckBoxStatus(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    const checkboxStatus = await element.isSelected();
    return checkboxStatus;
  }

  async getSelectOptions(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    const ddOptions: string[] = [];
    await this.waitForPresence(element, timeoutValue);
    // return (await element.$$('option')).map(async (el) => el.getText());
    const optionselement = await element.$$('option');
    for (let i = 0; i < await optionselement.length; i += 1) {
      ddOptions.push(await optionselement[i].getText());
    }
    return ddOptions;
  }

  async getValue(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    return element.getValue();
  }

  async getWindowTitle() {
    return browser.getTitle();
  }

  async highlightElement(element: WebdriverIO.Element) {
    await browser.execute(
      "arguments[0].setAttribute('style', arguments[1]);",
      element,
      'color: Red; background-color: yellow;',
    );
  }

  async sleep(timeoutValue = Seconds.XXL) {
    await browser.pause(timeoutValue);
  }

  async handleAlert(operation: 'ACCEPT' | 'DISMISS' | 'GET_TEXT' | 'SET_TEXT', value?: string) {
    await this.waitForAlert();
    switch (operation) {
      case 'ACCEPT':
        return browser.acceptAlert();
      case 'DISMISS':
        return browser.dismissAlert();
      case 'GET_TEXT':
        return browser.getAlertText();
      case 'SET_TEXT':
        if (!value) return browser.sendAlertText(value as string);
        throw new Error('Exception - handleAlert : please pass value to send text to Alert..!');
      default:
        throw new Error(
          'Exception - handleAlert : please pass on valid operation - Accept | Dismiss | getText | setText',
        );
    }
  }

  async isSelected(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    return element.isSelected();
  }

  async isEnabled(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    return element.isEnabled();
  }

  async isClickable(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    return element.isClickable();
  }

  async isDisplayed(element: WebdriverIO.Element) {
    return element.isDisplayed();
  }

  async Keyboard(key: string) {
    await browser.keys(key);
  }

  async maximizeWindowSize() {
    await browser.maximizeWindow();
  }

  async mouseHoverOver(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    await element.moveTo();
  }

  async navigateTo(url: string) {
    await browser.navigateTo(url);
  }

  async open(path: string) {
    if (path.includes('https')) {
      await browser.url(path);
    } else {
      await browser.url(`${browser.options.baseUrl}${path}`);
    }
  }

  async openNewWindow(path: string) {
    await browser.newWindow(path);
  }

  async refreshBrowser() {
    await browser.refresh();
    await this.waitForAjaxCall();
  }

  async scrollToElement(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await element.scrollIntoView({ block: 'center' });
    await this.waitForPresence(element, timeoutValue);
  }

  async selectByVisibleText(element: WebdriverIO.Element, value: string, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    await element.selectByVisibleText(value);
  }

  async selectByIndex(element: WebdriverIO.Element, index: number, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    await element.selectByIndex(index);
  }

  async selectByAttribute(
    element: WebdriverIO.Element,
    attribute: string,
    attributeValue: string,
    timeoutValue = Seconds.XXL,
  ) {
    await this.waitForPresence(element, timeoutValue);
    await element.selectByAttribute(attribute, attributeValue);
  }

  async slowTypeFlex(
    element: WebdriverIO.Element,
    text: string,
    intermediateDelay = 500,
    maxNoCharactersInChunk = 3,
    clear = true,
    timeoutValue = Seconds.XXL,
  ) {
    const textChuncks = text.match(new RegExp(`(.{1,${maxNoCharactersInChunk}})`, 'g'));
    await this.waitForPresence(element, timeoutValue);
    await this.waitForClickable(element, timeoutValue);

    if (clear) {
      await element.clearValue();
    }

    if (textChuncks) {
      // eslint-disable-next-line no-restricted-syntax
      for (const textChunk of textChuncks) {
        await browser.pause(intermediateDelay);
        await element.addValue(textChunk);
      }
    }
  }

  async switchToFrame(element: WebdriverIO.Element | number) {
    if (!(typeof element === 'number')) {
      await this.waitForPresence(element);
      await browser.switchToFrame(element);
    } else {
      await browser.switchToFrame(element);
    }
  }

  async switchToLastBrowserTab() {
    await browser.waitUntil(
      async () => {
        const handles = await browser.getWindowHandles();
        if (handles.length > 1) {
          await browser.switchToWindow(handles[handles.length - 1]);
          return true;
        }
        return false;
      },
      {
        timeout: Seconds.XXL,
        timeoutMsg: 'Exception : switchToLastBrowserTab - Unable to switch to last browser tab',
      },
    );
  }

  async switchToFirstBrowserTab() {
    await browser.waitUntil(
      async () => {
        const handles = await browser.getWindowHandles();
        if (handles.length > 1) {
          await browser.switchToWindow(handles[0]);
          return true;
        }
        return false;
      },
      {
        timeout: Seconds.XXL,
        timeoutMsg: 'Exception : switchToFirstBrowserTab - Unable to switch to first browser tab',
      },
    );
  }

  async switchToWindowHandle(winHandle: string) {
    await browser.switchToWindow(winHandle);
  }

  async switchToWindow(urlOrTitle: string | RegExp) {
    await browser.switchWindow(urlOrTitle);
  }

  // FIXME: This needs to be changed as per the latest updates from Shree
  async takescreenshot(path: string) {
    await browser.saveScreenshot(path);
  }

  async type(element: WebdriverIO.Element, sendKeys: string | number, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    await element.setValue(sendKeys);
  }

  async waitForBrowserUrlContains(url: string, timeoutValue = Seconds.XXL) {
    await browser.waitUntil(async () => (await browser.getUrl()).includes(url), {
      timeout: timeoutValue,
      timeoutMsg: `Exception : waitForBrowserUrlContains - url did not contain (${url}) even after timeout of ${timeoutValue} Seconds`,
    });
  }

  async waitForElementToHaveText(element: WebdriverIO.Element, expectedText: string, timeoutValue = Seconds.XXL) {
    await browser.waitUntil(async () => (await element.getText()).includes(expectedText), {
      timeout: timeoutValue,
      timeoutMsg: `Exception : waitForElementToHaveText - text (${expectedText}) did not appear on element (${element.selector}) even after timeout of ${timeoutValue} Seconds`,
    });
  }

  async waitForAttributeToHaveValue(
    element: WebdriverIO.Element,
    attributeName: string,
    expectedValue: string,
    timeoutValue = Seconds.XXL,
  ) {
    await browser.waitUntil(async () => (await element.getAttribute(attributeName)).includes(expectedValue), {
      timeout: timeoutValue,
      timeoutMsg: `Exception : waitForAttributeToHaveValue - value (${expectedValue}) did not appear on element (${element.selector}) even after timeout of ${timeoutValue} Seconds`,
    });
  }

  async waitForElementToHaveValue(
    element: WebdriverIO.Element,
    expectedValue: string,
    timeoutValue = Seconds.XXL,
  ) {
    await browser.waitUntil(async () => (await element.getValue()).includes(expectedValue), {
      timeout: timeoutValue,
      timeoutMsg: `Exception : waitForElementToHaveValue - value (${expectedValue}) did not appear on element (${element.selector}) even after timeout of ${timeoutValue} Seconds`,
    });
  }

  async waitForAlert(timeoutValue = Seconds.XXL) {
    await browser.waitUntil(() => browser.isAlertOpen(), {
      timeout: timeoutValue,
      timeoutMsg: `Exception : waitForAlert - Alert did not appear even after timeout of ${timeoutValue} Seconds`,
    });
  }

  async waitForEnable(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await element.waitForEnabled({
      timeout: timeoutValue,
      timeoutMsg: `Exception : waitForEnable - element (${element.selector}) is not enabled even after timeout of ${timeoutValue} seconds.`,
    });
  }

  async waitForDisable(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await element.waitForEnabled({
      timeout: timeoutValue,
      reverse: true,
      timeoutMsg: `Exception : waitForDisable - element (${element.selector}) is not disabled even after timeout of ${timeoutValue} seconds.`,
    });
  }

  async waitForPresence(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await element.isExisting();
    await element.waitForDisplayed({
      timeout: timeoutValue,
      timeoutMsg: `Exception : waitForPresence - element (${element.selector}) did not appear even after timeout of ${timeoutValue} Seconds`,
    });
  }

  async waitForAbsence(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await element.waitForDisplayed({
      timeout: timeoutValue,
      reverse: true,
      timeoutMsg: `Exception : waitForAbsence - element (${element.selector}) didnot disappear even after timeout of ${timeoutValue} Seconds`,
    });
  }

  async waitForClickable(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await element.waitForClickable({
      timeout: timeoutValue,
      timeoutMsg: `Exception : waitForClickable - Element (${element.selector}) not clickable even after timeout of ${timeoutValue} Seconds.`,
    });
  }

  // TODO: Need to update to use the format instead of setting Date/Month/Year
  async getDate(dateFormat: string, addMonths = 0, addDays = 0, addYears = 0) {
    const dateVal = new Date(Date.now());
    dateVal.setDate(dateVal.getDate() + addDays);
    dateVal.setMonth(dateVal.getMonth() + addMonths);
    dateVal.setFullYear(dateVal.getFullYear() + addYears);
    return format(dateVal, dateFormat) as string;
  }

  async closeBrowser() {
    await browser.closeWindow();
  }

  async selectValueFromDropDown(
    dropdownelement: WebdriverIO.Element,
    optionElement: WebdriverIO.Element,
    optionText = '',
  ): Promise<void> {
    await this.click(await dropdownelement);
    if (optionText !== '') await this.slowTypeFlex(await dropdownelement, optionText);
    await this.waitForPresence(optionElement);
    await optionElement.click();
  }

  async doubleClick(element: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    await this.waitForClickable(element, timeoutValue);
    await element.doubleClick();
  }

  async dragAndDrop(element: WebdriverIO.Element, target: WebdriverIO.Element, timeoutValue = Seconds.XXL) {
    await this.waitForPresence(element, timeoutValue);
    await element.dragAndDrop(target);
  }

  async browserBackButton() {
    await browser.back();
  }
}
