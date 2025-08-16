import './Projectdisplay.css'
import React from 'react';
import { useEffect , useState} from 'react';
const Projectdisplay = () => {
//   const [projects, setProjects] = useState([]);

//  useEffect(() => {
//   const fetchProjects = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/getprojects', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const json = await response.json();
//       console.log("Received projects:", json);

//       if (Array.isArray(json)) {
//         setProjects(json);
//       } else {
//         console.error("Expected an array but got:", json);
//       }

//     } catch (error) {
//       console.error("Error fetching projects:", error);
//     }
//   };

//   fetchProjects();
// }, []);
const projects = [
  {
    id: 1,
    title: "iNotebook",
    techStack: "React, CSS, Node.js, Express.js, MongoDB",
    description:
      "iNotebook is your personal cloud-powered digital diary. With secure login and signup, it lets users create, update, and delete notes from anywhere, at any time. Whether it's your next big idea or a reminder to buy milk, iNotebook keeps everything organized in one place. Built from scratch as a full-stack app with robust authentication and seamless UI.",
  },
  {
    id: 2,
    title: "SnapNews",
    techStack: "React, CSS, News API",
    description:
      "SnapNews is your one-stop platform for real-time news updates. Powered by a third-party API and built with React, it brings you fresh headlines across various categories in a sleek, responsive layout. Think of it as your smart, always-on digital newspaper that looks great on every device.",
  },
  {
    id: 3,
    title: "Portfolio Website",
    techStack: "React, CSS, Node.js, Express.js, MySQL",
    description:
      "My personal portfolio — a fully responsive website crafted to showcase my projects, skills, and contact info in style. It combines aesthetics with functionality, making sure every visitor gets a smooth and engaging experience. From backend to frontend, everything’s custom-built for impact.",
  },
  {
    id: 4,
    title: "Currency Converter",
    techStack: "HTML, CSS, JavaScript, Exchange Rate API",
    description:
      "A minimalist and fast currency converter that fetches live exchange rates using an external API. Designed with simplicity and speed in mind, it makes switching between currencies effortless. Perfect for travelers, finance nerds, and curious minds.",
  },
];


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
