// const {test,expect} = require('@playwright/test')

// test("My first test case", async ({page})=>{

//     const userName = page.locator('#username')
//     const password = page.locator("[type='password']")
//     const signIn = page.locator("#signInBtn")
//     const cardTitles = page.locator(".card-body a")

//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

//     await userName.type("rahulshetty")
//     await password.type("learning")
//     await signIn.click();

//     //assertions - title matching or not
//     const title = await page.title()
//     console.log("Title will be", title)
//     //to match whether the title is coming or not
//     await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")


//     //to show the incorrect message
//     console.log(await page.locator("[style*='block']").textContent());
//     await expect(page.locator("[style*='block']")).toContainText('Incorrect');

//     //type - fill(to clear the input field)
//     await userName.fill("")
//     await userName.fill("rahulshettyacademy")
//     await signIn.click()

//     //after successfully login it will come into this page
//     console.log(await cardTitles.first().textContent())
//     console.log(await cardTitles.nth(1).textContent())

//     //to extract all elements
//     const allCardTitles = await cardTitles.allTextContents()
//     console.log(allCardTitles);
// })



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


    //Extracting textContent after the successful page
    console.log(await cardTitles.nth(0).textContent());
    const allCardTitles = await cardTitles.allTextContents()
    console.log(allCardTitles)


    
})