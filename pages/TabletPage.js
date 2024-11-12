import { constants } from "buffer";
import { BasePage } from "./BasePage";

export class TabletPage extends BasePage {
  /**
   * @param {import(playwright/test).Page} page
   */

  constructor(page) {
    super(page);
    this.page = page;
    this.successLabel = this.page.locator("//*[@id='product-category']/div[1]");
  }
  async gotoPhonesPage() {
    await this.goto(process.env.baseUrl);
    await this.gotoProductPage("Phones & PDAs");
  }

  async addToCart(name) {
    const product = await this.page.locator(".caption h4 a").all();
    var index = 0;
    if (product.length > 0) {
      for (let i = 0; i < product.length; i++) {
        if ((await product[i].innerText()) == name) {
          index = i;
          break;
        }
      }
    }
    await this.page
      .getByRole("button", { name: "Add to Cart" })
      .nth(index)
      .click();
  }
}
