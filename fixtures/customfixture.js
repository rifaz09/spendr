import {test as base,expect} from "@playwright/test"
import login from "../project object model/login.page.js"
import spendr from "../project object model/intoduce.page.js"
import home from "../project object model/home.page.js"
import rating from "../project object model/rating.page.js"
import transaction from "../project object model/transaction.page.js"

import data from "../testData/testdata1.json"
export let test=base.extend({
    login: async ({page},use)=>{
        let loginpage=new login(page)
        let spendrpage=new spendr(page)
        await page.goto(data.url)
        await spendrpage.loginbutton.click()
        await loginpage.logintoapp(data.email,data.password)
        await use();
    },
    POM : async({page},use)=>{
        let loginpage=new login(page)
        let homepage=new home(page)
        let spendrpage=new spendr(page)
        let ratingpage=new rating(page)
        let transactinpage=new transaction(page)
       const POM=[loginpage,homepage,spendrpage,ratingpage,transactinpage]
        await use(POM)
       
    } 

})
export {expect}

