import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import Project from './components/Project';
import ProjectDetails from './components/ProjectDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <span> - </span>
          <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project/:title" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

// Simple Home component
function Home() {
  return (
    <div>
      <h1>Welcome Home</h1>
      <Project title="Project1" description="ECROLUX" />
      <Project title="Project2" description="Farma2" />
    </div>
  );
}

export default App;
