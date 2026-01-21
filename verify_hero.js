const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const filePath = `file://${path.resolve('index.html')}`;
  console.log(`Navigating to ${filePath}`);

  // Desktop
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(filePath);
  await page.waitForTimeout(1000); // Wait for animations
  await page.screenshot({ path: 'verification/hero_desktop.png' });

  // Mobile
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto(filePath);
  await page.waitForTimeout(1000); // Wait for animations
  await page.screenshot({ path: 'verification/hero_mobile.png' });

  await browser.close();
})();
