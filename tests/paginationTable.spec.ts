import {test, expect, Locator} from "@playwright/test"

test("Read data from all the table pages ", async({page})=>{
   
await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

let hasMorePages = true;
    while(hasMorePages){
        const rows:Locator[] = await page.locator("#example tbody tr").all();
        for(let row of rows){
        console.log("Rows data : ", await row.innerText());
    }

      await page.waitForTimeout(3000);

    const nextButton:Locator=  page.locator("button[aria-label='Next']");
    const isDisabled = await nextButton.getAttribute('class');


    if(isDisabled?.includes('disabled')){
        hasMorePages=false;
    }else{
         await nextButton.click();
    }

    }
});


test("Filter the rows and checks tha rows count ", async({page})=>{
   
await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

const dropDown:Locator = page.locator("#dt-length-0");
await dropDown.selectOption({label:'25'});
const rows:Locator[] = await page.locator("#example tbody tr").all();
expect(rows.length).toBe(25);

});


test.only("Search for the specific data in the table ", async({page})=>{
   
await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

const searchField:Locator = page.locator("#dt-search-0");
 await searchField.fill("Serge Baldwin");
const rows:Locator[] = await page.locator("#example tbody tr").all();

if(rows.length>=1){
    let matchFound = false;
    for(let row of rows){
        const text = await row.innerText();
        if( text.includes("Serge Baldwin")){
            console.log("Match found")
            matchFound=true;
            break;

        }
    }
}else{
    console.log("No rows found with search text")
}

});

