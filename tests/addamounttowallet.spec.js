import {test,expect} from "../fixtures/customfixture.js"
import testdata from "../testData/testdata1.json"
import spendr from "../project object model/intoduce.page.js"
import login from "../project object model/login.page.js"
import home from"../project object model/home.page.js"
import transactin from "../project object model/transaction.page.js"
import { defineConfig } from '@playwright/test';
test("addamounttowallet @smoke",async({login,POM,page})=>{

    // let url=testdata.url
    // let email=testdata.email
    // let password=testdata.password
    let note=testdata.note

       const homepage= POM[1]
    // let spendrpage=new spendr(page)
    // let loginpage=new login(page)
    // let homepage=new home(page)
    // let transactinpage=new transactin(page)


    // page.goto(url)
    // await spendrpage.loginbutton.click()
    // await loginpage.logintoapp(email,password)
       await homepage.createbutton.click()
    
    await page.locator("button[aria-pressed='true']").click()
   
    
    await homepage.incomebutton.click()
    await homepage.notetf.fill(note)
    await homepage.amount2.click()
    await homepage.amount0.click()
    await homepage.amount0.click()
    await homepage.amount0.click()
    await homepage.saveamountbutton.click()
   let amount= await homepage.updatedamount.innerText()
   expect(amount).toBe(amount)
})