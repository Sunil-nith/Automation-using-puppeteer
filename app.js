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

  const setChain = async () => {
    try {
      await page.waitForSelector('#react-select-2-input');
      await page.type('#react-select-2-input', 'Arbitrum');
      await page.keyboard.press('Enter');
    } catch (error) {
      console.error('Error occurred during setChain:', error.message);
    }
  };

  await setChain();

  
// Keep the browser window open
})();