import { test } from "../customFixtures/salesforceFixture"
import { FakerData } from "../utils/fakerUtils"
import { readDataFromCSV } from '../utils/csvUtil';
const csvFilePath = './data/accounts.csv';


test.use({ storageState: "logins/salesforce.json" });

test('Creating an Account Using CSV Data', async ({ SalesforceHomePage, SalesforceAccountPage }) => {
    const data = await readDataFromCSV(csvFilePath);
    test.info().annotations.push(
        { type: 'Author', description: 'Ajay Michael' },
        { type: 'TestCase', description: 'Creating an Account Using CSV Data' },
        { type:'Test Description', description:"Creating Valid account for budget calculation"}
    );
    for (const row of data) {
        const { Rating, Type, Industry, Ownership, BillingStreet, BillingCity, PostalCode, BillingState, BillingCountry } = row;

        await SalesforceHomePage.appLauncher();
        await SalesforceHomePage.viewAll();
        await SalesforceHomePage.searchApp("Accounts");
        await SalesforceHomePage.app("Accounts");
        await SalesforceAccountPage.newButton();
        await SalesforceAccountPage.accountName(FakerData.title());
        await SalesforceAccountPage.accountNumber(FakerData.getUserNumber());
        await SalesforceAccountPage.rating(Rating);
        await SalesforceAccountPage.accountType(Type);
        await SalesforceAccountPage.industry(Industry);
        await SalesforceAccountPage.ownerShip(Ownership);
        await SalesforceAccountPage.billingStreet(BillingStreet);
        await SalesforceAccountPage.billingCity(BillingCity);
        await SalesforceAccountPage.postalCode(PostalCode);
        await SalesforceAccountPage.billingState(BillingState);
        await SalesforceAccountPage.billingCountry(BillingCountry);
        await SalesforceAccountPage.saveButton()
        await SalesforceAccountPage.verifiAccountName()
        await SalesforceAccountPage.closeTAB()
    }
});
