/* annotations
------------------
only
skip
fail
fixme 
slow
*/
import {test, expect} from "@playwright/test"

test('test1', async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})
// skip
test.skip('test2', async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})
// Skip using condition
test('test3', async({page, browserName})=>{
    test.skip(browserName==='chromium', 'skiped in chromium')
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})
// fail
test.fail('test4', async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})
// fixme (it is also skiped the test (we provide if script is not completed))
test.fixme('test5', async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})
// slow
test('test6', async({page})=>{
    test.slow(); // triple the default timeout(default : 30 secs, after tripling: 90 secs)
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})