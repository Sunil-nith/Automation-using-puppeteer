const puppeteer = require('puppeteer');

(async () => {
      // Launch headful browser and go to swap.defillama.com
  const browser = await puppeteer.launch(
    {
      headless: false,
      defaultViewport:false,

    });
  const page = await browser.newPage();
  await page.goto('https://swap.defillama.com');
})();