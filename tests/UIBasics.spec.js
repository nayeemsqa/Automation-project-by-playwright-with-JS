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
    
    //race condition

    await Promise.all(
        [
            page.waitForNavigation(),
            signIn.click()
        ]
    )

    //after successfully login it will come into this page
    // console.log(await cardTitles.first().textContent())
    // console.log(await cardTitles.nth(1).textContent())

    // For Non services based or not API based we have to explicitly say that wait for the navigation after signin button but the thing is here we have to use race condition where we have to use promiseAll
    //to extract all elements
    const allCardTitles = await cardTitles.allTextContents()
    console.log(allCardTitles);

})

test("dropdown and radio button selection", async ({page})=>{
    const userName = page.locator("#username");
    const password = page.locator("[type='password']");
    const radioButton = page.locator(".radiotextsty");
    const dropDown = page.locator("select.form-control")
    const singIn = page.locator("#signInBtn")
    const popupOkayButton = page.locator("#okayBtn")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    await userName.type("rahulshettyacademy");
    await password.type("learning");
    await radioButton.last().click()
    await popupOkayButton.click();
    await page.pause()
    await dropDown.selectOption("Student");
})

// test.only("Daals site popup remove", async ({page})=>{
//     await page.goto("https://www.daals.co.uk/");
//     console.log(await page.title());
//     const homepageCollTitle = page.locator(".item1 h2");
//     // await page.waitForLoadState('networkidle');
//     console.log(await homepageCollTitle.allTextContents());
//     await page.click('a[href="/collections/sofas"]');
//     await page.waitForLoadState('networkidle');

// })

