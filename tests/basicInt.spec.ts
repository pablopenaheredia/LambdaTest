import {test, expect} from "@playwright/test";

//inputs
test("Interaction with inputs", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    //console.log(await messageInput.getAttribute("placeholder"));
    //messageInput.scrollIntoViewIfNeeded(); esto podria servir para hacer que el input se muestre en la pantalla si no aparece
    await expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    

    //Este código usa Playwright para verificar que el atributo placeholder de un campo de texto sea 
    //"Please enter your Message" en una página web.
    //Sirve para verificar que un elemento tiene un atributo específico con un valor específico.
})

//inputs + result
test("Sum two numbers", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const num1Input = page.locator("input#sum1");
    const num2Input = page.locator("input#sum2"); //o page.locator("input#sum2").fill("2");
    await num1Input.fill("2");
    await num2Input.fill("5");
    await page.locator("(//button[@type='button'])[2]").click();
    const result = await page.locator("#addmessage");
    expect(result).toHaveText("7");

})

//checkbox

test("Check a checkbox", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const checkbox = page.locator("id=isAgeSelected");
    await expect (checkbox).not.toBeChecked();
    await checkbox.check();
    await expect (checkbox).toBeChecked();

    //este codigo verifica que un checkbox no esté marcado y luego lo marca. Luego verifica que el checkbox esté marcado.
})