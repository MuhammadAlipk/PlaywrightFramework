import { test, expect } from "@playwright/test";
import { TabletPage } from "../pages/TabletPage";

test("Add to cart", async ({ page }) => {
  try {
    var tabletpage = new TabletPage(page);
    await tabletpage.gotoPhonesPage();
    await tabletpage.addToCart("iPhone");
    await expect(tabletpage.successLabel).toHaveText(
      " Success: You have added " +
        tabletpage.productName +
        " to your shopping cart! ×"
    );
  } catch (ex) {
    console.error(ex);
  }
});
