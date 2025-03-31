
class ActionHelper {
    async clickElement(element) {
        await element.waitForDisplayed({ timeout: 20000 });
        await element.click();
    }

    async typeText(element, text) {
        await element.waitForDisplayed({ timeout: 20000 });
        await element.click();
        await element.setValue(text);
    }

    async getText(element) {
        await element.waitForDisplayed({ timeout: 20000 });
        return await element.getText();
    }
}

module.exports = new ActionHelper();
