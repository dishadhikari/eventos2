import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import "./style/Admin.css";

function Admin()
{ 
    const storedUser = localStorage.getItem("loggedInUser");
    const user = storedUser ? JSON.parse(storedUser) : null;
    return(
        <div className="admin-container">
      
      <div className="admin-header">
        <div>
          <h1 className="admin-greeting">Welcome {user.userid}!</h1>
          
        </div>
        <div className="admin-date-badge">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      
      <div className="admin-actions-grid">
        <Link to="/createevent" className="admin-action-link">
          <div className="admin-action-card">
            <div className="admin-action-icon"></div>
            <h2 className="admin-action-title">Create New Event</h2>
            <p className="admin-action-desc">
              Set up a new event, add details, and publish it for participants.
            </p>
            <button className="admin-action-button">Get Started →</button>
          </div>
        </Link>

        <Link to="/manageevent" className="admin-action-link">
          <div className="admin-action-card">
            <div className="admin-action-icon"></div>
            <h2 className="admin-action-title">Manage Your Events</h2>
            <p className="admin-action-desc">
              Edit existing events, track registrations, and view analytics.
            </p>
            <button className="admin-action-button">Go to Dashboard →</button>
          </div>
        </Link>
      </div>
    </div>

    );
}
export default Admin;