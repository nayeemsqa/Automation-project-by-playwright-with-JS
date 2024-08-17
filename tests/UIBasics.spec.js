const {test,expect} = require('@playwright/test')

test("My first test case", async ({page})=>{

    const userName = page.locator('#username')
    const password = page.locator("[type='password']")
    const signIn = page.locator("#signInBtn")
    const cardTitles = page.locator(".card-body a")

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    await userName.type("rahulshetty")
    await password.type("learning")
    await signIn.click();

    //assertions - title matching or not
    const title = await page.title()
    console.log("Title will be", title)
    //to match whether the title is coming or not
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")


    //to show the incorrect message
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    //type - fill(to clear the input field)
    await userName.fill("")
    await userName.fill("rahulshettyacademy")
    await signIn.click()

    //after successfully login it will come into this page
    console.log(await cardTitles.first().textContent())
    console.log(await cardTitles.nth(1).textContent())

    //to extract all elements
    const allCardTitles = await cardTitles.allTextContents()
    console.log(allCardTitles);
})