import {test, expect, Locator} from "@playwright/test"

test("Single select dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    // Select option from the drop down (4 ways)
    
    // await page.locator("#country").selectOption('India'); // visible txt
    // await page.locator("#country").selectOption({value:'india'}); // by using value attribute
    // await page.locator("#country").selectOption({label:'India'}); // by using label
    // await page.locator("#country").selectOption({index:3}); // by using index


    // Check number of option in the dropdown(count)

    const dropdownOptions:Locator = page.locator("#country>option");
    await expect(dropdownOptions).toHaveCount(10);

    // Chek an option present in the dropdown

    const optionText:string[] = (await dropdownOptions.allTextContents()).map(text=>text.trim());
    // console.log(optionText);

     expect(optionText).toContain("China");  // checks if array contains china
    
    // Printing options from dropdown

    for(const option of optionText){
        console.log(option);
    }


await page.waitForTimeout(3000);
})