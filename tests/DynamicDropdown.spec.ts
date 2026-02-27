import {test, expect, Locator} from "@playwright/test"

test("Auto suggestion dropdown", async({page})=>{
    await page.goto("https://www.flipkart.com/");

    await page.locator("input[name='q']").fill("mobile");
    await page.waitForTimeout(5000);

    // Get all the suggestion from dropdown -- Ctrl+Shift+p  => Command -- Emulate focus page
    const options:Locator= page.locator("ul>li");

    const count = await options.count();
    console.log("number of list : ", count);
    // console.log("4th option : ", await options.nth(4).innerText());
   
    // printing all the suggested option

    for(let i =0; i<count; i++){
        // console.log("All auto suggestion options : ", await options.nth(i).innerText());
        const text = await options.nth(i).innerText();
        if(text==="mobile under 7000"){
            options.nth(i).click();
            break;
        }
    }
     await page.waitForTimeout(3000);
});