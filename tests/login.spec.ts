import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/login.page";

const username = process.env.USER_NAME!;
const password = process.env.PASSWORD!;

test.describe("Login", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test("successful login", async ({ page }) => {
    await loginPage.login(username, password);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await loginPage.logout();
  });

  test("invalid login", async () => {
    await loginPage.login("user", password);
    await expect(loginPage.locators.errorMessage).toHaveText(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });
});
