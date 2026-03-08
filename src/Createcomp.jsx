import React,{useState}from "react";
import {Link} from "react-router-dom";

function Createcomp()
{
    const[ptype,setptype]=useState("");
    const [teamsize,setteamsize]=useState("");
    const handlechange=(e)=>
    {
        setptype(e.target.value);
        if(e.target.value!=="team")
        {
            setteamsize("");
        }
    }
    return(
        <div>
            <h1>Fill the details of the competition</h1>
            <form>
                <label>
                    Name:<input type="text" name="name"/>
                </label>
                <label>
                    Date:<input type="date" name="date"/>
                </label>
                <label>
                    Location:<input type="text" name="location"/>
                </label>
                <label>
                    Description:<input type="text" name="description"/>
                </label>
                <label>
                    Time:<input type="time" name="time"/>
                </label>
                <label>
                    Registration Deadline:<input type="date" name="registrationdeadline"/>
                </label>
                <label>
                    Maximum participants:<input type="number" name="maximumparticipants"/>
                </label>
                <select onChange={handlechange} value={ptype}>
                    <option value="">Team/Individual</option>
                    <option value="team">Team</option>
                    <option value="individual">Individual</option>
                </select>
                <label>
                    Number of participants in a team:<input 
                    type="number" 
                    onchange={(e)=>setteamsize.target.value}
                    disabled={ptype!=="team"}
                    required={ptype==="team"}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Createcomp;