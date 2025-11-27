import { test } from '../fixsture';
import { expect } from '@playwright/test';

test.describe.only("sign in", () => {
  test("sing in", async ({ page, app }) => {
    await app.login.visit();
    await app.login.login({
      username: "standard_user",
      password: "secret_sauce"
    })
  })

  test("Wrong password", async ({ page }) => {
    await page.goto('');
    const nameInput = page.getByTestId("username");
    const passwordInput = page.getByTestId("password");
    const loginBtn = page.getByTestId("login-button");
    await page.getByPlaceholder('Username').fill("standard_user");
    await page.getByPlaceholder('Password').fill("secret_sauca");
    await expect(nameInput).toHaveValue("standard_user");
    await expect(passwordInput).toHaveValue("secret_sauca");
    await loginBtn.click();
    await expect(page.locator('[data-test="error"]'))
      .toContainText('do not match');
  });

  test("Empty password", async ({ page }) => {
    await page.goto('')
    const nameInput = page.getByTestId("username");
    const passwordInput = page.getByTestId("password");
    const loginBtn = page.getByTestId("login-button");
    await nameInput.fill("standard_user");
    await passwordInput.fill("");
    await expect(nameInput).toHaveValue("standard_user");
    await expect(passwordInput).toHaveValue("");
    await loginBtn.click();
    await expect(page.locator('[data-test="error"]'))
      .toContainText('Password is required');
  });


});
