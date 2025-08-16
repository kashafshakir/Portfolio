import './Projectdisplay.css'
import React from 'react';
import { useEffect , useState} from 'react';
const Projectdisplay = () => {
  const [projects, setProjects] = useState([]);

 useEffect(() => {
  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/getprojects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();
      console.log("Received projects:", json);

      if (Array.isArray(json)) {
        setProjects(json);
      } else {
        console.error("Expected an array but got:", json);
      }

    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  fetchProjects();
}, []);

  return (
    <>
    <div className="section-header">
          <div className="section-divider"></div>
          
          <h2 className="section-title">
            <span className="section-title-decoration left"></span>
            Things I've Built
            <span className="section-title-decoration right"></span>
          </h2>
          
          <div className="section-divider"></div>
        </div>
    <div className="row row-cols-1 row-cols-md-2 g-4 projectdisplay">
      {projects.map((project) => (
        <div className="col" key={project.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <p className="card-text"><small className="text-muted">{project.tech_stack}</small></p>
              <a href={project.github_link}>click me</a>
              <div></div>
              <a href="project.live_link"></a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Projectdisplay;
