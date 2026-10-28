class rating{
    constructor(page){
        this.rate5starbutton=page.locator('button[aria-label="Rate 5 stars"]')
        this.submitratingbutton=page.getByText('Submit Rating')
    }
}
export default rating