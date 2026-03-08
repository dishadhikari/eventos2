const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const authRoutes=require("./routes/auth")
const compRoutes=require("./routes/comp")

const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/comp",compRoutes);

mongoose.connect(
    "mongodb+srv://dishadhikari:standard20@cluster0.nwgaeow.mongodb.net/test?retryWrites=true&w=majority&authSource=admin")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

app.get("/",(req,res)=>{
    res.json("Server is running ");
});

const PORT = process.env.PORT || 5000;
app.listen(5000,()=>    
{
    console.log(`Sever is running on the port ${PORT}`);
});