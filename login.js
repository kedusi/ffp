const puppeteer = require('puppeteer');
const url = 'https://myfacilityfitpro.com';
module.exports = async function () {
    let domLoadCount = 0;
    function trackDomLoads() {
        console.log('DOM loads: ' + ++domLoadCount);
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('domcontentloaded', () => {trackDomLoads();});

    await page.goto(url);
    console.log(`Visiting ${url}...`);
    
    await page.waitForXPath('//*[@id="next"]');
    console.log((await (await (await page.$('title')).getProperty('innerHTML')).jsonValue()));
    await page.type('#signInName', 'ksilence');
    await page.type('#password', '7^Ci2110');
    await page.click('#next');
    console.log('Signing in...')
    
    await page.waitForXPath('//*[@id="tilemenuWorkRequests"]');
    // console.log((await (await (await page.$('title')).getProperty('innerHTML')).jsonValue()));
    // await page.waitForTimeout(10000);
    // console.log('Waiting for page load...');
    // await page.click('#tilemenuWorkRequests');
    // await page.waitForTimeout(10000);
    // console.log('Clicking work requests, Waiting for page load...');
    // console.log((await (await (await page.$('title')).getProperty('innerHTML')).jsonValue()));
    // await page.screenshot({path: 'screenshot.jpg'});
    // console.log('Getting screenshot...');

    const workOrders = fetch("https://www.myfacilityfitpro.com/WorkRequests/WorkRequests", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,cs;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "request-context": "appId=cid-v1:ecf9ae22-7354-4ef9-a0fe-c4ab700a9a3d",
    "request-id": "|T3U3j.xmJTz",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://www.myfacilityfitpro.com/WorkRequests",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "CampusID=1988&SearchText=&QuickSearchTitle=employeeassignments&EmployeeID=&WRSubTypeID=&RequestDateFrom=&RequestDateTo=&NeededDateFrom=&NeededDateTo=&LinkGroupID=&TierLevelID=&isDeleted=false&departmentHead=&IsWorkRequestLifeSafety=&Statuses=&Buildings=&BuildingID=&Floor=&Area=&Room=&wrtypes=&Shops=&ServiceTypes=&ProblemID=&PriorityID=&take=100&skip=0&page=1&pageSize=100&sort%5B0%5D%5Bfield%5D=&sort%5B0%5D%5Bdir%5D=asc",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

    console.log(workOrders);

    await browser.close();
    console.log('Browser closed');
}