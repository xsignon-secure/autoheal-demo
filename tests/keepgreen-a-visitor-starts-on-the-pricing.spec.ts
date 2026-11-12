import { expect, test } from '@playwright/test';

test('visitor goes from the pricing page to the shop home page', async ({ page }) => {
  await page.goto('/pricing');
  await expect(page.getByRole('heading', { name: 'Pricing' })).toBeVisible();

  await page.getByRole('navigation').getByRole('link', { name: 'Shop' }).click();

  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole('heading', { name: 'Demo Shop' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Coffee mug' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
});
