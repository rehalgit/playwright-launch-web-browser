const {test,expect} = require ('@playwright/test');
test ('locator xpath css', async ({page})=>
{
await page.goto ("https://login.salesforce.com/")
await page.locator("xpath=//*[@id='username']").fill("fs@example.com")
await page.locator("css=#password").fill("Faiz@1234")
await page.waitForTimeout(5000)





});

