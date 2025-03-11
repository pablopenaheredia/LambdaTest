import {test, expect} from "@playwright/test";

test("dropdown unico", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    //tanto en los selectoption, como en locator:
    //el # hace referencia a id
    //el . hace referencia a class
    //el [] hace referencia a tag
    //el @ hace referencia a atributo
    //el // hace referencia a xpath
    //el :has-text hace referencia a texto
    //el :nth-child hace referencia a la posicion

    await page.selectOption("#select-demo",{
        label: 'Tuesday'
        //value: 'Monday',
        //index: 2
        })
         
});

test("dropdown multiple", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#multi-select",{
        label: 'Florida',
        //value: 'Florida',
        //index: 2
        })
    await page.locator("#printMe").click();
    await page.selectOption("#multi-select",{
        label: 'Texas',
        })
    await page.locator("#printAll").click();    
    });


//jquery dropdown

test("bootstrap dropdown", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await page.click("(//span[contains(@class,'select2 select2-container')])[1]")
    await page.locator("ul.select2-results__options", {
            has : page.locator(('li'), {
            hasText: 'Denmark'
         })
        }).click();
// Este selector busca un elemento ul con la clase 'select2-results__options' que contenga un elemento li con el texto 'Denmark' y hace clic en él
// La condición 'has' se utiliza para asegurarse de que el elemento ul contenga un elemento li con el texto 'Denmark' antes de hacer clic en él
    await page.waitForTimeout(5000);
})


//mismo ejemplo con funcion
test("bootstrap dropdown func", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await selectCountry("Denmark");
    await selectCountry("South Africa");

    async function selectCountry(countryname){
        await page.click("(//span[contains(@class,'select2 select2-container')])[1]")
        await page.locator("ul.select2-results__options", {
            has : page.locator(('li'), {
            hasText: (countryname)
         })
        }).click();
    }
})