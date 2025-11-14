import { WebPage } from './../../../../globals/web/web.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends WebPage {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $('#username');
  }

  get inputPassword() {
    return $('#password');
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username: string, password: string) {
    await super.type(this.inputUsername, username);
    await super.type(this.inputPassword, password);
    await super.click(this.btnSubmit);
  }
}
export default new LoginPage();
