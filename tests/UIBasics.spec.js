const {test,expect} = require('@playwright/test')

test("My first test case", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const title = await page.title()
    console.log("Title will be", title)
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
})