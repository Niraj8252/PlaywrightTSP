import {test, expect, chromium, Browser} from "@playwright/test";
import { promises } from "dns";

test('Handle tabs', async()=>{
   const browser= await chromium.launch(); // create browser
       const context = await browser.newContext();  // create context 
   
       const parentPage = await context.newPage();
       await parentPage.goto("https://testautomationpractice.blogspot.com/");

       // 2 statements should go parallely
       //context.waitForEvent('page'); 
       //parentPage.locator("button:has-text('New Tab')").click();
      const [childPage]=await Promise.all([context.waitForEvent('page'), await parentPage.locator("button:has-text('New Tab')").click()]);

      // Approach 1: switch between pages and get titles
      const pages = context.pages();
      console.log("Number of pages : ", pages.length);

      console.log("Title of parent page : ", await pages[0].title());
      console.log("Title of child page : ", await pages[1].title());


      // Approach 2: Alternate
       console.log("Title of parent page : ", await parentPage.title());
      console.log("Title of child page : ", await childPage.title());
    })

