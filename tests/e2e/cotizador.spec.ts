import { test, expect } from '@playwright/test';

test('cotizador muestra resumen', async ({ page }) => {
  await page.goto('/cotizador');
  await page.getByLabel('Ancho (mm)').fill('1200');
  await page.getByLabel('Alto (mm)').fill('1100');
  await page.getByLabel('Cantidad').fill('2');
  await page.getByRole('button', { name: 'Calcular inversión' }).click();
  await expect(page.getByText('Total estimado')).toBeVisible();
});
