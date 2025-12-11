import { test } from "../fixsture";

test.describe("Another test", () => {
  test("User can add product to basket", async ({ app }) => {
    await app.page.pause()
  })
})