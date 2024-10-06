import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
var login;

test("Avain Avain test", async ({ page }) => {


    login = new LoginPage(page)
    await login.goto(process.env.baseUrl)
    await login.waitForPageload();
    await login.CheckifAuthenticated();
    await expect(login.logioutLink).toBeVisible();


})
