import {test} from "@playwright/test";

test('Irctc search', async({page})=>{

await page.goto("https://www.irctc.co.in/nget/train-search");
await page.getByLabel("From").fill("Bengalore");
await page.getByLabel("To").fill("Pune");
await page.getByLabel("DD/MM/YYYY *").fill("30/01/2026");
await page.locator("#journeyClass").selectOption("Vistadome AC (EV)");
await page.locator("#journeyQuota").selectOption("LADIES");
await page.getByRole('button', {name:' Search Trains '}).click();


})