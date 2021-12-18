require('dotenv').config()
const loginPage = require('../pages/login.js')
const vendorPage = require('../pages/vendor.js')
const env = process.env


describe('vendor functionaly test', () => {

   // beforeAll(async () => {
      
   //  });
    
   //  afterAll(async () => {
      
   //  });

   // beforeEach(async () => {
   //    await page.goto('http://dokan2.test/my-account');
   //  });
    
   //  afterEach(async () => {
   //    await browser.close()
   //  });
    

    it('vendor login', async () => {
       await loginPage.login(env.VENDOR_EMAIL, env.VENDOR_PASSWORD)
    });


    it('vendor logout', async () => {

      await loginPage.login(env.VENDOR_EMAIL, env.VENDOR_PASSWORD)
      await loginPage.vendorlogout() // TODO: shift to vendor page
      
   });



   it('vendor add product', async () => {
      await loginPage.login(env.VENDOR_EMAIL, env.VENDOR_PASSWORD)
      await vendorPage.addproduct()
      
   });



    
  });