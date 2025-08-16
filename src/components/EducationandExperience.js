import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './experience.css'
import { useState , useEffect } from 'react';
const EducationandExperience = () => {
  // Sample data (would typically come from your database)
 const [journey, setJourney] = useState([]);

useEffect(() => {
  const fetchJourney = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/geteducation', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });

      const json = await response.json();
      console.log("Received journey:", json);

      if (Array.isArray(json)) {
        setJourney(json);
      } else {
        console.error("Expected an array but got:", json);
      }
    } catch (error) {
      console.error("Error fetching journey:", error);
    }
  };

  fetchJourney();
}, []);

 
  return (
    <>
    <div className="section-header">
          <div className="section-divider"></div>
          
          <h2 className="section-title">
            <span className="section-title-decoration left"></span>
           My Journey So Far
            <span className="section-title-decoration right"></span>
          </h2>
          
          <div className="section-divider"></div>
        </div>
    <div className="row row-cols-1 row-cols-md-2 g-4 projectdisplay">
      {journey.map((journey) => (
        <div className="col" key={journey.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{journey.degree}</h5>
              <p className="card-text">{journey.institution}</p>
              <p className="card-text"><small className="text-muted">{journey.description}</small></p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default EducationandExperience;