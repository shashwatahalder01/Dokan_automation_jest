const puppeteer = require('puppeteer');

describe('Google', () => {

    beforeAll(async () => {
      // jest.setTimeout(90 * 1000)
      // const browser = await puppeteer.launch({
      //   headless: false,
      // });
      // const page = await browser.newPage();
      // await page.goto('https://google.com');
      await page.goto(URL);
    });
  
    it('should be titled "Google"', async () => {
      // jest.setTimeout(90 * 1000)
      // await page.goto('https://google.com');
      await expect(page.title()).resolves.toMatch('Google');
      // await page.screenshot({ path: './screenshots/example.png' });
      // await page.pdf({ path: 'example.pdf', format: 'a4' });
      // await browser.close();
    });
  });