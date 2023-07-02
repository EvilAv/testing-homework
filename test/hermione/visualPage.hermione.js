const { assert } = require('chai');

describe('Визуальное отображение страниц', async function() {

    it('Корректный результат покупки', async function({ browser }) {
        const puppetter = await browser.getPuppeteer();
        await browser.setWindowSize(1920, 1080);
        const [page] = await puppetter.pages();
        await page.goto(`http://localhost:3000/hw/store/catalog/0?bug_id=${process.env.BUG_ID}`);

        await page.waitForSelector('.ProductDetails-AddToCart');
        await page.click('.ProductDetails-AddToCart');
        await page.click('[href="/hw/store/cart"]');

        await page.waitForSelector('#f-name');
        await page.click('#f-name');
        await page.keyboard.type('aaaaa');

        await page.click('#f-phone');
        await page.keyboard.type('12312312345');

        await page.click('#f-address');
        await page.keyboard.type('away');

        await page.click('.Form-Submit'); 

        await page.waitForSelector('.Cart');
        await this.browser.assertView('plain', '.Cart');
    });

    it('Детализированная карточка товара', async function({ browser }) {
        const puppetter = await browser.getPuppeteer();
        await browser.setWindowSize(1920, 1080);
        const [page] = await puppetter.pages();
        await page.goto(`http://localhost:3000/hw/store/catalog/0?bug_id=${process.env.BUG_ID}`);

        await page.waitForSelector('.ProductDetails');
        await this.browser.assertView('plain', '.ProductDetails', {
            ignoreElements: [
                '.ProductDetails-Color',
                '.ProductDetails-Material',
                '.ProductDetails-Price',
                '.ProductDetails-Description',
                '.ProductDetails-Name'
            ]
        });
    });
});
