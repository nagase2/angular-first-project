var browser, page;
pop();

async function pop(browser, page) {
    const puppeteer = require('puppeteer');

 
    var url = 'https://prontotools.io'

    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();

    await page.goto(url);
    const title = await page.title();
    console.log("title:", title)
      
    // < h2 class="font-34 uppercase" > <strong>Tools for Your Growing Business</strong></h2 >
    const center = await page.$eval('h2.font-34.uppercase > strong', e => e.innerHTML);
    console.log(center)

    const phoenix = await page.$eval('div.feature-project > h3 > strong', e => e.innerHTML);
    console.log("★",phoenix)

    const tool = await page.$eval('div.col-md-6.col-sm-7 > h3', e => e.innerHTML);
    console.log("★", tool)
    // const tool2 = await page.$x("//*[@id='footer']/div/div/div[1]/div[2]/h3");
    // console.log("★", tool2)
    
    //xPathで要素を検索
    const linkHandlers = await page.$x("//a[contains(text(), 'Natty Phatharamalai')]");
    if (linkHandlers.length > 0) {
        await linkHandlers[0].click();
    } else {
        throw new Error("Link not found");
    }

   page = await clickLinkText(page, "Natty")
    
    // await page.waitForXPath("//a[contains(text(), 'Natty')]")
    // const linkHandlers2 = await page.$x(`//a[contains(text(), 'Natty')]`);

    // if (linkHandlers2.length > 0) {
    //     await linkHandlers2[0].click();
    // } else {
    //     throw new Error("Link not found");
    // }



    // await page.waitForXPath("//a[contains(text(), 'Read more')]")
    await page.waitForNavigation({ waitUntil: 'load' })
    
    browser.close()
}

/**
 * 指定されたテキストを持つリンクが表示されるのを待ってクリックする。
 * @param {*} page 
 * @param {*} linkText 
 */
async function clickLinkText(page,linkText) {
    await page.waitForXPath("//a[contains(text(), linkText)]")
    const linkHandlers2 = await page.$x(`//a[contains(text(), ${linkText})]`);

    if (linkHandlers2.length > 0) {
        await linkHandlers2[0].click();
    } else {
        throw new Error("Link not found");
    }
    return page;
}

// describe('Open ProntoTools Website', () => {
//     var browser, page;
//     var url = 'https://prontotools.io'
//     beforeEach(async () => {
//         browser = await puppeteer.launch({ headless: false });
//         page = await browser.newPage();
//     })
//     afterEach(() => {
//         browser.close()
//     })
//     test('Title == Pronto Tools', async () => {
//         await page.goto(url);
//         const title = await page.title();
//         console.log("title", title)
//         expect(title).toBe("Pronto Tools");
//     });
//     test("Center == Tools for Your Growing Business", async () => {
//         await page.goto(url);
//         const center = await page.$eval('h2.font-34.uppercase > strong', e => e.innerHTML);
//         expect(center).toBe("Tools for Your Growing Business");
//     });
// })