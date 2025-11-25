import { test, expect } from '@playwright/test';
import { BASE_URL } from '../data/constants.data';

test.describe.only('SauceDemo Login', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

 
  test('Successful login', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });


  test('Wrong password', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'wrong_pass');
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username and password do not match');
  });


  test('Empty username', async ({ page }) => {
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username is required');
  });


  test('Empty password', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Password is required');
  });

});
