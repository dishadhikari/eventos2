const express=require("express");
const router=express.Router();
const competition=require("../models/competition");
const {sendMail2,sendMail3}=require("../utils/mail");


router.post("/create",async(req,res)=>
{
    const {organizerid,name,organization,date,time,mode,place,contactperson,
        contactnumber,contactmail,role,deadline,description,numofpart,ptype,teamcap}=req.body;
    const newcomp=new competition({
        organizerid,name,organization,date,time,mode,place,contactperson,contactnumber,
    contactmail,role,deadline,description,numofpart,ptype,teamcap});
    await newcomp.save();
    await sendMail3(contactmail,name);
    res.json({
        success:true,
        message:"Competition created successfully"});
});
router.get("/organizer/:organizerid",async(req,res)=>
{
    const oid=req.params.organizerid;
    const comps=await competition.find({organizerid:oid});
    res.json({
        success:true,
        events:comps
    });
});
router.get("/all",async(req,res)=>
{
    const events=await competition.find();
    res.json({events});
});
router.post("/participate/:eventId",async(req,res)=>
{
    const {pid,email,name}=req.body;
    const event=await competition.findByIdAndUpdate(
        req.params.eventId,
        {$push:{participants:pid}},
        {new:true}
    );
    await sendMail2(email,name);
    res.json({message:"Participation Successful!",event});
});
router.get("/participant/:userid",async(req,res)=>
{
    const events=await competition.find({
        participants:req.params.userid
    });
    res.json({
        success:true,events
    });
});
module.exports=router;