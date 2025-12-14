import {test, expect, Locator} from "@playwright/test"

test("Static table handling", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const table:Locator =  page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    // count rows of the table

    // const rows:Locator = table.locator("table[name='BookTable'] tbody tr");
    const rows:Locator = table.locator("tr");
    await expect(rows).toHaveCount(7);

    const rowsCount:Number = await rows.count();
    console.log(rowsCount);
    expect(rowsCount).toBe(7);

    // count no of columns
    
    // const columns:Locator = await rows.locator("table[name='BookTable'] tbody tr th");
    const columns:Locator = await rows.locator("th");
    await expect(columns).toHaveCount(4);

    const columnsCount:Number = await columns.count();
    console.log(columnsCount);
    expect(columnsCount).toBe(4);

    // Read all the data from a particular row

    // const columns:Locator = await rows.locator("table[name='BookTable'] tbody tr td");
    const secondRowCells:Locator=rows.nth(2).locator("td");
    const secondRowTexts:string[] = await secondRowCells.allInnerTexts();
    console.log(" 2nd rows data : ",secondRowTexts)
    await expect(secondRowCells).toHaveText(['Learn Java', 'Mukesh', 'Java', '500']);

    for (const text of secondRowTexts) {
        console.log(text);
    }

    // read all data from table (Excluding header)
    const allRowData=await rows.all(); // get all rows locator  // all() (method) returns array of locator
    for(let row of allRowData.slice(1)) // slice(1) ---> skip header row
        {
        const cols = await row.locator("td").allInnerTexts();
        console.log(cols.join("\t"));
    } 

    // Print book name where author is mukesh

    for(let row of allRowData.slice(1)){
        const cells = await row.locator("td").allInnerTexts();
        const author = cells[1];
        const book = cells[0];
        
        if(author==="Mukesh"){
            console.log(`${author} \t ${book}`);
        }
    }

    // Calculate total price of all rows

    let totalPrice:number=0;
    for(let row of allRowData.slice(1)){
        const cells = await row.locator("td").allInnerTexts();
        const price = cells[3];
        totalPrice = totalPrice+ parseInt(price);
        
    }
    console.log(totalPrice);
    await expect(totalPrice).toBe(7100);
})