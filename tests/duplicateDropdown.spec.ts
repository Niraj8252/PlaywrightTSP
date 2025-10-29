import {test, expect, Locator} from "@playwright/test"

test("Verify dropdown contains duplicates", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    // Check number of option in the dropdown(count)

    const dropdownOptions:Locator = page.locator("#colors>option");  // Having duplicates
    // const dropdownOptions:Locator = page.locator("#animals>option");  // Not having duplicates


    const optionsText:string[] = (await dropdownOptions.allTextContents()).map(text=>text.trim());
   
    const myset = new Set<string>();  // Set - not allowed duplicates
    const duplicates:string[]=[];   // Array - duplicates allowed

    for(const text of optionsText){
        if(myset.has(text)){
            duplicates.push(text);
        }else{
            myset.add(text);
        }
    }
    console.log("Unique Values are : ", myset);
    console.log("Duplicates values are : ", duplicates);

    if(duplicates.length>0){
        console.log("Duplicates found : ", duplicates);
    }else{
        console.log("Duplicates not found : ", myset);
    }
    // expect(duplicates.length).toBe(0);


await page.waitForTimeout(3000);
})