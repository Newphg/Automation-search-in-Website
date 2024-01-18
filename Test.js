const puppeteer = require('puppeteer');
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 };

(async () =>{
    const browser = await puppeteer.launch({headless: false,args: ['--start-maximized'] });
    
    const page = await browser.newPage();
    await page.goto('http:/shopee.co.th',{
        waitUntil:'networkidle0'});   
    await delay(2000);
    await page.click('.shopee-button-outline');
  
    await page.click('.btn');
    await page.type('.shopee-searchbar-input__input', 'อาหารแมว'); 
    await page.click('.btn',{
        waitUntil:'networkidle0'});
    await delay(2000);    
    await page.type('.pDzPRp','0863286361');
    await page.screenshot({ path: '1stshopee.png'});
    await page.close();
})();