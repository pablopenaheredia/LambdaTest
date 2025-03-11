import {test, expect} from "@playwright/test";

test("dates test", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    let date = "2003-05-12" //el formato es yyyy-mm-dd
    const dateInput = await page.locator("#birthday")
    await dateInput.fill(date)
    await expect (dateInput).toHaveValue(date)
})