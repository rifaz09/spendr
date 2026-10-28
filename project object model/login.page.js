class login{
    constructor(page){
        this.emailtf=page.locator("#ion-input-0")
        this.passwordtf=page.locator("#ion-input-1")
        this.loginbutton=page.locator(".button-inner").first()
    }

    async logintoapp(email,password){
        await this.emailtf.fill(email)
        await this.passwordtf.fill(password)
        await this.loginbutton.click()

    }
}
export default login