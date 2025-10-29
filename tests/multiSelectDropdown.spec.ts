import {test, expect, Locator} from "@playwright/test"

test("Multi select dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    // Select option from the drop down (4 ways)
    
    // await page.locator("#colors").selectOption(['Red', 'Blue', 'Green']); // visible txt
    // await page.locator("#colors").selectOption(['red', 'green', 'white']); // by using value attribute
    // await page.locator("#colors").selectOption([{label:'Red'}, {label:'Green'}, {label:'Yellow'} ]); // by using label
    // await page.locator("#colors").selectOption([{index:0}, {index:2}, {index:4}]); // by using index


    // Check number of option in the dropdown(count)

    const dropdownOptions:Locator = page.locator("#colors>option");
    await expect(dropdownOptions).toHaveCount(7);

    // Chek an option present in the dropdown

    const optionText:string[] = (await dropdownOptions.allTextContents()).map(text=>text.trim());
    // console.log(optionText);

     expect(optionText).toContain("Green");  // checks if array contains china
    
    // Printing options from dropdown

    for(const option of optionText){
        console.log(option);
    }


await page.waitForTimeout(3000);
})