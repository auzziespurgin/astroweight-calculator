// tests/main.spec.js
const { test, expect } = require('@playwright/test');

const url = 'http://localhost:3000/index.html';


test.describe('Astro Weight Calculator', () => {
  test('should load successfully', async ({ request }) => {
    const response = await request.get(url);
    expect(response.status()).toBe(200);
  });
})

test.describe('Astro Weight Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  // Element presence tests
  test('should load input element with id="user-weight"', async ({ page }) => {
    await expect(page.locator('#user-weight')).toBeVisible();
  });

  test('should load select element with id="planets"', async ({ page }) => {
    await expect(page.locator('#planets')).toBeVisible();
  });

  test('should load button element with id="calculate-button"', async ({ page }) => {
    await expect(page.locator('#calculate-button')).toBeVisible();
  });

  test('should load output element with id="output"', async ({ page }) => {
    await expect(page.locator('#output')).toBeAttached();
  });

  // Full integration tests
  const testCases = [
    ['Pluto', '100', '6.00'],
    ['Neptune', '100', '114.80'],
    ['Uranus', '100', '91.70'],
    ['Saturn', '100', '113.90'],
    ['Jupiter', '100', '264.00'],
    ['Mars', '100', '38.95'],
    ['Moon', '100', '16.55'],
    ['Earth', '100', '100.00'],
    ['Venus', '100', '90.32'],
    ['Mercury', '100', '37.70'],
    ['Sun', '100', '2790.00']
  ];

  for (const [planet, weight, expected] of testCases) {
    test(`should show correct result for ${planet}`, async ({ page }) => {
      await page.fill('#user-weight', weight);
      await page.selectOption('#planets', { label: planet });
      await page.click('#calculate-button');

      const output = await page.locator('#output').textContent();
      expect(output).toContain(`If you were on ${planet}, you would weigh ${expected}lbs!`);
    });
  }
});