import { test, devices, expect } from '@playwright/test';

let urlHome = "http://localhost:3000";
let urlAlbums = "http://localhost:3000/albums";

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
    // viewport: { width: 414, height: 896 }
})

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(urlHome)

        await expect(page).toHaveTitle('Home');
    })

    test('The favicon', async ({ page }) => {
        await page.goto(urlHome)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/kkhead.png')
    })
})
