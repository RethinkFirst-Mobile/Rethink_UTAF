import { WebPage } from './../../../../globals/web/web.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends WebPage {
  /**
   * define selectors using getter methods
   */
  get flashAlert() {
    return $('#flash');
  }
}

export default new SecurePage();
