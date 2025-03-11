import { test, expect } from "@playwright/test";

test("login test", async ({page}) => {
    // Paso 1: Ir al sitio y loguearse
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
    await page.click("text=Login");

    await page.fill("input[name='email']", "koushik350@gmail.com");
    await page.fill("input[name='password']", "Pass123$");
    await page.click("input[value='Login']");
    await page.waitForTimeout(5000);

    // Abrir en una pestaña nueva la pagina que figura luego de iniciar sesion, deberia estar logeado
    const newPagePestaña = await page.context().newPage();
    await newPagePestaña.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await newPagePestaña.waitForTimeout(5000);

    // Abrir en una ventana nueva la pagina que figura luego de iniciar sesion
    // no deberia estar logeado ya que se abrio en una nueva ventana
    const browser = await page.context().browser();
    if (!browser) {
        throw new Error("Browser not found"); //este if es para que no tire error 
    }
    const newContext = await browser.newContext(); //creo un nuevo contexto
    const newPageVentana = await newContext.newPage(); //creo una nueva pagina en el nuevo contexto
    await newPageVentana.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account"); //voy a la pagina
    await newPageVentana.waitForTimeout(5000);
    
    
});
