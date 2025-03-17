class ElementHelper {
    async getElementByText(text) {
        return $(`android=new UiSelector().text("${text}")`);
    }

    async getElementByResourceId(resourceId) {
        return $(`android=new UiSelector().resourceId("${resourceId}")`);
    }

    async getElementByDescription(description) {
        return $(`android=new UiSelector().description("${description}")`);
    }
}

module.exports = new ElementHelper();

