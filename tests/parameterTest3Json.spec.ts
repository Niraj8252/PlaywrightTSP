import {test, expect} from "@playwright/test";
import fs from 'fs';

// Reading data from json
const jsonPath = "testData/testData.json";
const loginTestData:any=JSON.parse(fs.readFileSync(jsonPath, "utf-8"));


test.describe('Login data driven test', async()=>{

 for(const { email, pass, validity } of loginTestData){

    test(`Login test for ${email} and ${pass}`, async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login");
    await page.locator("#Email").fill(email);
    await page.locator("#Password").fill(pass);
    await page.locator("input[value='Log in']").click();
      
    if(validity.toLowerCase()==='valid'){
        // Assert logout link is visible - indicates successful login
        const logoutLink = page.locator("a[href='/logout']")
        await expect(logoutLink).toBeVisible({timeout:5000});
    }else{
        // Assert error msg in visible
        const errorMessage = page.locator(".validation-summary-errors");
        await expect(errorMessage).toBeVisible({timeout:3000});

        // Assert user is still in the login page
        expect(page).toHaveURL("https://demowebshop.tricentis.com/login");

    }
});
}
});



