import {test, expect} from "@playwright/test"


const searchItems :string[] = ["laptop", "smartphone", "gift card"];
/*
// Using for of loop
for(const item of searchItems){
test(`Search item for ${item}`, async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.locator("input[value='Search']").click();
    await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, {ignoreCase:true});
})
}
*/

// Using forEach loop
/*
 searchItems.forEach((item)=>{
        test(`Search item for ${item}`, async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.locator("input[value='Search']").click();
    await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, {ignoreCase:true});
    });
});
*/

test.describe("Sreach items", async()=>{
    searchItems.forEach((item)=>{
        test(`Search item for ${item}`, async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.locator("input[value='Search']").click();
    await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, {ignoreCase:true});
        });
    });
});