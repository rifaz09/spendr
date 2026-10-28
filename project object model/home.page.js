class home{
    constructor(page){
        this.createbutton=page.locator("//button[@class='sc-eGCcFJ frOa-DF']")
        this.salarybutton=page.getByRole('button', { name: 'Salary' })
        this.recuuringbutton=page.getByRole('button', {name:'Recurring'})
        this.notetf=page.getByRole('textbox', { name: 'Transaction notes' })
        this.amount2=page.getByRole("button",{name:"2",exact:true})
        this.amount0=page.getByRole("button",{name:"0",exact:true})
        this.amount1=page.getByRole("button",{name:"1",exact:true})
        this.dotbutton=page.getByRole("button",{name:".",exact:true})
        this.saveamountbutton=page.locator("ion-button[data-tour='expense-save-button']")
        this.transactionbutton=page.locator("#tab-button-transactions")
        this.updatedamount=page.locator("//div[@class='sc-bjPnSC hmKYzg']")
        this.incomebutton=page.locator("ion-segment-button[value='income']")
        this.educationbutton=page.locator('button[aria-pressed="false"]')
        this.datefield=page.locator('ion-button[id="transaction-recurring-range-picker"]')
        this.starmonth=page.locator('ion-picker-column-option[part="wheel-item active"]').first()
        this.startdate=page.locator('ion-picker-column-option[part="wheel-item active"]').nth(2)
        this.startyear=page.locator('ion-picker-column-option[part="wheel-item active"]').nth(3)
        this.activeEnddate=page.locator('div[class="toggle-inner"]')
        this.donebutton=page.getByText("Done")
        this.markpaidbutton=page.locator('ion-button[class="sc-fasjvI fMjAPe md button button-small button-solid ion-activatable ion-focusable hydrated"]').first()
        this.confirmfullpayment=page.getByText('Confirm Full Payment')
        this.datefield1=page.locator('#transaction-date-picker')
        this.salectdate=page.locator('button[aria-label="Monday, October 26"]')

        this.optionbutton=page.locator('button[aria-label="Account options for jkj"]')
        this.changecurrency=page.getByText('Change Currency')
        this.selectcountrycurrency=page.getByText('United Arab Emirates Dirham')

        this.ratingbutton=page.locator('button[aria-label="Rate this app"]')


        
    }
}
export default home