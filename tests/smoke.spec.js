import {expect, test} from "@playwright/test"
import login from "../project object model/login.page.js"
import { TIMEOUT } from "node:dns"
import spendr from "../project object model/intoduce.page.js"
import testdata from "../testData/testdata1.json"
test("register to the application", async({page})=>{
    

let url=testdata.url
let email=testdata.email
let password=testdata.password
   
let spendrpage=new spendr(page)
let loginpage=new login(page)
console.log(url);

await page.goto(url)


await spendrpage.loginbutton.click()
await loginpage.logintoapp(email,password) 
let title=await page.title()  
console.log(title);
if(title=="spendr | Smart Budget Tracker"){
   console.log("home page is verified");
   
}else{
    console.log("home page failed");
    
}

})