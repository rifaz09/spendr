import {test,expect} from "@playwright/test"
import testdata from "../testData/testdata1.json"
import spendr from "../project object model/intoduce.page.js"
import login from "../project object model/login.page.js"
import home from"../project object model/home.page.js"

import { waitForDebugger } from "node:inspector"
import { log } from "node:console"
test("change currency",async({page})=>{

    let url=testdata.url
    let email=testdata.email
    let password=testdata.password
   


    let spendrpage=new spendr(page)
    let loginpage=new login(page)
    let homepage=new home(page)
    


    page.goto(url)
    await spendrpage.loginbutton.click()
    await loginpage.logintoapp(email,password)

    await homepage.optionbutton.click()
    await homepage.changecurrency.click()
    
    await homepage.selectcountrycurrency.click()

})