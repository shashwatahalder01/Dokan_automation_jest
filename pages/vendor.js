

module.exports = {

    // locators
    dashboard: 'li[class="active dashboard"] a', 
    product: 'li[class="products"] a', 
    orders: 'li[class="orders"] a', 
    userSubscription: 'a[href="http://dokan2.test/dashboard/user-subscription/"]', 
    coupons: 'a[href="http://dokan2.test/dashboard/coupons/"]', 
    reports: 'a[href="http://dokan2.test/dashboard/reports/"]', 
    deliveryTime: '', 
    reviews: '', 
    withdraw: '', 
    returnRequest: '', 
    staff: '', 
    followers: '', 
    analytics: '', 
    announcements: '', 
    tools: '', 
    auction: '', 
    support: '', 
    settings: '', 
    visitStore: '', 
    editAccount: '', 

    
  
    //methods

    async addproduct(){
        await page.click(this.product)
    },

     // async methodname(){
    //     await page.click('')
    // },
    
    
    }