
// This page contains all necessary puppeteer automation methods 
module.exports = {

    // get text
    async getSelectorText(selector) {
        let text = await page.$eval(selector, (element) => element.textContent);
        // let text =  await page.$eval(this.label, el => el.innerText);
        console.log(text);
        return text;
    },

    // get element text
    async getElementText(selector) {
        let element = await page.$(selector);
        let text = await (await element.getProperty('textContent')).jsonValue();
        console.log(text);
        return text;
    },



    // get elements
    async getElements(selector) {
        let elements = await page.$$(selector);
        return elements;
    },

    // get element length
    async getElementLength(selector) {
        let elements = await page.$$(selector);
        let length = elements.length
        // console.log(length)
        return length;
    },
    // or

    async getCount(selector) {
        let count = await page.$$eval(selector, ele => ele.length);
        console.log(count)
        return count
    },

    // get dropdowm options 
    async getDropdownOptions(selector) {
        let elements = await page.$$(selector);
        let options = []
        for (let element of elements) {
            const text = await page.evaluate(element => element.textContent, element)
            options.push(text)
            // console.log(text)
        }
        return options
    },

    // or

    async getMultipleElementTexts(selector) {
        let texts = await page.$$eval(selector, elements => elements.map(item => item.textContent))
        console.log(texts)
        return texts
    },


    // set dropdown option
    async setDropdownOption(selector, value) {
        let elements = await page.$$(selector);
        for (let element of elements) {
            const text = await page.evaluate(element => element.textContent, element)
            // console.log(text)
            if (value.toLowerCase() == (text.trim()).toLowerCase()) {
                // console.log(text)
                await element.click()
            }
        }

    },

    // get value
    async getValue(selector) {
        let value = await page.$eval(selector, (element) => element.value)
        console.log(value)
        return value
    },
    // clear input field
    async clearinputfield(selector) {
        await page.$eval(selector, el => el.value = ''); 
    },

    // clear input field and type
    async clearandtype(selector, value) {
        await page.$eval(selector, el => el.value = '');
        await page.type(selector, value);
        
    },


}