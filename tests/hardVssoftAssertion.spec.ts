import {test, expect} from "@playwright/test"

test("Playwright hard and soft assertions", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");


    // Hard assertion
    // await expect(page).toHaveTitle('Demo Web Shop2');  // Failed
    // await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    // const logo = await page.locator("img[alt='Tricentis Demo Web Shop']");
    // await expect(logo).toBeVisible();

    // Soft assertion
    await expect.soft(page).toHaveTitle('Demo Web Shop2'); // Failed
    await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");

    const logo = await page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect.soft(logo).toBeVisible();




    await page.waitForTimeout(4000);

})