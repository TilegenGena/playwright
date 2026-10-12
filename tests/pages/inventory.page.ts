import { Page } from "@playwright/test";
import { InventoryLocators } from "../locators/inventory.locators";

export class InventoryPage {
  readonly locators: InventoryLocators;

  constructor(private readonly page: Page) {
    this.locators = new InventoryLocators(page);
  }

  async addToCart(productId: string) {
    await this.locators.addToCartButton(productId).click();
  }

  async openCart() {
    await this.locators.cartLink.click();
  }
}
