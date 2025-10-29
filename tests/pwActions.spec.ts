import {test, expect, Locator} from "@playwright/test"


// Input box
test("Input text box field actions", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const nameTextField:Locator = page.locator("#name");
    await expect(nameTextField).toBeVisible();
    await expect(nameTextField).toBeEnabled();
    
    const maxLength:string|null = await nameTextField.getAttribute("maxlength");
    expect(maxLength).toBe('15');

    await nameTextField.fill("Sona");

    const enteredValue:string = await nameTextField.inputValue();
    console.log("Text value of the input box : ", enteredValue);
    expect(enteredValue).toBe("Sona");
});

// Radio button
test("Radio Button Actions", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleRdieoButton:Locator = page.locator("#male");
    await expect(maleRdieoButton).toBeVisible();
    await expect(maleRdieoButton).toBeEnabled();
    expect(await maleRdieoButton.isChecked()).toBe(false);
    await maleRdieoButton.check();
    await expect(maleRdieoButton).toBeChecked();

    await page.waitForTimeout(3000);
});

// Checkbox 
test.only("Checkbox Actions", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    // Select specific checkbox
    const sundayCheckbox:Locator = page.getByLabel("Sunday");
    // await sundayCheckbox.check();
    // await expect(sundayCheckbox).toBeChecked();

    // Select all checkboxes and assert each checkboxes is checked or not

    const days:string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const checkboxes:Locator[] = days.map(index => page.getByLabel(index)); 
    expect(checkboxes.length).toBe(7);

    for(const checkbox of checkboxes){
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
    

    // Uncheck last 3 checkboxes and assert
     for(const checkbox of checkboxes.slice(-3)){
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }
     

    // Toggle Checkboxes : If checked, unchecked; If unchecked, check. Assert state flipped.
    for(const checkbox of checkboxes){
        if(await checkbox.isChecked){
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
            
        }else{
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }
/*
    // Randomely select checkboxes - Select checkboxes by index (1,3,6) and assert

    const indexes:number []= [1,3,6];
    for(const i of indexes){
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
    }
*/
    // Select checkboxes based on the label
    const weekname:string = "friday";

    for(const label of days){
        if(label.toLocaleLowerCase()===weekname){
            const checkbox = page.getByLabel(label);
            await checkbox.check();
            await expect(checkbox).toBeChecked();

        }

    }

    await page.waitForTimeout(3000);

})  