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
    this.btnAddToCart = this.page.getByRole("button", { name: "Add to Cart" });
    this.lblPrice = this.page.locator("div.caption > p:nth-child(3)");
    this.lblproductNames = this.page.locator(".caption h4 a");
    this.productName;
    this.productPrice;
    this.productTax;
  }
  async gotoPhonesPage() {
    await this.goto(process.env.baseUrl);
    await this.gotoProductPage("Phones & PDAs");
  }

  async addToCart(name) {
    const product = await this.lblproductNames.all();
    var index = 0;
    if (product.length > 0) {
      for (let i = 0; i < product.length; i++) {
        if ((await product[i].innerText()) == name) {
          index = i;
          break;
        }
      }
    }

    const priceLabel = await this.lblPrice.nth(index).innerText();
    this.productName = await this.lblproductNames.nth(index).innerText();
    this.productPrice = await priceLabel.split("\n")[0];
    this.productTax = await priceLabel.split(":")[1];

    await this.btnAddToCart.nth(index).click();
  }
}
