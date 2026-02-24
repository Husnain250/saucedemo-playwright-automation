class InventoryPage {

  constructor(page) {
    this.page = page;
    this.addToCartButton = '#add-to-cart-sauce-labs-backpack';
    this.cartIcon = '.shopping_cart_link';
    this.checkoutButton = '#checkout';
  }

  async addProductToCart() {
    await this.page.click(this.addToCartButton);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async clickCheckout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = InventoryPage;