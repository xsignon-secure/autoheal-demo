import { expect, test } from '@playwright/test';

test('visitor navigates from the home page to the login page', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Demo Shop' })).toBeVisible();

  await page.getByRole('navigation').getByRole('link', { name: 'Account' }).click();

  await expect(page).toHaveURL(/\/login$/);
  await expect(page.getByRole('heading', { name: 'Welcome back' })).toBeVisible();
  await expect(page.getByLabel('Email')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
});
