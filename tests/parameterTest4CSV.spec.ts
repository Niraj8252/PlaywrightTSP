/*
Pre-requisite:
Install the csv-parse module to read csv files
  npm install csv-parse
*/


import { test, expect } from "@playwright/test";
import fs from "fs";
import { parse } from "csv-parse/sync";

// Reading data from CSV
const csvFilePath = "testData/CSVFile.csv";
const fileContent = fs.readFileSync(csvFilePath, "utf-8");

const loginTestData: {
  email: string;
  pass: string;
  validity: string;
}[] = parse(fileContent, {
  columns: true,
  skip_empty_lines: true,
});

test.describe("Login data driven test", async() => {

  for (const data of loginTestData) {

    test(`Login test for ${data.email}`, async ({ page }) => {

      await page.goto("https://demowebshop.tricentis.com/login");

      await page.locator("#Email").fill(data.email);
      await page.locator("#Password").fill(data.pass);

      // ✅ Recommended locator
      await page.getByRole("button", { name: "Log in" }).click();

      if (data.validity.toLowerCase() === "valid") {
        // Assert logout link is visible
        await expect(page.locator("a[href='/logout']"))
          .toBeVisible({ timeout: 5000 });
      } else {
        // Assert error message
        await expect(page.locator(".validation-summary-errors"))
          .toBeVisible({ timeout: 3000 });

        // Assert still on login page
        await expect(page)
          .toHaveURL("https://demowebshop.tricentis.com/login");
      }
    });

  }
});
