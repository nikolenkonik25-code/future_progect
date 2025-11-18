import { test, expect } from '@playwright/test';

test("User can open login page", async ({ page }) => {
  await page.goto("/inventory-item.html?id=4")
  await page.pause()
})