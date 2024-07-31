const express=require("express")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const cors=require("cors")
const jwt=require("jsonwebtoken")
const loginModel = require("./models/admin")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://jinithajohnson:jingov02@cluster0.wo3ieyl.mongodb.net/SwiggyApp?retryWrites=true&w=majority&appName=Cluster0")

app.get("/test",(req,res)=>{
    res.json({"status":"success"})
})

app.post("/adminSignUp",(req,res)=>{
    let input=req.body
    let hashedpassword=bcrypt.hashSync(input.password,10)
    //console.log(hashedpassword)
    input.password=hashedpassword
    console.log(input)
    let result=new loginModel(input)
    result.save()
    res.json({"status":"success"})
})


app.listen(8000,()=>{
    console.log("server started")
})