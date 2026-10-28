class transaction{
    constructor(page){
        this.recentinfo=page.locator("ion-item[role='listitem']")
        this.editnote=page.locator('input[id="ion-input-5"]')
        this.titletf=page.getByText("Title / Merchant")
        this.deletebutton=page.locator('ion-button[fill="solid"]')
        this.confirmdeletbutton=page.locator('ion-button[class="sc-giIpqw ihTHPq md button button-solid ion-activatable ion-focusable hydrated"]')
        this.savechangesbutton=page.getByText("Save Changes")
        this.searchbutton=page.locator('ion-button[aria-label="Search transactions"]')
        this.searchtf=page.locator('ion-input[placeholder="Search title, category, or notes"]')
        this.searchresult=page.locator('ion-item[class="item-has-start-slot sc-iIEXPp daJrgp item md item-lines-default in-list ion-activatable ion-focusable hydrated item-label"]')
        this.history26th=page.getByText('Mon 10.2026')
        this.datefield=page.locator('ion-input[label="Date"]')

        
        
    }
}
export default transaction