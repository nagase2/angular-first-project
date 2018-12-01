"use strict";
var assert = require("power-assert");

jasmine.DEFAULT_TIMEOUT_INTERVAL=20000
describe('PersonTest', function () {
  it('コンストラクタのテストです', function () {
    // var person = new Person_1.Person(10, 'hiro');
    // assert.equal(person.id, 10);
    // assert.equal(person.age, 99);
    assert.equal('hiro', 'hiro');
  });
  it('コンストラクタのテスト2です', function () {
    assert.equal(123, 123);
    
  });
  it('コンストラクタのテスト3です', async function () {
    const puppeteer = require('puppeteer');

    var browser, page;
    var url = 'https://prontotools.io'

    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();

    await page.goto(url);
    const title = await page.title();
    console.log("title:", title)

    // < h2 class="font-34 uppercase" > <strong>Tools for Your Growing Business</strong></h2 >
    const center = await page.$eval('h2.font-34.uppercase > strong', e => e.innerHTML);
    console.log(center)

    const phoenix = await page.$eval('div.feature-project > h3 > strong', e => e.innerHTML);
    console.log("★", phoenix)
    assert.equal(phoenix, "Phoenix") //アサーションを実行

    const tool = await page.$eval('div.col-md-6.col-sm-7 > h3', e => e.innerHTML);
    console.log("★", tool)

    browser.close()
    
  });
});
