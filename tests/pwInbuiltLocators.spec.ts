
/*
Locator - Identifies the element on the page
Dom - Document object model
Dom is an api interface provided by the browser

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

import {test, expect, Locator} from "@playwright/test"

test("Varify playwrite built in locators", async({page})=>{

   await page.goto("https://demo.nopcommerce.com/");
   let title = await page.title();
   console.log("Title : ", title);

// page.getByAltText() : Identifies image (and similar element) based on the alt attribute.
// Use this locator when your element supports alt text such as img and area elements. 
 const logo:Locator = page.getByAltText("nopCommerce demo store");

 await expect(logo).toBeVisible();

// page.getByText() - Find an element by the text it contains. You can match by a substring, exact string.
// Locate by visible text
// Use this locator to find non interective elements like, div, span, p, etc.
// For interective elements like, button, a, input, etc. use role locators.

//  await expect(page.getByText("Welcome to our store")).toBeVisible(); // Full string/ full text
//   await expect(page.getByText("Welcome to ")).toBeVisible();         // Providing Substring/ Partial text
    await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible(); // regular expression



// page.getByRole() to locate by explicit and implicit accessibility attributes.
/*
Role locators include buttons, checkboxes, headings, links, tables
and many more and follow w3c specifications for ARIA role.
Prefer for interective elements like butons, checkboxes, links, lists, tables, etc 
*/

await page.getByRole("link", {name:"Register"}).click();
await expect(page.getByRole("heading", {name:"Register"})).toBeVisible();


// page.getByLabel() to locate a form control by associated label's text.
// When to use : Ideal for form fields with visible lebels.

 await page.getByLabel("First name:").fill("Sohan");
 await page.getByLabel("Last name:").fill("Sah");
 await page.getByLabel("Email:").fill("Sohan@gmail.com");
 await page.getByLabel("Company name:").fill("Penta group");

//  page.getByPlaceholder() to locate an input by placeholder.
// Best for input without a label but having a placeholder

await page.getByPlaceholder("Search store").fill("Mobile");



});