import {test,expect} from "@playwright/test"
import testdata from "../testData/testdata1.json"
import spendr from "../project object model/intoduce.page.js"
import login from "../project object model/login.page.js"
import home from"../project object model/home.page.js"
import transactin from "../project object model/transaction.page.js"
//import 'dotenv/config';
import dotenv, { config } from "dotenv"
dotenv.config();
test("2-e2e",{tag:["@smoke","@regression"]},async({page})=>{
    // let url=testdata.url
    // let email=testdata.email
    // let password=testdata.password
    let url=process.env.BASE_URL
    let email=process.env.BASE_EMAIL
    let password=process.env.BASE_PASSWORD
    let note=testdata.note


    let spendrpage=new spendr(page)
    let loginpage=new login(page)
    let homepage=new home(page)
    let transactinpage=new transactin(page)

     console.log(url);
    

    page.goto(url)
    
    await spendrpage.loginbutton.click()
    await loginpage.logintoapp(email,password)
    await homepage.createbutton.click()
    
    await page.locator("button[aria-pressed='true']").click()
   
    
    await homepage.notetf.fill(note)
    await homepage.amount2.click()
    await homepage.amount0.click()
    await homepage.amount0.click()
    await homepage.amount0.click()
    await homepage.saveamountbutton.click()
   let amount= await homepage.updatedamount.innerText()
    expect(amount).toBe(amount)

 })