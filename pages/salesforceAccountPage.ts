import { Page, Locator, BrowserContext } from "@playwright/test";
import { SalesforceHomePage } from "./salesforceHomePage";


export class SalesforceAccountPage extends SalesforceHomePage {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }
    public async newButton() {
        await this.validateElementVisibility("div:text-is('New')", "New Button")
        await this.click("div:text-is('New')", "New", "Button")
    }

    public async accountName(value: string) {
        await this.type("//label[text()='Account Name']//following::input[1]", "Account Name", value)
    }

    public async rating(value: string) {
        await this.click("//label[text()='Rating']//following::button[1]", "Rating", "Button")
        await this.click("//span[text()='" + value + "']", value, "Button")
    }

    public async accountNumber(value: string) {
        await this.type("//label[text()='Account Number']//following::input[1]", "Account Number", value)
    }

    public async accountType(value: string) {
        await this.click("//label[text()='Type']//following::button[1]", "Type", "Button")
        await this.click("//span[text()='" + value + "']", value, "Button")
    }

    public async industry(value: string) {
        await this.click("//label[text()='Industry']//following::button[1]", "Industry", "Button")
        await this.click("//span[text()='" + value + "']", value, "Button")
    }

    public async ownerShip(value: string) {
        await this.click("//label[text()='Ownership']//following::button[1]", "Ownership", "Button")
        await this.click("//span[text()='" + value + "']", value, "Button")
    }

    public async billingStreet(value: string) {
        await this.type("//label[text()='Billing Street']//following::textarea[1]", "Billing Street", value)
    }

    public async billingCity(value: string) {
        await this.type("//label[text()='Billing City']//following::input[1]", "Billing City", value)
    }

    public async postalCode(value: string) {
        await this.type("//label[text()='Billing Zip/Postal Code']//following::input[1]", "postalCode", value)
    }

    public async billingState(value: string) {
        await this.type("//label[text()='Billing State/Province']//following::input[1]", "postalCode", value)
    }

    public async billingCountry(value: string) {
        await this.type("//label[text()='Billing Country']//following::input[1]", "postalCode", value)
    }

    public async saveButton() {
        await this.click("//button[text()='Save']", "Save", "Button")
    }

    public async verifiAccountName(value?:string) {
        await this.spinnerDisappear()
        await this.validateElementVisibility("(//lightning-formatted-text[@class='custom-truncate'])[1]", "Account Name")
        const accountName = await this.getInnerText("(//lightning-formatted-text[@class='custom-truncate'])[1]")
        console.log(accountName);
        
    }

    public async closeTAB(){
        await this.click("a[title$='Account'] + * + button","Close TAB","Button")
    }
}