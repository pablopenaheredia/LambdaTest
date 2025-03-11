import {test, expect} from "@playwright/test";

test("interact with unique window", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")
    //console.log(page.url) esto da la url de la pagina primera
    
    //promise.all sirve para ejecutar varias promesas al mismo tiempo
    // Se usa corchetes [newWindow] para desestructurar el primer resultado de las promesas resueltas por Promise.all.
    // Si no se usan corchetes, newWindow sería un array que contiene todos los resultados de las promesas.
        const newWindow = await Promise.all([
        page.waitForEvent("popup"),
        page.click("//a[@title='Follow @Lambdatesting on Twitter']")
    ])
    //console.log(newWindow) esto da la url de la ventana nueva

//luego de esto podemos interactuar con la ventana nueva de la siguiente forma:
    
    //await newWindow.waitForSelector("xxxxx]")
    //await newWindow.fill("xxxxx", "xxxxx")
})

test("interact with multiple windows", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")
    const [multipleWindows] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ])
    await multipleWindows.waitForLoadState()
    const pages = await multipleWindows.context().pages() //devuelve un array con todas las paginas abiertas
    console.log(pages) //esto da un array con las paginas abiertas
})