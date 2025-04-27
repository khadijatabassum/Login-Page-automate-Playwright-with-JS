const{test , expect} = require('@playwright/test')

test('Verify the emelents present on the login page', async({page}) =>{

    //Verify the page title

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    

const pageTitle=page.title();
console.log('Page title is:', pageTitle);
await expect(page).toHaveTitle('OrangeHRM')

// Fetch the current page URL
const currentURL = page.url();
console.log('Current Page URL:', currentURL);

await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//Fetch the image  at header

const imageSrc = await page.getAttribute('img', '/web/images/ohrm_branding.png?v=1721393199309');
  console.log('Image Source URL:', imageSrc);

 // Get the text inside the first <h5> tag
 const headingText = await page.textContent('h5');

 console.log('H5 Heading Text:', headingText);

 //To highlight all the tested elements 
 const elements = await page.$$('a,img, title,h5,  button, input, textarea, select, [tabindex]');
 for (const el of elements) {
   await el.focus();
   await el.evaluate(node => node.style.border = '2px solid red'); // Highlight with red border
   await page.waitForTimeout(1000); // Wait 1 second
 }

 //Verify the login functionality

 await page.fill("input[placeholder='Username']", 'Admin')


 await page.fill("input[placeholder='Password']", 'admin123')
 
 await page.click("button[type='submit']")

//For chcek playwright code at the console
await page.pause()


await page.waitForTimeout(500);

await page.close();

})

