# Puppeteer Swap Automation


* This Node.js script uses Puppeteer to automate the process of swapping tokens on the https://swap.defillama.com website. It simulates user interactions on the website to set the desired chain, amount to sell, select tokens for selling and buying, and continuously selects the second route to perform the swap.

### Built With

* Node.js
* Javascript
* Puppeteer

## Prerequisites
Before running the application, make sure you have the following prerequisites installed on your system:

* Node.js (version 10 or higher)
* NPM (Node Package Manager)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Sunil-nith/automation-using-puppeteer.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

   

## Usage

* To run the Puppeteer automation script, follow these steps:
1. Navigate to the project directory:
```sh
   cd automation-using-puppeteer
   ```

2. Run the Puppeteer script:
```sh
   npm start
   ```

## Customization
The current script is tailored to swap "WBTC" for "USD Coin" on the https://swap.defillama.com website. If you want to customize the token swapping process, you can modify the following functions in the index.js file:

* setChain: Change the value passed to page.type('#react-select-2-input', 'YourDesiredChain') to set a different chain.
* setYouSell: Change the value passed to await page.keyboard.type('YourDesiredAmount') to set a different amount to sell.
* selectSellToken: Change the value passed to await page.type('div:nth-child(2) > input', 'YourDesiredToken') to select a different token for selling.
* selectBuyToken: Change the value passed to await page.type('div:nth-child(2) > input', 'YourDesiredToken') to select a different token for buying.

## Notes
The script assumes that  https://swap.defillama.com is accessible at the time of execution. If the website's URL or structure changes, the script may require adjustments.
## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please create an issue or submit a pull request.

## Contact

If you have any questions or need further assistance, please feel free to contact me at skjnv2009@gmail.com.



