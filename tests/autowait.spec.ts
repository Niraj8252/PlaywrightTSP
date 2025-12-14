import {test, expect} from "@playwright/test"

test("Autowait and customize auto wait", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    test.setTimeout(60000); // test label customize auto wait
    //test.slow();  // 90 secs (default is 30 secs)  

    await expect(page).toHaveURL("https://demowebshop.tricentis.com/", {timeout:10000});
    await expect(page.locator("text= Welcome to our store")).toBeVisible({timeout:10000});

    await page.locator("#small-searchterms").fill("Laptop", {force:true});  // search box - Force action (it will not do actionability checks/it will not follow auto wait)
    await page.locator(".button-1 search-box-button").click();


});