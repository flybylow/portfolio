// src/components/ProjectDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

function ProjectDetails() {
  const { title } = useParams();
  
  // You can fetch project details based on the title
  // This is just example data
  const projectData = {
    Project1: {
      title: "Project1",
      description: "LECROLUX",
      fullDescription: "Detailed description of LECROLUX project...",
      technologies: ["React", "Node.js", "MongoDB"],
      date: "2023"
    },
    Project2: {
      title: "Project2",
      description: "Farma2",
      fullDescription: "Detailed description of Farma2 project...",
      technologies: ["React", "Express", "PostgreSQL"],
      date: "2023"
    }
  };

  const project = projectData[title];

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <p>{project.fullDescription}</p>
      <div className="technologies">
        <h3>Technologies Used:</h3>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <p>Completed: {project.date}</p>
    </div>
  );
}

export default ProjectDetails;