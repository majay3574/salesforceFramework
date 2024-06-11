import {getLead} from "../api_Integration/getLead"
import { test } from "../customFixtures/salesforceFixture";

// async function getLeadName(): Promise<any> {
//     return await getLead();   
// }
   
test.use({ storageState: "logins/salesforce.json" });

test(`Deleting the LeadID created from an API request`, async ({ SalesforceHomePage, SalesforceLeadPage }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'Ajay Michael' },
        { type: 'TestCase', description: 'Deleting the LeadID created from an API request' }
    );
    

   
    const userName = await getLead();
    await SalesforceHomePage.appLauncher();
    await SalesforceHomePage.viewAll();
    await SalesforceHomePage.searchApp("Leads");
    await SalesforceHomePage.app("Leads");
    await SalesforceLeadPage.searchLead(userName);
    await SalesforceLeadPage.leadID(userName);
    await SalesforceLeadPage.expandButton();
    await SalesforceLeadPage.deleteLead();
    await SalesforceLeadPage.deletePopUP();
    await SalesforceLeadPage.searchLead(userName);
    await SalesforceLeadPage.verifiTheDeletedData();
});
