import { test, devices, expect } from '@playwright/test';

let urlHome = "http://localhost:3000";
let urlAlbums = "http://localhost:3000/albums";

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 },
})

test.describe('Main area', () => {
    test('H1 tag', async ({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('h1')).toContainText('Welcome to K.K. Fandom');
    })

    test('H2 Tag', async ({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('h2')).toContainText('Discover his Songs');
    })


})