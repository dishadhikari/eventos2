import React,{useState,useEffect}from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./style/CreateEvent.css";

function CreateEvent()
{
    const navigate=useNavigate();
    const [currentUser, setCurrentUser] = useState(null);
    const [formData,setFormData]=useState({
        organizerid:"",
        name:"",
        organization:"",
        date:"",
        time:"",
        mode:"",
        place:"",
        description:"",
        teamcap:"",
        ptype:"",
        numofpart:1,
    })
    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");

        if (storedUser) {
            const user = JSON.parse(storedUser);
            setCurrentUser(user);
            setFormData(prev => ({
                ...prev,
                organizerid: user.userid
            }));
        }
    }, []);
    const handleChange=(e)=>
    {
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        });
        if(name==="ptype"&&value!=="team")
        {
            setFormData((prev)=>({...prev,numofpart:1}));
        }
    };
    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        console.log("Submit clicked");
        const payload=
        {
            ...formData,
            contactperson:currentUser?.name,
            contactmail:currentUser?.emailid,
            contactnumber:currentUser?.phone,
        };
        console.log(payload);
        const response=await axios.post(
            "https://mern-backend-5ek0.onrender.com/api/comp/create",
            payload
        );
        alert(response.data.message);
        if(response.data.success)
        {
            navigate("/admin");
        }
    }
    return(
        <div className="fullscreen-form">
      <div className="form-header">
        <h1 className="form-title">Create Your Competition</h1>
        <p className="form-subtitle">Fill in the details to launch a new event</p>
      </div>

      <form onSubmit={handleSubmit} className="creative-form">
        <div className="form-grid">
          
          <div className="form-field">
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Tech Hackathon 2025"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="organization">Organization</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Your organization name"
              required
            />
          </div>

          
          <div className="form-field">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          
          <div className="form-field">
            <label htmlFor="mode">Mode</label>
            <select
              id="mode"
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              required
            >
              <option value="">Select mode</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="place">Place / Venue</label>
            <input
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleChange}
              placeholder="e.g. Zoom / 123 Main St"
              required
            />
          </div>

          
          <div className="form-field">
            <label htmlFor="deadline">Registration Deadline</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="teamcap">Maximum Registrations</label>
            <input
              type="number"
              id="teamcap"
              name="teamcap"
              value={formData.teamcap}
              onChange={handleChange}
              placeholder="e.g. 100"
              min="1"
              required
            />
          </div>

          
          <div className="form-field full-width">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your event, rules, highlights..."
              rows="4"
              required
            />
          </div>

          
          <div className="form-field">
            <label htmlFor="ptype">Team / Individual</label>
            <select
              id="ptype"
              name="ptype"
              value={formData.ptype}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option value="team">Team</option>
              <option value="individual">Individual</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="numofpart">
              Participants per team {formData.ptype === "team" && "*"}
            </label>
            <input
              type="number"
              id="numofpart"
              name="numofpart"
              value={formData.numofpart}
              onChange={handleChange}
              disabled={formData.ptype !== "team"}
              required={formData.ptype === "team"}
              min="1"
              placeholder={formData.ptype === "team" ? "e.g. 4" : "Disabled"}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            Create Event
          </button>
        </div>
      </form>
    </div>
        
    );
}

export default CreateEvent;