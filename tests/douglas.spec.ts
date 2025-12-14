import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.douglas.de/de');
  await page.waitForTimeout(10000);
  await page.getByTestId('uc-accept-all-button').click();
  await page.goto('https://www.douglas.de/de');
  await expect(page.getByTestId('tenant-logo-link')).toBeVisible();
});