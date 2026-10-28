import {test} from "@playwright/test"
import spendr from "../project object model/intoduce.page.js"
import login from "../project object model/login.page.js"
import home from "../project object model/home.page.js"
import testdata from "../testData/testdata1.json"
import transaction from "../project object model/transaction.page.js"



test("3-e2e",async({page})=>{
    let url=testdata.url
    let email=testdata.email
    let password=testdata.password
    let note=testdata.note


    let spendrpage=new spendr(page)
    let loginpage=new login(page)
    let homepage=new home(page)
    let transactionpage=new transaction(page)


    page.goto(url)
    await spendrpage.loginbutton.click()
    await loginpage.logintoapp(email,password)
    await homepage.createbutton.click()
    await homepage.educationbutton.nth(4).click()
   
    await homepage.notetf.fill(note)
    await homepage.amount2.click()
    await homepage.amount0.click()
    await homepage.amount0.click()
    await homepage.amount0.click()
    await homepage.saveamountbutton.click()

    await homepage.transactionbutton.click()
    await transactionpage.recentinfo.first().click()

    await transactionpage.deletebutton.last().dispatchEvent('click');
    await transactionpage.confirmdeletbutton.click()
    
   
})