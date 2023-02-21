import { test, devices, expect } from '@playwright/test';

let urlHome = "http://localhost:3000";
let urlAlbums = "http://localhost:3000/albums";

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 },
})

test.describe('Main area', () => {
    test("H2 colors", async ({ page }) => {
        await page.goto(urlAlbums);

        const h2color = page.locator("h2");

        const testcolor = await h2color.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color");
        });

        console.log(testcolor);
        expect(testcolor).toBe("rgb(243, 232, 211)");
    });

    test('H2 Tag', async ({ page }) => {
        await page.goto(urlAlbums)

        await expect(page.locator('h2')).toContainText('Go back');
    })


})