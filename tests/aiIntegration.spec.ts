import { test } from "../customFixtures/salesforceFixture"

test(`Integration With ZeroStepAI`, async ({ page,ai }) => {

    await page.goto('https://www.saucedemo.com/')
    const [username, password] = await ai([
        'Get the first accepted username',
        'Get the accepted password',
    ])
    await ai([
        `Enter ${username} as the username`,
        `Enter ${password} as the password`
    ])
    await ai('Click Login')
    await ai('Click the menu button')
    await ai('Click the logout link')



})