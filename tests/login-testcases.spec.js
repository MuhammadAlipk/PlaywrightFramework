import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

//test.use({ storageState: { cookies: [], origins: [] } });
var login;

test("LoginWith Valid credentials", async({page}) =>{
    try{
    login = new LoginPage(page)
    await login.goto(process.env.baseUrl);
    await login.login(process.env.email,process.env.password);
    await expect(login.page).toHaveTitle("My Account");
    }
    catch(ex){
        expect("Test failed due to exception see the logs").toEqual("Test should pass")
        console.error(ex)
    }
    finally{
        login.page.close()
    }
})