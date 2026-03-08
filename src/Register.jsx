import React from "react";
import {Link} from "react-router-dom";
import "./style/Register.css";

function Register()
{
    return(
        <div className="register-wrapper">
      <div className="register-box">
        <h1 className="register-title">Welcome to Eventos</h1>
        <p className="register-subtitle">Choose your role to get started</p>
        <div className="role-selector">
          <Link to="/fill" className="role-link">
            <div className="role-option admin-option">
              <div className="role-icon">
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.2" fill="none">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  <circle cx="18" cy="8" r="2" />
                  <path d="M22 12v2c0 2.66-5.33 4-8 4" />
                </svg>
              </div>
              <span className="role-name">Admin</span>
              <span className="role-badge">Organizer</span>
            </div>
          </Link>
          <Link to="/fill2" className="role-link">
            <div className="role-option participant-option">
              <div className="role-icon">
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.2" fill="none">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  <circle cx="18" cy="8" r="2" />
                  <circle cx="6" cy="8" r="2" />
                </svg>
              </div>
              <span className="role-name">Participant</span>
              <span className="role-badge">Attendee</span>
            </div>
          </Link>
        </div>
      </div>
    </div>

    );
}
export default Register;