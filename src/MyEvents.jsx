import React,{useEffect,useState} from "react";
import axios from "axios";

function MyEvents()
{ 
    const [events,setEvents]=useState([]);
    const [loading,setLoading]=useState(true);
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };
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
            const response=await axios.get(`https://mern-backend-5ek0.onrender.com/api//comp/participant/${user.userid}`);
            setEvents(response.data.events);
            setLoading(false);
        }
        fetchEvents();
    },[]);
    if (loading) return <div>Loading your events...</div>;
    return(
        <div className="myevents-container">
      <h1 className="myevents-title">Your Registered Competitions</h1>
      {events.length === 0 ? (
        <p className="no-events">You haven't registered for any events yet.</p>
      ) : (
        <div className="events-timeline">
          {events.map((event, index) => (
            <div key={event.id} className="event-item">
              <div className="event-marker">
                <span className="event-index">{(index + 1).toString().padStart(2, '0')}</span>
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
                    <span className="detail-value">{formatDate(event.date)}</span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Time</span>
                    <span className="detail-value">{event.time}</span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Mode</span>
                    <span className="detail-value mode-indicator" data-mode={event.mode}>
                      {event.mode === 'online' ? 'Online' : event.mode === 'offline' ? 'Offline' : 'Hybrid'}
                    </span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Venue / Link</span>
                    <span className="detail-value">{event.place}</span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Team Size</span>
                    <span className="detail-value">{event.teamSize} {event.teamSize === 1 ? 'person' : 'people'}</span>
                  </div>
                  <div className="detail-group full-width">
                    <span className="detail-label">Description</span>
                    <span className="detail-value">{event.description}</span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Registered On</span>
                    <span className="detail-value">{formatDate(event.registrationDate)}</span>
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
export default MyEvents;