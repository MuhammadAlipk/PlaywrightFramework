import { BasePage } from "./BasePage";
export class LoginPage extends BasePage {
  /**
   * @param {import(playwright/test).Page} page
   */

  constructor(page) {
    super(page);
    this.page = page;
    this.txtEmail = this.page.locator("#input-email");
    this.txtPassword = this.page.locator("#input-password");
    this.btnLogin = this.page.getByRole("button", { name: "Login" }).first();
  }

  async login(userName, password) {
    await this.click(this.myAcountLink, "My Account Element is not visible");
    await this.click(this.loginLink, "Login link not found");
    await this.fill(
      this.txtEmail,
      userName,
      "email text box not visible on login screen"
    );
    await this.fill(
      this.txtPassword,
      password,
      "email text box not visible on login screen"
    );
    await this.click(this.btnLogin, "Login button is not visible");
  }

  async CheckifAuthenticated() {
    await this.click(this.myAcountLink, "My Account Element is not visible");
  }
}
