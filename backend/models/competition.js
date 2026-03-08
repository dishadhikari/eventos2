const mongoose=require("mongoose");

const competition=new mongoose.Schema(
{
    organizerid:String,
    name:String,
    organization:String,
    date:Date,
    time:String,
    mode:String,
    place:String,
    contactperson:String,
    contactnumber:Number,
    contactmail:String,
    role:
    {
        type:String,
        default:"admin"
    },
    deadline:Date,
    description:String,
    numofpart:
    {
        type:Number,
        default:1
    },
    ptype:String,
    teamcap:Number,
    participants:[String]
});

module.exports=mongoose.model("competition",competition);