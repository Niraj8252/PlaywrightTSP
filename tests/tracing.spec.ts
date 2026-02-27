/*
3 ways to create trace file(trace.zip)
-------------------------------------
1. Using playwright.config.ts
2. Using command 
            npx playwright test tracing.spec.ts --trace on
3. Code(Programatically)
            context.tracing.start({screenshots:true, snapshots:true});
            //statements
            context.tracing.stop({path:'trace.zip'});

To view trace file(3 ways)
-----------------------------------
1. from html report file --> click on trace.zip
2. through command --> npx playwright show-trace trace.zip
3. utility ---> https://trace.playwright.dev/  (drag and drop/upload trace.zip file)
*/

import {test, expect} from "@playwright/test";

test('Trace viewer test', async({page, context})=>{

    context.tracing.start({screenshots:true, snapshots:true});
    await page.goto("https://demoblaze.com/index.html");
  
    await page.getByRole('link', {name : 'Log in'}).click();
    await page.locator('#loginusername').fill("Niraj12");
    await page.locator('#loginpassword').fill("1234");
    await page.waitForTimeout(5000);
    await page.getByRole('button', {name:'Log in'}).click();
    await expect(page.getByRole('link', {name: 'Log out'})).toBeVisible();
    await expect(page.locator('#nameofuser')).toContainText('Welcome Niraj12');
    await page.getByRole('link', {name:'Log out'}).click();
    await expect(page.getByRole('link', {name : 'Log in'})).toBeVisible();

    await page.waitForTimeout(5000);
    context.tracing.stop({path:'trace.zip'});
})