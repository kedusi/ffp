const puppeteer = require('puppeteer');
const url = 'https://myfacilityfitpro.com';
module.exports = async function () {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(url);
    console.log(`Visiting ${url}...`);
    
    await page.waitForSelector('#signInName');
    await page.type('#signInName', 'ksilence');
    await page.type('#password', '7^Ci2110');
    await page.click('#next');
    console.log('Signing in...')

    await page.waitForNavigation({waitUntil: 'networkidle0'});
    console.log('Waiting for navigation...');

    await page.waitForTimeout(5000);
    console.log('Waiting 5 seconds...');

    await page.$eval('#tilemenuWorkRequests', el => el.click());
    console.log('Clicking work requests...');

    await page.waitForTimeout(5000);
    console.log('Waiting 5 seconds...');

    console.log(await page.evaluate(result => result));

    await browser.close();
    console.log('Browser closed...');
}