import {test, expect} from "@playwright/test"

test("Playwright assertions demo", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    // 1. Auto-retrying assertion (automatically retries until it passes or times out)
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/"); // wait for correct url

    // Uto-retry wait for the element to be visible and have the expected test
    await expect(page.locator('text=Welcome to our store')).toBeVisible();
    await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText("Featured products");

    // 2. Non-retrying assertion (executes immediatly, no retry)
    const title = await page.title();
    expect(title.includes('Demo Web Shop')).toBeTruthy(); // No auto-retry

    const welcometext = await page.locator("text=Welcome to our store").textContent();
    expect(welcometext).toContain('Welcome');

    // 3. Negative matcher
    // await expect(page.locator("text=Welcome to our store")).not.toBeVisible(); // Auto-retry
    // expect(welcometext).not.toContain('Welcome'); // No auto-retry

    await page.waitForTimeout(4000);

})