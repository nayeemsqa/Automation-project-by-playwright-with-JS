const {test,expect} = require('@playwright/test')

test("My first test case", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const title = await page.title()
    console.log("Title will be", title)
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")


    await page.locator('#username').type("rahulshetty")
    await page.locator("[type='password']").type("learning")
    await page.locator("#signInBtn").click();

    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
})