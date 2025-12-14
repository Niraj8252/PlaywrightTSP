import {test, expect, Page} from "@playwright/test";

let page: Page;

test.beforeAll('Open app', async({browser})=>{
page=await browser.newPage();
await page.goto("https://demoblaze.com/index.html");
});

test.afterAll('Closing app', async()=>{
    await page.close();
});

test.beforeEach('Login', async()=>{
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("Niraj12");
    await page.locator("#loginpassword").fill("1234");
    await page.locator("button[onclick='logIn()']").click();
})

test.afterEach('Logout', async()=>{
    await page.locator("#logout2").click();
})

test.describe("Demoblaze", async()=>{
test('Find no of products', async()=>{
    const products = page.locator("#tbodyid .hrefch");
    const count = await products.count();
    console.log("numbers of products : ", count);
    await expect(products).toHaveCount(9);
});

test('Add product to cart', async()=>{
    await page.locator("text='Samsung galaxy s6'").click();

    // Handle alert before the click
    page.on('dialog', async(dialog)=>{
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    });
    await page.locator('.btn.btn-success.btn-lg').click();
})
})
