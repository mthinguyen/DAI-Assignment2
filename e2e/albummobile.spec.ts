import { test, devices, expect } from '@playwright/test';

let urlHome = "http://localhost:3000";
let urlAlbums = "http://localhost:3000/albums";

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
    // viewport: { width: 414, height: 896 }
})

test.describe('Main area', () => {
    test("Count iframe tags", async ({ page }) => {
        await page.goto('http://localhost:3000/albums')

        await expect(page.locator('iframe')).toHaveCount(1);
    });

    test("Count img tags", async ({ page }) => {
        await page.goto('http://localhost:3000/albums')

        await expect(page.locator('img')).toHaveCount(190);
    });


})
