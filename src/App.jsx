import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import Register from "./Register";
import Fill from "./Fill";
import Fill2 from "./Fill2";
import Existing from "./Existing";
import Admin from "./Admin";
import CreateEvent from "./CreateEvent";
import ManageEvents from "./ManageEvents";
import Createnew from "./Createnew";
import Createnew2 from "./Createnew2";
import Existing2 from "./Existing2";
import Participant from "./Participant";
import ExploreEvents from "./ExploreEvents";
import MyEvents from "./MyEvents";
import Navbar from "./Navbar";
import CountUp from './CountUp';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import "./style/Home.css"; 

function App() 
{
  const testimonials = [
    {
      quote: "Eventos reduced our event coordination work by 70%. Everything was centralized and seamless.",
      name: "Sarah Johnson",
      org: "TechConf Organizers",
      initials: "SJ"
    },
    {
      quote: "Managing hackathons has never been easier. The platform handles registrations, scheduling, and communication flawlessly.",
      name: "Michael Chen",
      org: "Hackathon Hub",
      initials: "MC"
    },
    {
      quote: "Our attendees loved the smooth check-in and real-time updates. Eventos is a game-changer!",
      name: "Priya Patel",
      org: "Global Events Co.",
      initials: "PP"
    },
    {
      quote: "The AI scheduling feature saved us hours of manual work. Highly recommended for any large event.",
      name: "David Kim",
      org: "Summit Planners",
      initials: "DK"
    }
  ];
  return(
    <ThemeProvider>
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-container">
              
              <div className="blog-section">
                <h2>Latest from Our Blog</h2>
                <div className="blog-cards">
                  
                  <div className="blog-card">
                    <img
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Event management"
                    />
                    <div className="blog-card-content">
                      <h3>The Future of Event Management</h3>
                      <p>
                        Discover how technology is reshaping the way we plan,
                        organize, and execute events in the digital age.
                      </p>
                      <button className="read-more">Read more</button>
                    </div>
                  </div>

                  
                  <div className="blog-card">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="AI scheduling"
                    />
                    <div className="blog-card-content">
                      <h3>How AI Improves Event Scheduling</h3>
                      <p>
                        Learn about AI-powered tools that optimize schedules,
                        reduce conflicts, and enhance attendee experiences.
                      </p>
                      <button className="read-more">Read more</button>
                    </div>
                  </div>

                  
                  <div className="blog-card">
                    <img
                      src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Hackathon management"
                    />
                    <div className="blog-card-content">
                      <h3>Managing Large-Scale Hackathons Efficiently</h3>
                      <p>
                        Best practices for organizing hackathons with hundreds
                        of participants, from logistics to code reviews.
                      </p>
                      <button className="read-more">Read more</button>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="reviews-section" id="reviews">
                <h2>What Organizers Say</h2>
                <div className="reviews-slider">
                  
                  {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <div className="review-card" key={index}>
                      <div className="avatar">{testimonial.initials}</div>
                      <p>"{testimonial.quote}"</p>
                      <h4>{testimonial.name}</h4>
                      <div className="organization">{testimonial.org}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="importance-section">
                
                <div className="importance-card">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Event manager planning"
                  />
                  <div className="importance-content">
                    <h3>Why is it important for Event Manager?</h3>
                    <ul>
                      <li>Centralized dashboard to manage all events effortlessly.</li>
                      <li>Automated scheduling and conflict resolution.</li>
                      <li>Real-time analytics and attendee insights.</li>
                      <li>Seamless communication with participants.</li>
                    </ul>
                    <Link to="/register" className="importance-button">
                      Manage Events
                    </Link>
                  </div>
                </div>

                
                <div className="importance-card">
                  <img
                    src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Participants at event"
                  />
                  <div className="importance-content">
                    <h3>Why is it important for Participant?</h3>
                    <ul>
                      <li>Easy event discovery and registration.</li>
                      <li>Personalized schedules and reminders.</li>
                      <li>Interactive maps and networking opportunities.</li>
                      <li>Post-event feedback and certificates.</li>
                    </ul>
                    <Link to="/register" className="importance-button">
                      Explore Events
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="about-section" id="about">
                <h2>About Eventos</h2>
                <p className="about-description">
                  Eventos is a cutting‑edge event management platform designed to simplify
                  planning, execution, and participation for organizers and attendees alike.
                  From hackathons to conferences, we provide the tools you need to create
                  unforgettable experiences.
                </p>
                <div className="about-highlights">
                  <div className="highlight">
                    <h3>
                      <CountUp end={500} suffix="+" />
                    </h3>
                    <p>Events Hosted</p>
                  </div>
                  <div className="highlight">
                    <h3>
                      <CountUp end={50000} suffix="+" />
                    </h3>
                    <p>Happy Participants</p>
                  </div>
                  <div className="highlight">
                    <h3>
                      <CountUp end={99} suffix="%" />
                    </h3>
                    <p>Satisfaction Rate</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-section" id="contact">
                <h2>Contact Us</h2>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <h3>Email</h3>
                    <p><a href="mailto:eventos@gmail.com">eventos@gmail.com</a></p>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <h3>Phone</h3>
                    <p>+91 9899330185</p>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">🌐</div>
                    <h3>Website</h3>
                    <p><a href="https://eventos.vercel.app" target="_blank" rel="noopener noreferrer">eventos.vercel.app</a></p>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <h3>Address</h3>
                    <p>Noida, Uttar Pradesh, India</p>
                  </div>
                </div>
                <div className="social-links">
                  <a href="#" className="social-twitter" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 512 421" width="20" height="20" fill="currentColor">
                      
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                    </svg>
                    Twitter
                  </a>
                  <a href="#" className="social-facebook" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 40 40">
                      <linearGradient id="fbGrad" x1="-277.375" x2="-277.375" y1="406.6018" y2="407.5726" gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#0062e0"/>
                        <stop offset="1" stopColor="#19afff"/>
                      </linearGradient>
                      <path fill="url(#fbGrad)" d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"/>
                      <path fill="#fff" d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"/>
                    </svg>
                    Facebook
                  </a>
                  <a href="#" className="social-instagram" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                    Instagram
                  </a>
                  <a href="#" className="social-linkedin" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          }
        />
      <Route path="/register" element={<Register/>}/>
      <Route path="/fill" element={<Fill/>}/>
      <Route path="/fill2" element={<Fill2/>}/>
      <Route path="/createnew" element={<Createnew/>}/>
      <Route path="/existing2" element={<Existing2/>}/>
      <Route path="/createnew2" element={<Createnew2/>}/>
      <Route path="/existing" element={<Existing/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/createevent" element={<CreateEvent/>}/>
      <Route path="/manageevent" element={<ManageEvents/>}/>
      <Route path="/participant" element={<Participant/>}/>
      <Route path="/exploreevents" element={<ExploreEvents/>}/>
      <Route path="/myevents" element={<MyEvents/>}/>
    </Routes>
    </div>
    <ThemeSwitcher />
    </ThemeProvider>
  );
}
export default App;