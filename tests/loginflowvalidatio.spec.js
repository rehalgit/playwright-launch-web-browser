const {test,expect}=require('@playwright/test');


test.only ('login and login validation', async({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
await page.locator('#username').fill("rahulshettyacademy")
await page.locator('#password').fill("learning")
await page.locator('#signInBtn').click();
await page.waitForTimeout(5000)
const homePageElement = page.locator(".card-body a").nth(2);
await expect(homePageElement).toBeVisible();
console.log(await homePageElement.textContent());
await expect(homePageElement).toHaveText('Samsung Note 8');
});
