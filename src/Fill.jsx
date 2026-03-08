import React from "react";
import {Link} from "react-router-dom";

function Fill()
{
    return(
        <div className="fill-wrapper">
      <div className="fill-card">
        <h1 className="fill-title">Get Started with Eventos</h1>
        <p className="fill-subtitle">Choose an option to continue</p>
        <div className="fill-options">
          <Link to="/createnew" className="fill-link create-link">
            <div className="fill-option create-option">
              <h2>Create New Account</h2>
              <p>Join as a new organizer or participant</p>
              <span className="option-badge">New</span>
            </div>
          </Link>
          <Link to="/existing" className="fill-link login-link">
            <div className="fill-option login-option">
              <h2>Login with Existing Account</h2>
              <p>Access your dashboard or events</p>
              <span className="option-badge">Returning</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
    );
}
export default Fill;