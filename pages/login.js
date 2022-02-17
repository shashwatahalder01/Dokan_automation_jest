const { opennewtab } = require("../pages/base.js");
const base = require("../pages/base.js");

module.exports = {

    // locators

    // frontend homepage

    // home: 'ul[class="nav-menu"] li[class="current_page_item"] a',
    // cart: 'ul[class="nav-menu"] li[class="page_item page-item-11"] a',
    // checkout: 'ul[class="nav-menu"] li[class="page_item page-item-12"] a',
    // dashboard: 'body > div:nth-child(1) > header:nth-child(1) > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)',
    // myaccount: 'li[class="page_item page-item-13 focus"] a',
    // myorders: 'ul[class="nav-menu"] li[class="page_item page-item-8"] a',
    // shop: 'ul[class="nav-menu"] li[class="page_item page-item-10"] a',
    // storelist: 'ul[class="nav-menu"] li[class="page_item page-item-7"] a',

    home: '.nav-menu > li:nth-child(1) > a',
    cart: '.nav-menu > li:nth-child(2) > a',
    checkout: '.nav-menu > li:nth-child(3) > a',
    dashboard: '.nav-menu > li:nth-child(4) > a',
    myAccount: '.nav-menu > li:nth-child(5) > a',
    myOrders: '.nav-menu > li:nth-child(6) > a',
    shop: '.nav-menu > li:nth-child(8) > a',
    storeList: '.nav-menu > li:nth-child(9) > a',    

    // frontend user login
    username: '#username',
    userPassword: '#password',
    rememberMe: '#rememberme',
    logIn: 'button[value="Log in"]',
    lostPassword: 'woocommerce-LostPassword > a',

    // user registration
    
    // customer registration
    regEmail: '#reg_email',
    regPassword: '#reg_password',
    regCustomer: 'input[value="customer"]', // radio btn

    // vendor registration
    regVendor: 'input[value="seller"]',  // radio btn
    firstname: '#first-name',
    lastname: '#last-name',
    shopname: '#company-name',
    shopurl: '#seller-url',
    companyName: '#dokan-company-name',
    companyId: '#dokan-company-id-number',
    vatNumber: '#dokan-vat-number',
    bankName: '#dokan-bank-name',
    bankIban: '#dokan-bank-iban',
    phone: '#shop-phone',
    subscriptionPack: '#dokan-subscription-pack',

    //register btn
    register: 'button[value="Register"]',


    // user logout
    customerLogout: '.woocommerce-MyAccount-navigation-link--customer-logout > a',
    vendorLogout: 'a:nth-child(3)',


    // user forget password
    resetPasswordEmail: '#user_login',
    resetPasswordbtn: 'button[value="Reset password"]',


    // admin login
    adminEmail: '#user_login',
    adminPassword: '#user_pass',
    adminRememberMe: '#rememberme',
    adminLogin: '#wp-submit',

    // admin logout
    adminUserMenu: '#wp-admin-bar-my-account a',
    adminLogout: '#wp-admin-bar-logout a',


    // Data

    baseUrl: 'http://dokan8.test',

    async customerregister(username, password) {
        await page.goto(this.baseUrl + '/my-account');
        await page.type(this.regEmail, username)
        await page.type(this.regPassword, password);
        await page.click(this.regCustomer);
        await page.click(this.register);
        await page.waitForTimeout(2000); // TODO: add page load complete to revome this line
    },

    async vendorregister(username, password, firstname, lastname, shopname, shopurl, companyName, companyId, vatNumber,bankName, bankIban, phone) {
        await page.goto(this.baseUrl + '/my-account');
        await page.type(this.regEmail, username)
        await page.type(this.regPassword, password);
        await page.type(this.firstname, firstname);
        await page.type(this.lastname, lastname);
        await page.type(this.shopname, shopname);
        await page.type(this.shopurl, shopurl);
        await page.type(this.companyName, companyName);
        await page.type(this.companyId, companyId);
        await page.type(this.vatNumber, vatNumber);
        await page.type(this.bankName, bankName);
        await page.type(this.bankIban, bankIban);
        await page.type(this.phone, phone);
        await page.click(this.regVendor);
        await page.click(this.register);
        await page.waitForTimeout(2000); // TODO: add page load complete to revome this line
    },



    async login(username, password) {
        await page.goto(this.baseUrl + '/my-account');
        await page.type(this.username, username)
        await page.type(this.userPassword, password);
        await page.click(this.logIn);
        await page.waitForTimeout(5000); // TODO: add page load complete to revome this line
    },

    async customerlogout() {
        await page.click(this.customerLogout)
    },
    async vendorlogout() {
        await page.click(this.vendorLogout)
    },


    async adminlogin(username, password) {
        await page.goto(this.baseUrl + + '/wp-admin')
        await page.type(this.adminEmail, username)
        await page.type(this.adminPassword, password)
        await page.click(this.adminLogin)
        await page.waitForTimeout(5000) // TODO: add page load complete to revome this line
    },

    async adminlogout(username, password) {
        await page.hover(this.adminUserMenu)
        await page.waitForTimeout(2000) 
        await page.click(this.adminLogout)
        await page.waitForTimeout(5000) // TODO: add page load complete to revome this line
    },

    async switchtoadmin(username, password){
        // await opennewtab()
        // await page.waitForTimeout(2000) // TODO: add page load complete to revome this line
        await this.adminlogin(username, password)
    }

}