const { assert } = require('chai');

describe('Меню гамбургер', async function() {
    it('Меню скрывается за гамбургером при ширине меньше 576px', async function({ browser }) {
        const puppetter = await browser.getPuppeteer();
        await browser.setWindowSize(560, 320);
        const [page] = await puppetter.pages();
        await page.goto(`http://localhost:3000/hw/store?bug_id=${process.env.BUG_ID}`);

        await page.waitForSelector('nav', {timeout: 5000 })
        await this.browser.assertView('plain', 'nav');
    });

    it('При выборе элемента из меню, гамбургер закрывается', async function({ browser }) {
        const puppetter = await browser.getPuppeteer();
        await browser.setWindowSize(560, 320);
        const [page] = await puppetter.pages();
        await page.goto(`http://localhost:3000/hw/store?bug_id=${process.env.BUG_ID}`);

        await page.waitForSelector('.Application-Toggler', {timeout: 5000 });
        await page.click('.Application-Toggler');

        await page.waitForSelector('.nav-link');
        await page.click('.nav-link');
        await page.waitForSelector('h1');
        await this.browser.assertView('plain', 'nav');
    });
});
