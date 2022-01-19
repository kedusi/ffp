const puppeteer = require('puppeteer');
const url = 'https://myfacilityfitpro.com';
module.exports = async function () {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: 'screenshot.jpg'});
    browser.close();

    console.log(url);
}