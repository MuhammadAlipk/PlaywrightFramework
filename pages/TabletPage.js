import { BasePage } from "./BasePage";

export class TabletPage extends BasePage {
  /**
   * @param {import(playwright/test).Page} page
   */

  constructor(page) {
    super(page);
  }

  async retruntProductButton(name) {
    var product = await this.page.locator(".caption");
    const index = 0;
    for (let i = 0; i < product.lenth; i++) {
      if (product[i].filter({ hasText: name })) {
        index = i;
        break;
      }
    }
    return await getByRole("button", { name: " Add to Cart" }).nth(index);
  }
}
