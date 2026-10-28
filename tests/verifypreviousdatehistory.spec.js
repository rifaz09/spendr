import {test,expect} from "@playwright/test"
import testdata from "../testData/testdata1.json"
import spendr from "../project object model/intoduce.page.js"
import login from "../project object model/login.page.js"
import home from"../project object model/home.page.js"
import transaction from "../project object model/transaction.page.js"

import { waitForDebugger } from "node:inspector"
import { log } from "node:console"

test("e2e--9",async({page})=>{

    let url=testdata.url
    let email=testdata.email
    let password=testdata.password
    let note=testdata.note


    let spendrpage=new spendr(page)
    let loginpage=new login(page)
    let homepage=new home(page)
    let transactinpage=new transaction(page)
    


    page.goto(url)
    await spendrpage.loginbutton.click()
    await loginpage.logintoapp(email,password)
    await homepage.createbutton.click()
    
   
    await homepage.incomebutton.click()
    await homepage.datefield1.click()
    await homepage.salectdate.click()
   
    await homepage.donebutton.click()
   await homepage.notetf.fill('restaurent')
   await homepage.amount1.click()
    await homepage.amount0.click()
    await homepage.amount0.click()
    await homepage.amount0.click()
    
    await homepage.saveamountbutton.click()

    
    
    

  
})