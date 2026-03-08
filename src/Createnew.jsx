import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./style/Createnew.css";

function Createnew()
{
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        name:"",
        organization:"",
        dob:"",
        profession:"",
        phone:"",
        emailid:"",
        userid:"",
        password:"",
        
    });
    const handleChange=(e)=>
    {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        const response=await axios.post(
            "https://mern-backend-5ek0.onrender.com/api/auth/signup",formData
        );
        alert(response.data.message);
        if(response.data.success)
        {
            navigate("/existing");
        }
    };
    return(
        <div className="signup-page">
      <div className="signup-header">
        <h1>Create New Account</h1>
      </div>

      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="form-group">
            <label>Organization</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Company or Institution"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Profession</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              placeholder="e.g. Developer, Manager"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 234 567 890"
              required
            />
          </div>
          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              name="emailid"
              value={formData.emailid}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>User ID</label>
            <input
              type="text"
              name="userid"
              value={formData.userid}
              onChange={handleChange}
              placeholder="Choose a username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>

      <p className="signup-login-link">
        Already have an account? <a href="/existing">Log in</a>
      </p>
    </div>
    );
}
export default Createnew;