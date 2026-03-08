import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./style/Existing.css";

function Existing2()
{
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        userid:"",
        password:""
    });
    const handleChange=(e)=>
    {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit=async (e)=>
    {
        e.preventDefault();
        const response=await axios.post(
        "https://mern-backend-5ek0.onrender.com/api/auth/login2",formData
    );
        alert(response.data.message);
        if(response.data.success)
        {
            const userObj=response.data.user;
            if (!userObj) 
            {
                console.error("User object is undefined!");
                return; 
            }
            
            localStorage.setItem("loggedInUser2", JSON.stringify(userObj));
            navigate("/participant");
        }
    };
    
    return(
        <div>
            <div className="login-page">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Log in to your Eventos account</p>

            <form onSubmit={handleSubmit} className="login-form">
                <label className="login-label">
                User ID
                <input
                    type="text"
                    name="userid"
                    value={formData.userid}
                    onChange={handleChange}
                    placeholder="Enter your user ID"
                    required
                />
                </label>

                <label className="login-label">
                Password
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                />
                </label>

                <button type="submit" className="login-button">Sign In</button>
            </form>

            <p className="login-signup">
                Don't have an account? <a href="/createnew2">Sign up</a>
            </p>
            </div>

        </div>
    );
}
export default Existing2;