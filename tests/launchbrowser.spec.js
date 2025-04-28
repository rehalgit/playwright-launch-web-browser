const {test,expect} = require('@playwright/test');

test('dropdown', async ({page})=>
{
    const dropdownvalue='consult'
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   const userName = page.locator ("#username");
   const signIn = page.locator ("#signInBtn");
   const dropdown =page.locator ("select[class='form-control']");
   await dropdown.selectOption("consult");
   console.log(await dropdown.textContent())
   await page.waitForTimeout(3000)
   await expect(dropdown).toHaveValue(dropdownvalue);
});
