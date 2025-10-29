import {test, expect, Locator} from "@playwright/test"

test("Verify Dynamic dropdown", async({page})=>{
    await page.goto("")

    const searchBox:Locator= page.locator("#APjFqb");
})