import { expect, test, } from "@playwright/test";
import { BasePage } from "./base.page";
import { promises } from "dns";

interface LoginForm {
  username: string;
  password: string;
}

export class LoginPage extends BasePage {
  readonly url = "";
  readonly usernameField = this.page.getByTestId("username");
  readonly passwordField = this.page.getByTestId("password");
  readonly loginBtn = this.page.getByTestId("login-button");
  readonly errorMessage = this.page.locator("error")
  readonly photo = this.page.getByTestId("inventory-item-sauce-labs-backpack-img")
  async login({ username, password }: LoginForm): Promise<void> {
    await test.step("Fill login from", async () => {
      await this.usernameField.fill(username);
      await this.passwordField.fill(password);
      await this.loginBtn.click();
    });
  }
  async assertErrorMessage(message: string): Promise<void> {
    await test.step("Assert error message", async () => {
      await expect(this.errorMessage).toBeVisible();
      await expect(this.errorMessage).toContainText(message)
    })
  }
  async whatIsTheCorrectPhoto(photoUrl: string): Promise<void> {
    await test.step("Check photo", async () => {

      await expect(this.photo).toHaveAttribute("src", photoUrl)
    })
  }
}