const mongoose=require("mongoose");
const userdetails=new mongoose.Schema(
{
        name:String,
        organization:String,
        dob:Date,
        profession:String,
        emailid:String,
        userid:String,
        password:String,
        phone:Number,
        role:
        {
            type:String,
            default:"admin"
        }
});
const participant=new mongoose.Schema(
{
    name:String,
    organization:String,
    dob:Date,
    profession:String,
    emailid:String,
    userid:String,
    password:String,
    phone:Number,
    role:
    {
        type:String,
        default:"participant"
    }
});
module.exports=
{
    user:mongoose.model("user",userdetails),
    participant:mongoose.model("participant",participant)
}
