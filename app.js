const puppeteer = require('puppeteer');

(async () => {
    // Launch headful browser and go to swap.defillama.com
    const browser = await puppeteer.launch(
        {
            headless: false,
            defaultViewport: false,

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
        try {
            await page.focus('.css-lv0ed5');

            // Press Ctrl+A to select the existing value
            await page.keyboard.down('Control');
            await page.keyboard.press('A');
            await page.keyboard.up('Control');

            // Press Backspace to delete the existing value
            await page.keyboard.press('Backspace');

            // Type the new value
            await page.keyboard.type('12');
        } catch (error) {
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

    
    const selectBuyToken = async () => {
        try {
            // There are two buttons of same class and here we have to click on second one.
            const buttons = await page.$$('.css-qjhap')
            const btn = buttons[1];
            await btn.click();

            // Then we will type token name in searchBox ,that we want to select.
            await page.waitForSelector('div:nth-child(2) > input');
            await page.type('div:nth-child(2) > input', 'USD Coin');

            //Then we will wait for result of tokens that we were typed.
            await page.waitForTimeout(1000);

            //Then we will click on the first result.
            await page.waitForSelector('div.List > div > div:nth-child(2) > div');
            await page.click('div.List > div > div:nth-child(2) > div');

            //Then we will wait for the available routes.
            await page.waitForTimeout(4000);

        } catch (error) {
            console.error('Error occurred during selectBuyToken:', error.message);
        }
    };


    const selectRouteToSwap = async () => {
        try {
            //There are more routes of same class but we have to click on the second one.
            const elementSelector = '.css-199sga5';
            await page.waitForSelector(elementSelector, { visible: true });
            const elements = await page.$$(elementSelector);
            await elements[1].click();
        } catch (error) {
            console.error('Error occurred during selectRouteToSwap:', error.message);
        }
    };

    await setChain();
    await setYouSell();
    await selectSellToken();
    await selectBuyToken();

    //Routes are changing their position dynamically but we have to select second route.so we will call selectRouteToSwap function every 0.2 second.
    setInterval(async () => {
        await selectRouteToSwap();
    }, 200);


    // Keep the browser window open
})();