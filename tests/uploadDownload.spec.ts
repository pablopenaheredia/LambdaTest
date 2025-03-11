import {test, expect} from "@playwright/test";

test("download files", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo")
    await page.fill("#textbox", "asdadadsad")
    await page.waitForSelector("#create", {timeout: 5000}) // Espera a que el botón de creación esté disponible.
    await page.click("#create");

    const downloadButton = await page.waitForSelector("#link-to-download", {timeout: 10000}) // Espera a que el botón de descarga esté disponible.
    const download = await Promise.all([
        page.waitForEvent("download"), // Espera el evento de descarga.
        downloadButton.click()//Hace clic en el botón de descarga.
        //Asegura que ambas operaciones ocurren juntas, sin riesgo de que la descarga ocurra antes de la espera.
    ])
    const fileName = download[0].suggestedFilename() // Obtiene el nombre sugerido del archivo que se va a descargar.
    await download[0].saveAs(fileName) //guarda el archivo en la misma carpeta donde se ejecuta el test.
    // (en este caso se guardo en la carpeta tests)

})

test("upload multiple", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/upload-file-demo")
    const filePath = "assets/descarga.jpg" 
    //no se necesita hacer click en el boton de subir archivo
    //este metodo es si la etiqueta html tiene un input type="file"
    await page.setInputFiles("input[type='file']", filePath) // Sube el archivo al input file.

})

test("upload sin multiple", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/upload-file-demo")
    const filePath = "assets/descarga.jpg" 
    
    const [fileChooser] = await Promise.all([
        page.waitForEvent("filechooser"), // Espera el evento de selección de archivo.
        page.click("input[type='file']")
    ])
    const isMultiple = fileChooser.isMultiple() // Verifica si el input es multiple. No funciona si no agrego [] en uploadfiles
    console.log(isMultiple)
    await fileChooser.setFiles(filePath) // Sube el archivo al input file.
})