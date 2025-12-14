import {test, expect, Locator} from "@playwright/test"

test("Handle Hidden dropdown", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("button[type='submit']").click();

    await page.getByText("PIM").click();

    // Click title job dropdown
    await page.locator("form i").nth(2).click();

    await page.waitForTimeout(3000);
    const options:Locator = page.locator("[role='listbox'] span");
    const count:number = await options.count();
    console.log("No of option", count);

    // Print all the options
    // console.log(await options.allTextContents());
    const allOptions:string[] = await options.allTextContents();


    for(let i =0; i<count;i++){
        // console.log(await options.nth(i).innerText());
        console.log(await options.nth(i).textContent());

    }

    // Click an option
     for(let i =0; i<count;i++){
        const text = await options.nth(i).textContent();
        if(text === "Automation Tester"){
             await options.nth(i).click();
             break;
        }

    }

    await page.waitForTimeout(3000);
})