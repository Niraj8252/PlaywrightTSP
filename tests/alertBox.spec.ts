// alert(), conform(), prompt(), dialogs/JSalerts

// 1. By default, dialogs are auto-dismissed by playwright, so you dont have to handle them.
// 2. However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.

import {test, expect, Locator} from "@playwright/test"

test("Simple Alert handling", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enable alert handling
    page.on('dialog', (dialog) => {
        console.log("Dialog type : ", dialog.type());
        expect(dialog.type()).toContain('alert');
        console.log("Dialog text : ", dialog.message());
        expect(dialog.message()).toContain('I am an alert box!');
        dialog.accept();
    })
    let simpleAlert:Locator = page.locator("#alertBtn");
    await simpleAlert.click();

    await page.waitForTimeout(3000);
})

test("Confirmation Alert handling", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enable alert handling
    page.on('dialog', (dialog) => {
        console.log("Dialog type : ", dialog.type());
        expect(dialog.type()).toContain('confirm');
        console.log("Dialog text : ", dialog.message());
        expect(dialog.message()).toContain('Press a button!');
        // dialog.accept();
        dialog.dismiss();
    })
    let simpleAlert:Locator = page.locator("#confirmBtn");
    await simpleAlert.click();

    //  await expect(page.locator("#demo")).toHaveText('You pressed OK!'); // accept
    await expect(page.locator("#demo")).toHaveText('You pressed Cancel!'); // Dismiss

    await page.waitForTimeout(3000);
})


test.only("Prompt Alert handling", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enable alert handling
    page.on('dialog', (dialog) => {
        console.log("Dialog type : ", dialog.type());
        expect(dialog.type()).toContain('prompt');
        console.log("Dialog text : ", dialog.message());
        expect(dialog.message()).toContain('Please enter your name:');

        expect(dialog.defaultValue()).toContain("Harry Potter");
        dialog.accept("Sonam");
        // dialog.dismiss();
    })
    let simpleAlert:Locator = page.locator("#promptBtn");
    await simpleAlert.click();

    await expect(page.locator("#demo")).toHaveText('Hello Sonam! How are you today?'); // accept
    // await expect(page.locator("#demo")).toHaveText('User cancelled the prompt.'); // Dismiss

    await page.waitForTimeout(3000);
})