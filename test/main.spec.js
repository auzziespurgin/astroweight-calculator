const { test, expect } = require('@playwright/test');
const nodeStatic = require('node-static');
const http = require('http');

const PORT = 8888;
const url = `http://localhost:${PORT}/index.html`;

let server;

test.beforeAll(async () => {
  const file = new nodeStatic.Server('./', { cache: 0 });
  server = http.createServer((req, res) => {
    req.addListener('end', () => {
      file.serve(req, res);
    }).resume();
  });

  await new Promise(resolve => server.listen(PORT, resolve));
  console.log(`Test server running at ${url}`);
});

test.afterAll(() => {
  server.close();
});

// Check response
test.describe('Astro Weight Calculator', () => {
  test('should load successfully', async ({ request }) => {
    const response = await request.get(url);
    expect(response.status()).toBe(200);
  });
});

test.describe('Astro Weight Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  // Element presence tests
  test('should have an <input> element with id="user-weight"', async ({ page }) => {
    const locator = page.locator('input#user-weight');
    await expect(locator).toHaveCount(1);
    await expect(locator).toBeVisible();
  });

  test('should have a <select> element with id="planets"', async ({ page }) => {
    const locator = page.locator('select#planets');
    await expect(locator).toHaveCount(1);
    await expect(locator).toBeVisible();
  });

  test('should have a <button> element with id="calculate-button"', async ({ page }) => {
    const locator = page.locator('button#calculate-button');
    await expect(locator).toHaveCount(1);
    await expect(locator).toBeVisible();
  });

  test('should have a <p> element with id="output"', async ({ page }) => {
    const locator = page.locator('p#output');
    await expect(locator).toHaveCount(1);
    await expect(locator).toBeAttached();
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