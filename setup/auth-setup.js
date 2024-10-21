const { chromium } = require('playwright');
import { expect } from '@playwright/test';
const path = require('path');
import { LoginPage } from '../pages/LoginPage';

// Path to save the authentication state (user session)
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

// Export a single async function
module.exports = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  try {
    const login = new LoginPage(page)
    await login.goto(process.env.baseUrl);
    await login.login(process.env.email, process.env.password);
    await expect(login.page).toHaveTitle("My Account");

    // Save authentication state (cookies, localStorage) to reuse it in the tests
    await page.context().storageState({ path: authFile });

    await page.close(); // Close the browser after saving the state

  }
  catch (ex) {
    console.error(ex)
  }

};
