//Next below line of codes for assignment

const {test, expect} = require('@playwright/test')

test("signup and login", async ({page})=>{

    // const firstName = page.locator("#firstName")
    // const lastName = page.locator("#lastName")
    // const userEmail = page.locator("#userEmail")
    // const userMobile = page.locator("#userMobile")
    // const occupation = page.locator('select[formcontrolname="occupation"]').selectOption({ value: '1: Doctor' });
    // const gender = page.locator('input[formcontrolname="gender"][value="Male"]').check()
    // const password = page.locator("#userPassword")
    // const confirmPassword = page.locator("#confirmPassword")
    // const logIn = page.locator("#login")

    // await page.goto("https://rahulshettyacademy.com/client/auth/register")


    const emailLogin = page.locator("#userEmail")
    const passwordLogin = page.locator("#userPassword")
    const loginLogin = page.locator("#login")
    const cardTitles = page.locator(".card-body h5")

    await page.goto("https://rahulshettyacademy.com/client")

    await emailLogin.type("nayeem@automation.com")
    await passwordLogin.type("N@yeem1_34567")
    await loginLogin.click()

    //Extracting the tile of the page
    
    console.log(await page.title())
    await expect(page).toHaveTitle("Let's Shop");

    // To show the error message
    // console.log(await page.locator(".invalid-feedback").textContent())


    //Extracting textContent after the successful page
    // console.log(await cardTitles.nth(0).textContent());


    //waitForLoadState('networkidle') - This is for service based or API based application where you can easily this task after network stable
    await page.waitForLoadState('networkidle')
    const allCardTitles = await cardTitles.allTextContents()
    console.log(allCardTitles)


    
})