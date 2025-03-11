import {expect, test} from "@playwright/test";



//ALERTAS EN JAVASCRIPT
test("Alerta solo aceptar", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        alert.defaultValue();
        await alert.accept();
    })
    await page.locator("button:has-text('Click Me')").nth(0).click
})

test("Alerta confirmar", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.dismiss();
    })
    await page.locator("button:has-text('Click Me')").nth(1).click();
    expect(page.locator("#confirm-demo")).toContainText("Cancel!");

})

test("Alerta prompt", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        await alert.accept("Pablo");
    // Escucha el evento dialog que aparece en la página.
    // Cuando se activa el dialog, lo acepta y envía el texto "Pablo".
    })

    await page.locator("button:has-text('Click Me')").nth(2).click();    
    await page.waitForSelector("#prompt-demo:has-text('Pablo')");// Espera hasta que el elemento con el ID 'prompt-demo' contenga el texto "Pablo".
    expect(page.locator("#prompt-demo")).toContainText("Pablo");// Verifica que el elemento 'prompt-demo' contenga el texto "Pablo".

});


//ALERTAS EN BOOTSTRAP
//no necesita el page.on porque no es un dialogo, se puede hacer normalmente con inspeccionar

test("Multimodal", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.locator("button[data-target='#myMultiModal']").click();
    await page.locator("button[data-target='#mySecondModal']").click();
    await page.locator("(//button[@class='btn']/following-sibling::button)[3]").click();
    await page.locator("(//button[@class='btn']/following-sibling::button)[2]").click();
    }
);