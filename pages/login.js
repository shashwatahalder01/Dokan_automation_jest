

module.exports = {

    // locators

    // user dashboard
    home: 'ul[class="nav-menu"] li[class="current_page_item"] a',
    cart: 'ul[class="nav-menu"] li[class="page_item page-item-11"] a',
    checkout: 'ul[class="nav-menu"] li[class="page_item page-item-12"] a',
    dashboard: 'body > div:nth-child(1) > header:nth-child(1) > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)',
    myaccount: 'li[class="page_item page-item-13 focus"] a',
    myorders: 'ul[class="nav-menu"] li[class="page_item page-item-8"] a',
    shop: 'ul[class="nav-menu"] li[class="page_item page-item-10"] a',
    storelist: 'ul[class="nav-menu"] li[class="page_item page-item-7"] a',

    // user login
    username: '#username',
    userPassword: '#password',
    rememberMe: '#rememberme',
    logIn: 'button[value="Log in"]',
    lostPassword: 'a[href="http://moduletest.test/my-account/lost-password/"]',

    // user registration
    regEmail: '#reg_email',
    regPassword: '#reg_password',
    regCustomer: 'input[value="customer"]',
    regVendor: 'input[value="seller"]',

    // register vendor
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
    customerLogout: 'li[class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout"] a',
    vendorLogout: 'a:nth-child(3)',


    // admin login

    adminEmail: '#user_login',
    adminPassword: '#user_pass',
    adminRememberMe: '#rememberme',
    adminLogin: '#wp-submit',

    // admin logout

    // adminUserMenu: 'body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
    adminUserMenu: '#wp-admin-bar-my-account a',
    adminLogout: '#wp-admin-bar-logout a',



    async login(username, password) {
        await page.goto('http://dokan2.test/my-account');
        await page.type(this.username, username)
        await page.type(this.userPassword, password);
        await page.click(this.logIn);
        await page.waitForTimeout(2000); // TODO: add page load complete to revome this line
    },


    async vendorlogout() {
        await page.click(this.vendorLogout)
    },


    async adminlogin(username, password) {
        await page.goto('http://dokan2.test/wp-admin')
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


}