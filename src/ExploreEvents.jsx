import React,{useEffect,useState} from "react";
import axios from "axios";
import "./style/ExploreEvents.css";


function ExploreEvents()
{ 
    const [events,setEvents]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>
    {
        const storedUser=localStorage.getItem("loggedInUser2");
        if(!storedUser)
        {
            setLoading(false);
            return;
        }
        const user=JSON.parse(storedUser);
        const fetchEvents=async ()=>
        {
            const response=await axios.get(`https://mern-backend-5ek0.onrender.com/api/comp/all`);
            setEvents(response.data.events);
            setLoading(false);
        }
        fetchEvents();
    },[]);
    if (loading) return <div>Loading your events...</div>;
    const handleParticipants=async(eventId)=>
    {
        const storeduser=localStorage.getItem("loggedInUser2");
        const user=JSON.parse(storeduser);
        await axios.post(`https://mern-backend-5ek0.onrender.com/api/comp/participate/${eventId}`,
            {
                pid:user.userid,
                email:user.emailid,
                name:user.name
            });
        alert("Successfully registered!");
    }
    return(
        <div className="explore-container">
      <h1 className="explore-title">Explore Competitions</h1>
      {events.length === 0 ? (
        <p className="no-events">No competitions available at the moment.</p>
      ) : (
        <div className="events-list">
          {events.map((event, index) => (
            <div key={event._id} className="event-item">
              <div className="event-marker">
                <span className="event-index">{(index + 1).toString().padStart(2, "0")}</span>
              </div>
              <div className="event-content">
                <h2 className="event-name">{event.name}</h2>
                <div className="event-details-grid">
                  <div className="detail-group">
                    <span className="detail-label">Organizer</span>
                    <span className="detail-value">{event.organization}</span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Date</span>
                    <span className="detail-value">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Time</span>
                    <span className="detail-value">{event.time}</span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Mode</span>
                    <span className="detail-value mode-indicator" data-mode={event.mode}>
                      {event.mode.charAt(0).toUpperCase() + event.mode.slice(1)}
                    </span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Team Size</span>
                    <span className="detail-value">
                      {event.numofpart} {event.numofpart === 1 ? "person" : "people"}
                    </span>
                  </div>
                  <div className="detail-group full-width">
                    <span className="detail-label">Description</span>
                    <span className="detail-value">{event.description}</span>
                  </div>
                </div>
                <button
                  className="participate-btn"
                  onClick={() => handleParticipants(event._id)}
                >
                  Participate Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    );
}
export default ExploreEvents;