import { BASE_USER, Users } from "../data/users.data";
import { test } from "../fixsture";
import { expect } from "@playwright/test";

test.describe("sign in", () => {
  test("sing in", async ({ page, app }) => {
    await app.login.visit();
    await app.login.login({
      username: BASE_USER.USERNAME,
      password: BASE_USER.PASSWORD,
    });
    await expect(page).toHaveURL("/inventory.html");
  });

  test("Wrong password", async ({ app }) => {
    await app.login.visit();
    await app.login.login({
      username: BASE_USER.USERNAME,
      password: "wrong password",
    });
    await app.login.assertErrorMessage(
      "Username and password do not match any user in this service"
    );
  });

  test("Empty password", async ({ app }) => {
    await app.login.visit();
    await app.login.login({
      username: "standard_user",
      password: "",
    });
    await app.login.assertErrorMessage("Password is required");
  });

  test("Empty username", async ({ app }) => {
    await app.login.visit();
    await app.login.login({
      username: "",
      password: BASE_USER.PASSWORD,
    });
    await app.login.assertErrorMessage("Username is required");
  });

  test.describe("Specific users", () => {
    test("locked_out_user @low", async ({ app }) => {
      await app.login.visit();
      await app.login.login({
        username: Users.lockedOutUser,
        password: BASE_USER.PASSWORD,
      });
      await app.login.assertErrorMessage(
        "Sorry, this user has been locked out"
      );
    });

    test("problem_user", async ({ app, page }) => {
      await app.login.visit();
      await app.login.login({
        username: "problem_user",
        password: "secret_sauce",
      });
      await expect(page).toHaveURL("/inventory.html");
      await app.login.whatIsTheCorrectPhoto(
        "/static/media/sl-404.168b1cce10384b857a6f.jpg"
      );
    });

    test("performance_glitch_user", async ({ app, page }) => {
      await app.login.visit();
      await app.login.login({
        username: "performance_glitch_user",
        password: "secret_sauce",
      });
      await expect(page).toHaveURL("/inventory.html");
    });

    test("error_user", async ({ app }) => {
      await app.login.visit();
      await app.login.login({
        username: "error_user",
        password: "secret_sauce",
      });
    });

    test("visual_user", async ({ app, page }) => {
      await app.login.visit();
      await app.login.login({
        username: "visual_user",
        password: "secret_sauce",
      });

      await expect(page).toHaveURL("/inventory.html");
      await app.login.whatIsTheCorrectPhoto(
        "/static/media/sl-404.168b1cce10384b857a6f.jpg"
      );
    });
  });
});
