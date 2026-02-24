class CheckoutPage {

  constructor(page) {
    this.page = page;
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.successMessage = '.complete-header';
  }

  async fillCheckoutInfo(fname, lname, zip) {
    await this.page.fill(this.firstName, fname);
    await this.page.fill(this.lastName, lname);
    await this.page.fill(this.postalCode, zip);
  }

  async clickContinue() {
    await this.page.click(this.continueButton);
  }

  async clickFinish() {
    await this.page.click(this.finishButton);
  }

  async getSuccessMessage() {
    return await this.page.textContent(this.successMessage);
  }
}

module.exports = CheckoutPage;