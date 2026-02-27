import {test, expect} from "@playwright/test";

test.beforeEach("Launching the app", async({page})=>{
       await page.goto("https://demowebshop.tricentis.com/");


})
test("validate the logo", async({page})=>{
    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
});

test("validate title", async({page})=>{
    await expect(await page.title()).toContain("Demo Web Shop12");
});


test('Search test', async({page})=>{
    await page.locator("#small-searchterms").fill("laptop");
    await page.locator("input[value='Search']").click();
    await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop", {ignoreCase:true});
    });