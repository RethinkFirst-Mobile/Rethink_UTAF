class ElementHelper {
    async getElementByText(text) {
        if (driver.isIOS) {
            return $(`~${text}`); // iOS: accessibility ID
        } else {
            return $(`android=new UiSelector().text("${text}")`);
        }
    }

    async getElementByResourceId(resourceId) {
        if (driver.isIOS) {
            const map = {
                signInName: '~Username',
                password: '~Password',
                next: '~Sign in'
            };

            if (!map[resourceId]) {
                console.warn(`⚠️ No iOS mapping for "${resourceId}". Using fallback accessibility ID.`);
                return $(`~${resourceId}`);
            }

            return $(map[resourceId]);
        } else {
            return $(`android=new UiSelector().resourceId("${resourceId}")`);
        }
    }

    async getElementByDescription(description) {
        if (driver.isIOS) {
            return $(`~${description}`);
        } else {
            return $(`android=new UiSelector().description("${description}")`);
        }
    }
}

module.exports = new ElementHelper();
