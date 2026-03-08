import React,{useEffect,useState} from "react";
import axios from "axios";
import "./style/ManageEvents.css";

function ManageEvents()
{ 
    const [events,setEvents]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>
    {
        const storedUser=localStorage.getItem("loggedInUser");
        if(!storedUser)
        {
            setLoading(false);
            return;
        }
        const user=JSON.parse(storedUser);
        const fetchEvents=async ()=>
        {
            const response=await axios.get(`https://mern-backend-5ek0.onrender.com/api/comp/organizer/${user.userid}`);
            setEvents(response.data.events);
            setLoading(false);
        }
        fetchEvents();
    },[]);
    if (loading) return <div>Loading your events...</div>;
    return(
        <div className="manage-container">
      <h1 className="manage-title">Your Competitions</h1>
      {events.length === 0 ? (
        <p className="no-events">No events yet. Create your first competition!</p>
      ) : (
        <div className="events-timeline">
          {events.map((event, index) => (
            <div key={event.id} className="event-item">
              <div className="event-marker">
                <span className="event-index">{(index + 1).toString().padStart(2, '0')}</span>
              </div>
              <div className="event-content">
                <h2 className="event-name">{event.name}</h2>
                <div className="event-details">
                  <div className="detail-group">
                    <span className="detail-label">Organization</span>
                    <span className="detail-value">{event.organization}</span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Date</span>
                    <span className="detail-value">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Time</span>
                    <span className="detail-value">{event.time}</span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Mode</span>
                    <span className="detail-value mode-badge" data-mode={event.mode}>
                      {event.mode === 'online' ? '🌐 Online' : '📍 Offline'}
                    </span>
                  </div>
                  <div className="detail-group full-width">
                    <span className="detail-label">Description</span>
                    <span className="detail-value">{event.description}</span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Team/Individual</span>
                    <span className="detail-value">
                      {event.ptype === 'team' ? `Team (max ${event.numofpart} per team)` : 'Individual'}
                    </span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Max Registrations</span>
                    <span className="detail-value">{event.teamcap}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

    );
}
export default ManageEvents;