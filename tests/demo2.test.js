describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://google.com');
    });
  
    it('should be titled "Google"', async () => {
      await expect(page.title()).resolves.toMatch('Google');
    });
  });
  



// //   Some examples:

// // Find a text in the page
// // Assert that current page contains 'Text in the page'
// // await expect(page).toMatch('Text in the page')
// // Click a button
// // Assert that a button containing text "Home" will be clicked
// // await expect(page).toClick('button', { text: 'Home' })
// // Fill a form
// // Assert that a form will be filled
// // await expect(page).toFillForm('form[name="myForm"]', {
// //   firstName: 'James',
// //   lastName: 'Bond',
// // })
