import { test as baseTest, Page, chromium } from '@playwright/test'

import { credentialConstants } from "../constants/CredentialConstants";
import { SalesforceLogin } from '../pages/salesforceLogin'
import { SalesforceHomePage } from '../pages/salesforceHomePage'
import { SalesforceLeadPage } from '../pages/salesforceLeadPage'
import { SalesforceAccountPage } from '../pages/salesforceAccountPage';
import { aiFixture, type AiFixture } from '@zerostep/playwright'


type salesforceFixture = {
    SalesforceLogin: SalesforceLogin
    SalesforceHomePage: SalesforceHomePage
    SalesforceLeadPage: SalesforceLeadPage
    SalesforceAccountPage: SalesforceAccountPage
}


export const test = baseTest.extend<salesforceFixture & AiFixture>({
    SalesforceLogin: async ({ page, context }, use) => {
        const sfLogin = new SalesforceLogin(page, context);
        await sfLogin.salesforceLogin(credentialConstants.USERNAME, credentialConstants.PASSWORD)
        console.log("Login is verified")
        await use(sfLogin);
    },
    SalesforceHomePage: async ({ page, context }, use) => {
        const sfHome = new SalesforceHomePage(page, context)
        await use(sfHome)
    },
    SalesforceLeadPage: async ({ page, context }, use) => {
        const sfLead = new SalesforceLeadPage(page, context)
        await use(sfLead)
    },
    SalesforceAccountPage: async ({ page, context }, use) => {
        const sfAccount = new SalesforceAccountPage(page, context)
        await use(sfAccount)
    },
    ...aiFixture(baseTest)
})
