
pop();

async function pop() {
    const puppeteer = require('puppeteer');

    var browser, page;
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
    
    browser.close()

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