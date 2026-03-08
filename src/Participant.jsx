import React from "react";
import {Link} from "react-router-dom";
import "./style/Admin.css";

function Participant()
{ 
    const storedUser = localStorage.getItem("loggedInUser2");
    const user=storedUser ? JSON.parse(storedUser) : null;
    return(
        <div className="admin-container">

      <div className="admin-header">
        <div>
          <h1 className="admin-greeting">Welcome, {user.userid}!</h1>
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
        <Link to="/exploreevents" className="admin-action-link">
          <div className="admin-action-card">
            <h2 className="admin-action-title">Explore Events</h2>
            <p className="admin-action-desc">
              Discover and register for upcoming competitions and events.
            </p>
            <button className="admin-action-button">Browse Events →</button>
          </div>
        </Link>

        <Link to="/myevents" className="admin-action-link">
          <div className="admin-action-card">
            <h2 className="admin-action-title">My Events</h2>
            <p className="admin-action-desc">
              View and manage your registered events and track participation.
            </p>
            <button className="admin-action-button">Go to My Events →</button>
          </div>
        </Link>
      </div>
    </div>

    );
}
export default Participant;