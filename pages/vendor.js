const base = require("../pages/base.js");

module.exports = {
    // locators

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
