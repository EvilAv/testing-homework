// const { assert } = require('chai');

// describe('microsoft', async function() {
//     it('Тест, который пройдет', async function({ browser }) {
//         // await this.browser.url('https://www.microsoft.com/ru-ru/');
//         const puppetter = await browser.getPuppeteer();
//         await browser.setWindowSize(1920, 1080);
//         const [page] = await puppetter.pages();
//         await page.goto('http://localhost:3000/hw/store');
//         //await this.browser.url('http://localhost:3000/hw/store');
//         await page.waitForSelector('body', {timeout: 5000 })
//         await this.browser.assertView('plain', 'body');

//         // const title = await this.browser.$('#uhfLogo').getText();
//         // assert.equal(title, 'Microsoft');
//     });
// });
