import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/login.page";
import { InventoryPage } from "./pages/inventory.page";
import { CartPage } from "./pages/cart.page";
import { CheckoutPage } from "./pages/checkout.page";

const username = process.env.USER_NAME!;
const password = process.env.PASSWORD!;

test.describe("Buy product", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(username, password);
  });

  test("user can buy Sauce Labs Backpack", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.addToCart("sauce-labs-backpack");
    await expect(inventoryPage.locators.cartBadge).toHaveText("1");

    await inventoryPage.openCart();
    await expect(cartPage.locators.itemNames).toHaveText(["Sauce Labs Backpack"]);

    await cartPage.checkout();
    await checkoutPage.fillInformation("Test", "User", "12345");
    await expect(page).toHaveURL(/checkout-step-two/);

    await checkoutPage.finish();
    await expect(page).toHaveURL(/checkout-complete/);
    await expect(checkoutPage.locators.completeHeader).toHaveText(
      "Thank you for your order!",
    );
  });
});
