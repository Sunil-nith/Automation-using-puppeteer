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

  const selectSellToken = async () => {

    try {
      // There are two buttons of same class and here we have to click on first one.
    const buttons = await page.$$('.css-qjhap')
    const btn = buttons[0];
    await btn.click();
   
    // Then we will type token name in searchBox ,that we want to select.
    await page.waitForSelector('div:nth-child(2) > input');
    await page.type('div:nth-child(2) > input', 'WBTC');
    
    //Then we will wait for result of tokens that we were typed.
    await page.waitForTimeout(1000);
    
    //Then we will click on the first result.
    await page.waitForSelector('div.List > div > div:nth-child(1) > div');
    await page.click('div.List > div > div:nth-child(1) > div');
      
    } catch (error) {
      console.error('Error occurred during selectSellToken:', error.message);
    }
  };

  await setChain();
  await setYouSell();
  await selectSellToken();


// Keep the browser window open
})();