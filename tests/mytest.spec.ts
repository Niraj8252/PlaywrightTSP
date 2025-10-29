import {test,expect} from "@playwright/test";


test("Verify page title", async({page})=>{

   await page.goto("https://practice.automationtesting.in/");
   let title = await page.title();
   console.log("Title : ", title);

   await expect(page).toHaveTitle("Automation Practice Site")

});