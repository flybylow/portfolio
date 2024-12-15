// src/components/Project.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Project({ title, description }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <Link to={`/project/${title}`}>View Details</Link>
    </div>
  );
}

export default Project;