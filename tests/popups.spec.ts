import {test, expect, chromium, } from "@playwright/test";

test('Handle tabs', async({browser})=>{
   
       const context = await browser.newContext();  // create context 
   
       const page = await context.newPage();
       await page.goto("https://testautomationpractice.blogspot.com/");

       // Multiple poups
       //context.waitForEvent('popup'); 
       //parentPage.locator("#PopUp").click();
      await Promise.all([page.waitForEvent('popup'), await page.locator("#PopUp").click()]);

      
      const allPopupsWindows = context.pages();  // returns array of pages
      console.log("Number of pages : ", allPopupsWindows.length);

      console.log(  allPopupsWindows[0].url());
      console.log(  allPopupsWindows[1].url());
      

   
    })

