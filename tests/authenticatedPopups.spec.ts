import {test, expect, chromium, } from "@playwright/test";

test('Authentication popups', async({browser})=>{
   
    /*
       const context = await browser.newContext();  // create context 
   
       const page = await context.newPage();

       // Approach 1: Directly pass credential along with url
       //https://the-internet.herokuapp.com/basic_auth
       //https://username:password@the-internet.herokuapp.com/basic_auth
        await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

        await page.waitForLoadState(); // wait for page loaded completely

       await expect(page.locator('text=Congratulations')).toBeVisible();
       await page.waitForTimeout(5000);
   
       */

       // Approach 2: Pass credentials along with browser context
       const context = await browser.newContext({httpCredentials:{username:'admin', password:'admin'}});  // create context 
   
       const page = await context.newPage();
       
       await page.goto("https://the-internet.herokuapp.com/basic_auth");
       await page.waitForLoadState(); // wait for page loaded completely

       await expect(page.locator('text=Congratulations')).toBeVisible();
       await page.waitForTimeout(5000);
   


    })

