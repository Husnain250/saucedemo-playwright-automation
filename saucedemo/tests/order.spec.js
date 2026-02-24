const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login');
const InventoryPage = require('../pages/InventoryPage');
const CheckoutPage = require('../pages/CheckoutPage');

test('User Places an Order and Checks Out Successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');


  await inventoryPage.addProductToCart();
  await inventoryPage.goToCart();


  await expect(page.locator('.cart_item')).toBeVisible();


  await inventoryPage.clickCheckout();

  await checkoutPage.fillCheckoutInfo('M Husnain ', 'Asif', '31050');
  await checkoutPage.clickContinue();
  await checkoutPage.clickFinish();


  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

});