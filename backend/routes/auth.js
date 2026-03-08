const express=require("express");
const bcrypt=require("bcrypt");
const {user,participant}=require("../models/user");
const {sendMail}=require("../utils/mail");

const router=express.Router();

router.post("/signup",async(req,res)=>
{
    const{name,organization,dob,profession,emailid,userid,password,phone}=req.body;
    const existinguser=await user.findOne({userid});
    if(existinguser)
    {
        return res.json({
            success:false,
            message:"User ID already created"
        })
    }
    const hashedpassword=await bcrypt.hash(password,10);
    const newuser=new user(
    {
        name,organization,dob,profession,emailid,userid,
        password:hashedpassword,phone
    });
    await newuser.save();
    await sendMail(emailid,name);
    res.json({
            success:true,
            message:"User created successfully"});
});
router.post("/signup2",async(req,res)=>
{
    const{name,organization,dob,profession,emailid,userid,password,phone}=req.body;
    const existing=await participant.findOne({userid});
    if(existing)
    {
        return res.json({
                success:false,
                message:"User ID already created"
        })
    }
    const hashedpassword=await bcrypt.hash(password,10);
    const newuser=new participant(
    {
        name,organization,dob,profession,emailid,userid,
        password:hashedpassword,phone
    });
    await newuser.save();
    await sendMail(emailid,name);
    res.json({
        success:true,
        message:"User created successfully"
    });
});
router.post("/login",async(req,res)=>
{
    const{userid,password}=req.body;
    const existinguser=await user.findOne({userid});
    if(!existinguser)
    {
        return res.json({
            success:false,
            message:"User not found"
        });
    }
    const isMatch= await bcrypt.compare(
        password,existinguser.password
    );
    if(!isMatch)
    {
        return res.json({
            success:false,
            message:"Incorrect Pasword"
        });
    }
    res.json({
        success:true,
        message:"Login Sucessful!",
        user: 
        {
            userid:existinguser.userid,
            name:existinguser.name,
            emailid:existinguser.emailid,
            phone:existinguser.phone
        }
    });
});
router.post("/login2",async(req,res)=>
    {
        const{userid,password}=req.body;
        const ep=await participant.findOne({userid});
        if(!ep)
        {
            return res.json({
                success:false,
                message:"User not found"
            });
        }
        const isMatch= await bcrypt.compare(
            password,ep.password
        );
        if(!isMatch)
        {
            return res.json({
                success:false,
                message:"Incorrect Pasword"
            });
        }
        res.json({
            success:true,
            message:"Login Sucessful!",
            user: 
            {
                userid:ep.userid,
                name:ep.name,
                emailid:ep.emailid,
                phone:ep.phone
            }
        });
    });
module.exports=router;