const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login');

test('Verify User Login with Valid Credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});