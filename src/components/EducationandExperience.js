import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './experience.css'
import { useState , useEffect } from 'react';
const EducationandExperience = () => {
  // Sample data (would typically come from your database)
//  const [journey, setJourney] = useState([]);

// useEffect(() => {
//   const fetchJourney = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/geteducation', {
//         method: 'GET',
//         headers: {
//           "Content-Type": "application/json"
//         }
//       });

//       const json = await response.json();
//       console.log("Received journey:", json);

//       if (Array.isArray(json)) {
//         setJourney(json);
//       } else {
//         console.error("Expected an array but got:", json);
//       }
//     } catch (error) {
//       console.error("Error fetching journey:", error);
//     }
//   };

//   fetchJourney();
// }, []);
const journey = [
  {
    id: 1,
    degree: "Bachelors in Computer Science (AI Specialization)",
    institution: "NED University of Engineering and Technology",
    start_year: 2023,
    end_year: 2027,
    description:
      "Pursuing a rigorous 4-year Computer Science degree with a specialization in Artificial Intelligence at one of Pakistan’s top engineering universities. Coursework includes machine learning, data science, and advanced algorithms, complemented by hands-on projects in full-stack development and AI research.",
  },
  {
    id: 2,
    degree: "Website Development Internship",
    institution: "Bank Al Habib – Central Point Branch",
    start_year: 2025,
    end_year: 2025,
    description:
      "Completed a professional internship as a Website Developer in June 2025, contributing to both frontend and backend enhancements of internal web applications. Gained experience in modern web technologies, performance optimization, and real-world deployment.",
  },
  {
    id: 3,
    degree: "Winner – Koderz Combat 2024",
    institution: "NED University of Engineering and Technology",
    start_year: 2024,
    end_year: 2024,
    description:
      "Secured 1st place in Koderz Combat 2024, a highly competitive programming battle held at NED University. Outperformed senior students across all years by solving advanced algorithmic challenges under time pressure, demonstrating deep problem-solving skills and coding speed.",
  },
];


 
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