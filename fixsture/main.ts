import { test as base } from "@playwright/test";
import { App } from "../app/index.ts";
import { BASE_USER } from "../data/users.data.ts";

export const test = base.extend<{
  app: App;
}>({
  app: async ({ page }, use) => {
    const app = new App(page);
    await app.login.visit();
    await app.login.login({
      username: BASE_USER.USERNAME,
      password: BASE_USER.PASSWORD,
    });

    await use(app);
  },
});
