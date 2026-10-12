import { Page } from "@playwright/test";
import { CheckoutLocators } from "../locators/checkout.locators";

export class CheckoutPage {
  readonly locators: CheckoutLocators;

  constructor(private readonly page: Page) {
    this.locators = new CheckoutLocators(page);
  }

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.locators.firstNameInput.fill(firstName);
    await this.locators.lastNameInput.fill(lastName);
    await this.locators.postalCodeInput.fill(postalCode);
    await this.locators.continueButton.click();
  }

  async finish() {
    await this.locators.finishButton.click();
  }
}
