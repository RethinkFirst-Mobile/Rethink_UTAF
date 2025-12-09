import { WebPage } from './../../../../globals/web/web.page';
/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class Page extends WebPage {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  async open(path: string) {
    await super.open(`https://the-internet.herokuapp.com/${path}`);
  }
}
export default new Page();
