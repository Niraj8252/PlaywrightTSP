import {test, expect, Locator} from "@playwright/test"

test("Dynamic table handling", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table:Locator=page.locator("#taskTable tbody");
    await expect(table).toBeVisible();

    // Select all the row and find number of rows

    const rows:Locator [] = await table.locator("tr").all();
    console.log("No of rows in the table", rows.length);
    await expect(rows).toHaveLength(4);

    // For Chrome process get value of CPU load
    // Read all rows
 let cpuLoad="";
    for(const row of rows){
       const processName:string= await row.locator("td").nth(0).innerText();
       if(processName==="Chrome"){
         cpuLoad=await row.locator("td:has-text('%')").innerText();
         console.log("CPU load is : ", cpuLoad);
         break;
       }
    }

    // compare it with value of the yellow label

    let chromeCPULoadText:string=await page.locator("[class='chrome-cpu']").innerText();
    console.log("Chrome CPU Load result text : ", chromeCPULoadText);

    if(chromeCPULoadText.includes(cpuLoad)){
        console.log("chrome cpu load text and cpu load are equal");
    }

    expect(chromeCPULoadText).toContain(cpuLoad);

});