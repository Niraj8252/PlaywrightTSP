import {test, expect, Browser, chromium} from "@playwright/test";

// Browser ----> Context ----> Pages
// Browser -----> chromium, firefox, webkit
// Context -----> we can have multiple contexts for multiple users/apps for the same browser
                // provide a way to operate multiple independent browser sessions
// Pages ------> new tabs, window, popup

test("Browser Context demo", async({})=>{
    const browser:Browser = await chromium.launch(); // create browser
    const context = await browser.newContext();  // create context 

    // Creating 2 pages
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    
    await page1.goto("https://playwright.dev/");
    await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

    await page2.goto("https://www.selenium.dev/");
    await expect(page2).toHaveTitle("Selenium");


    
});