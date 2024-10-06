import { expect } from '@playwright/test'

export class BasePage {

    /**
     * @param {import(playwright/test).Page} page
     */

    constructor(page) {
        this.page = page;
        
       
    }

    async goto(url)
    {
       await this.page.goto(url)
    }

    async waitForPageload()
    {
        await this.page.waitForLoadState('domcontentloaded')
    }

    async click(element, error) {
        try {

            await expect(element).toBeVisible()
            await expect(element).toBeEnabled()
            await element.click();

        }
        catch (ex) {
            console.error(ex)
            throw new exception(error)
        }
    }

    async fill(element, text, error) {
        try {

            await expect(element).toBeVisible()
            await expect(element).toBeEnabled()
            await element.fill(text);

        }
        catch (ex) {
            console.error(ex)
            throw new exception(error)
        }
    }

    async getText(element, error) {
        try {

            await expect(element).toBeVisible()
            return await element.textContent();

        }
        catch (ex) {
            console.error(ex)
            throw new exception(error)
        }
    }

    async selectionByValue(element, value, error) {
        try {

            await expect(element).toBeVisible()
            await expect(element).toBeEnabled()
            await element.selectOption(value);

        }
        catch (ex) {
            console.error(ex)
            throw new exception(error)
        }
    }

    async selectionByLabel(element, value, error) {
        try {

            await expect(element).toBeVisible()
            await expect(element).toBeEnabled()
            await element.selectOption({ label: value });

        }
        catch (ex) {
            console.error(ex)
            throw new exception(error)
        }
    }

    async checkBox(element, error) {
        try {

            await expect(element).toBeVisible()
            await expect(element).toBeEnabled()
            await element.check();
            await expect(element).toBeChecked();

        }
        catch (ex) {
            console.error(ex)
            throw new exception(error)
        }
    }

    async uploadFile(element,__dirname, files) {
        try {
            await expect(element).toBeVisible()
            await expect(element).toBeEnabled()
            // Select one file
            await element.setInputFiles(path.join(__dirname, '/data/' + files));

        }
        catch (ex) {
            console.error(ex)
            throw new exception(error)

        }
    }


}