import { Locator, Page } from "@playwright/test";

export class LoginLocators {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly openMenuButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.usernameInput = page.getByLabel("Username");
    this.passwordInput = page.getByLabel("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorMessage = page.locator("h3");
    this.openMenuButton = page.getByRole("button", { name: "Open Menu" });
    this.logoutButton = page.getByRole("button", { name: "Logout" });
  }
}
