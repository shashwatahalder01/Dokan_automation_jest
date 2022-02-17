const base = require("../pages/base.js");

module.exports = {
    // locators


    //vendor setup wizard

    letsGo: '.lets-go-btn',
    notRightNow: '.not-right-now-btn',  // TODO:recheck

    // store setup   
    storeProductsPerPage: '#store_ppp',  
    street: '#address[street_1]',
    street2: '#address[street_2]',
    city: '#address[city]',
    zipCode: '#address[zip]',
    country: '#select2-addresscountry-container',
    countryInput: '.select2-search__field',
    state: '#calc_shipping_state',
    email: 'td[class="checkbox"] label[for="show_email"]',  // 'label:nth-child(2)'
    continueStoreSetup: '.store-step-continue',              //'input[value="Continue"]'
    skipTheStepStoreSetup: '.store-step-skip-btn',

    // payment setup
    paypal: '.email',  //input[placeholder='you@domain.com']
    bankAccountName: '.dokan-form-group:nth-child(1) .dokan-form-control',  //input[placeholder='Your bank account name']
    bankAccountNumber: '.dokan-form-group:nth-child(2) .dokan-form-control',  //input[placeholder='Your bank account number']
    bankName: '.dokan-form-group:nth-child(3) .dokan-form-control',  //input[placeholder='Name of bank']
    bankAddress: '.dokan-form-group:nth-child(4) .dokan-form-control',  //textarea[placeholder='Address of your bank']
    bankRoutingNumber: '.dokan-form-group:nth-child(5) .dokan-form-control', //input[placeholder='Routing number']
    bankIban: '.dokan-form-group:nth-child(6) .dokan-form-control',  //input[placeholder='IBAN']
    bankSwiftCode: '.dokan-form-group:nth-child(7) .dokan-form-control',  //input[placeholder='Swift code']

    customPayment: 'tr:nth-child(3) .dokan-form-control', //input[name='settings[dokan_custom][value]']

    paypalMarketplace: '#vendor_paypal_email_address',
    paypalMarketplaceSigUp: '.vendor_paypal_connect',

    ConnectWithStripe: '.dokan-stripe-connect-link',

    continuePaymentSetup: '.payment-continue-btn',
    skipTheStepPaymentSetup: '.payment-step-skip-btn',

    goToStoreDashboard: '.wc-setup-actions step > .button',
    returnToMarketplace: '.wc-return-to-dashboard',

	




    // vendor dashboard
    dashboard: 'li[class="dashboard"] a',
    product: 'li[class="products"] a',
    orders: 'li[class="orders"] a',
    userSubscription: 'a[href="http://dokan2.test/dashboard/user-subscription/"]',
    coupons: 'a[href="http://dokan2.test/dashboard/coupons/"]',
    reports: 'a[href="http://dokan2.test/dashboard/reports/"]',
    deliveryTime: 'a[href="http://dokan2.test/dashboard/delivery-time-dashboard/"]',
    reviews: 'a[href="http://dokan2.test/dashboard/reviews/"]',
    withdraw: 'a[href="http://dokan2.test/dashboard/withdraw/"]',
    returnRequest: 'a[href="http://dokan2.test/dashboard/return-request/"]',
    staff: 'a[href="http://dokan2.test/dashboard/staffs/"]',
    followers: 'a[href="http://dokan2.test/dashboard/followers/"]',
    analytics: 'a[href="http://dokan2.test/dashboard/analytics/"]',
    announcements: 'a[href="http://dokan2.test/dashboard/announcement/"]',
    tools: 'a[href="http://dokan2.test/dashboard/tools/"]',
    auction: 'a[href="http://dokan2.test/dashboard/auction/"]',
    support: 'a[href="http://dokan2.test/dashboard/support/"]',
    settings: 'a[href="http://dokan2.test/dashboard/settings/store/"]',
    visitStore: '.tips[data-placement="top"][href="http://dokan2.test/store/vendor_1/"]',
    editAccount: 'div[class="dokan-dash-sidebar"] a:nth-child(2)',

    // products
    addNewProduct: ".dokan-btn.dokan-btn-theme.dokan-add-new-product",
    productName: 'input[placeholder="Product name.."]',
    ProductImage: ".dokan-feat-image-btn.btn.btn-sm",
    setFeatureImage: 'button[class="button media-button button-primary button-large media-button-select"]',
    addGalleryImage: 'a[class="add-product-images"]',
    // addGalleryImage: '.add-image.add-product-images.tips',
    ProductPrice: "#_regular_price",
    productDiscountPrice: "#_sale_price",
    productDiscountSchedule: ".sale_schedule",
    scheduleFrom: "#dp1639837118141",
    scheduleTo: "#dp1639837118142",
    scheduleCancel: ".cancel_sale_schedule.dokan-hide",
    productCategory: "#select2-product_cat-container",
    // categoryValues: ".select2-results__option",
    categoryValues: ".select2-results ul li",  // TODO: create dropdown locator like this (ul > li or ul li)
    productTags: 'input[placeholder="Select product tags"]',
    productDescription: 'textarea[placeholder="Enter some short description about this product..."]',
    createProduct: "#dokan-create-new-product-btn",
    createAndNewProduct: "#dokan-create-and-add-new-product-btn",
    abcde: "",

    label: 'label[for="_regular_price"]',

    // methods



    async vendorSetupWizard(storeProductsPerPage, street, street2, city, zipCode, country, state, paypal, bankAccountName,bankAccountNumber, bankName, bankAddress, bankRoutingNumber, bankIban, bankSwiftCode, customPayment) {
        await page.click(this.letsGo);
        await page.waitForTimeout(3000);

        await page.type(this.storeProductsPerPage, storeProductsPerPage);
        await page.type(this.street, street);
        await page.type(this.street2, street2  );
        await page.type(this.city, city );
        await page.type(this.zipCode, zipCode);
        await page.type(this.state, state );
        await page.click(this.country);
        await page.type(this.countryInput, country );
        await page.click(this.email);
        await page.click(this.continueStoreSetup);
        await page.waitForTimeout(3000);


        await page.type(this.paypal, paypal );
        await page.type(this.bankAccountName, bankAccountName );
        await page.type(this.bankAccountNumber, bankAccountNumber );
        await page.type(this.bankName, bankName );
        await page.type(this.bankAddress, bankAddress );
        await page.type(this.bankRoutingNumber, bankRoutingNumber );
        await page.type(this.bankIban, bankIban );
        await page.type(this.bankSwiftCode, bankSwiftCode );

        await page.type(this.customPayment, customPayment );

        // TODO: stripe connect
        // TODO: paypal marketplace
        await page.click(this.continuePaymentSetup);
        await page.waitForTimeout(3000);
        
        await page.click(this.goToStoreDashboard);
        await page.waitForTimeout(5000);

    },


    async addproduct() {
        await page.click(this.product);
        await page.waitForTimeout(500);
        await page.click(this.addNewProduct);
        await page.type(this.productName, "Batt");
        await page.type(this.ProductPrice, "120");
        await page.click(this.productCategory);
        await base.getMultipleElementTexts(this.categoryValues)
        await base.setDropdownOption(this.categoryValues, 'Clothings')
        // await page.click(this.createProduct)
        await page.waitForTimeout(1000);
        // await page.waitForTimeout(5000);
    },

    // async methodname(){
    //     await page.click('')
    // },
};
