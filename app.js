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

  const setYouSell = async () => {
    try{
      await page.focus('.css-lv0ed5');

      // Press Ctrl+A to select the existing value
      await page.keyboard.down('Control');
      await page.keyboard.press('A');
      await page.keyboard.up('Control');
  
      // Press Backspace to delete the existing value
      await page.keyboard.press('Backspace');
  
      // Type the new value
      await page.keyboard.type('12');
     }catch(error){
      console.error('Error occurred during setYouSell:', error.message);
    }
  };

  await setChain();
  await setYouSell();


// Keep the browser window open
})();