import {test, expect, Locator} from "@playwright/test"

test("Verify dropdown is sorted", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
   

    // Check number of option in the dropdown(count)

    const dropdownOptions:Locator = page.locator("#colors>option");

    // Chek an option present in the dropdown

    const optionsText:string[] = (await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log(optionsText);

    const originalList:string[] = [...optionsText];
    const sortedList:string[] = [...optionsText.sort()];

    console.log("Original list" , originalList);
    console.log("Sorted list", sortedList);


await page.waitForTimeout(3000);
})