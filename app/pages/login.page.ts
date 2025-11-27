import { test } from "@playwright/test";
import { BasePage } from "./base.page";

interface LoginForm {
  username: string;
  password: string;
}

export class LoginPage extends BasePage {
  readonly url = "";
  readonly usernameField = this.page.getByTestId("username");
  readonly passwordField = this.page.getByTestId("password");
  readonly loginBtn = this.page.getByTestId("login-button");

  async login({ username, password }: LoginForm): Promise<void> {
    await test.step("Fill login from", async () => {
      await this.usernameField.fill(username);
      await this.passwordField.fill(password);

      await this.loginBtn.click();
    });
  }
}