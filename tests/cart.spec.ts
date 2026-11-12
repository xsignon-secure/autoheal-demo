import { expect, test } from '@playwright/test';

test('add a mug to the cart', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('status')).toHaveText('1 item in your cart');
});
