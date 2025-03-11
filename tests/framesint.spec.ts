import {test, expect} from '@playwright/test'

//myframe? es como si hubiera un if:
    //if (myframe != null) {
    // await myframe.fill("", "")
    // } etc etc

    //const numframes = page.frames() (esto devuelve un array con todos los frames de la pagina) 
test("framesInt", async ({page}) => {
    await page.goto("https://letcode.in/frame")

    
    const myFrame = page.frameLocator("#firstFr") //busca el frame con el id "firstFr"
        
    await myFrame.locator("input[name='fname']").fill("Pablo")
    await myFrame.locator("input[name='lname']").fill("Pena")
    
    
    //nested frames:
    const innerFrame = myFrame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("asdad@gmail.com")
    expect (await myFrame?.locator("p.title.has-text-info").textContent()).toContain("You have entered")
    //este expect verifica que el texto de la etiqueta p con la clase "title" 
    // y la clase "has-text-info" contenga el texto "You have entered" para verificar que se haya ingresado correctamente.

    await page.waitForTimeout(5000)

})
    