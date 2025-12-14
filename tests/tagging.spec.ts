/*
test1 - sanity
test2 - sanity, regression
test3 - regression
*/
/*
1. Run all sanity tests: 
        npx playwright test tests/tagging.spec.ts --grep "@sanity"

2. Run all regression tests: 
         npx playwright test tests/tagging.spec.ts --grep "@regression"

3. Run tests which are belongs to both:
         npx playwright test tests/tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"    

4. Run tests belongs to either sanity or regression
        npx playwright test tests/tagging.spec.ts --grep "@regression|@sanity"

5. Run sanity test which are not belongs to regression
        npx playwright test tests/tagging.spec.ts --grep "@sanity" --grep-invert "@regression"
 */


import {test, expect} from "@playwright/test"

// test('@sanity @regresion Varify title of the home page', async({page})=>{
//     await page.goto("https://www.google.com/");
//     await expect(page).toHaveTitle('Google');
// })

test('Varify title of the home page', {tag:'@sanity'}, async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})

test('Varify title of the store page', {tag:'@regression'}, async({page})=>{
    await page.goto("https://www.google.com/");
    await page.locator("text='Store'").click();
    await expect(page).toHaveTitle('Google Store for Google Made Devices & Accessories');
})

test('Varify text of the home page', {tag:['@sanity', '@regression']}, async({page})=>{
    await page.goto("https://www.google.com/");
    await page.locator("text='Store'").click();
    await expect(page.locator("text='Popular on the Google Store.'")).toHaveText('Popular on the Google Store.');
})