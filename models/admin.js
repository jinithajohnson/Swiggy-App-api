const mongoose=require("mongoose")
const loginSchema=mongoose.Schema(
    {
        name:String,
        username:String,
        password:String
    }
)

const loginModel=mongoose.model("admin",loginSchema)
module.exports=loginModel