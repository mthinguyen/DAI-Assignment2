import { test, devices, expect } from '@playwright/test';

let urlHome = "http://localhost:3000";
let urlAlbums = "http://localhost:3000/albums";


test.use({
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 }
})

test.describe("Main area", () => {
    test("Count H1 tags", async ({ page }) => {
        await page.goto('http://localhost:3000/albums')

        await expect(page.locator('div > h1')).toHaveCount(2);
    })

    test('Count div tags inside main tag', async ({ page }) => {
        await page.goto('http://localhost:3000/albums');
      
        await expect(page.locator('main > div')).toHaveCount(5);
    
      });

})


