
const { test, expect } = require('@playwright/test');
const path = require('path');

const fileUrl = `file://${path.resolve(__dirname, 'index.html')}`;

test.describe('Sobre mí section scroll optimization', () => {

  test('Mobile: cards stack by 50% scroll progress', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(fileUrl);

    const mobOuter = page.locator('#mobStackOuter');
    await mobOuter.scrollIntoViewIfNeeded();

    const box = await mobOuter.boundingBox();
    const totalScroll = box.height - 667;

    // Scroll to 50% progress of the section
    const middleScroll = box.y + (totalScroll * 0.5);
    await page.evaluate((y) => window.scrollTo(0, y), middleScroll);

    // Give it a moment to process the scroll event
    await page.waitForTimeout(100);

    // Verify mc4 (the 4th card) has translateY(0)
    const mc4 = page.locator('#mc4');
    const transform = await mc4.evaluate(el => el.style.transform);
    expect(transform).toBe('translateY(0svh)');

    // Check it's visible on screen
    await expect(mc4).toBeVisible();
  });

  test('Desktop: section height is reduced', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(fileUrl);

    const abl = page.locator('.abl').first();
    const padding = await abl.evaluate(el => window.getComputedStyle(el).padding);
    expect(padding).toBe('48px 64px 48px 80px'); // 3rem 4rem 3rem 5rem assuming 16px rem

    const abStack = page.locator('.ab-stack').first();
    const stackPaddingTop = await abStack.evaluate(el => window.getComputedStyle(el).paddingTop);
    expect(stackPaddingTop).toBe('16px'); // 1rem
  });

});
