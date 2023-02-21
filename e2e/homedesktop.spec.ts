import { test, devices, expect } from '@playwright/test';

let urlHome = "http://localhost:3000";
let urlAlbums = "http://localhost:3000/albums";

// test.beforeAll(async () => {
//     console.log('Before tests');
// });

// test.afterAll(async () => {
//     console.log('After tests');
// });

test.use({
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 }
})

test.describe("The desktop viewport", () => {
    test("The meta tags", async ({ page }) => {
        await page.goto('http://localhost:3000/')

        await page.goto(urlHome)

        const metaDescription = page.locator('meta[name="page"]')
        await expect(metaDescription).toHaveAttribute("content", "KK Slider Fandom")
})



})
