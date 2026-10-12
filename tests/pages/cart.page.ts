import { Page } from "@playwright/test";
import { CartLocators } from "../locators/cart.locators";

export class CartPage {
  readonly locators: CartLocators;

  constructor(private readonly page: Page) {
    this.locators = new CartLocators(page);
  }

  async checkout() {
    await this.locators.checkoutButton.click();
  }
}
