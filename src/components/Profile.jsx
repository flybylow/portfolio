import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Player Profile</h1>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile Avatar" 
          className="profile-avatar"
        />
      </div>
      <div className="profile-details">
        <h2>Player Stats</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <span>Games Played</span>
            <span>42</span>
          </div>
          <div className="stat-item">
            <span>Win Rate</span>
            <span>76%</span>
          </div>
          <div className="stat-item">
            <span>High Score</span>
            <span>2,450</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile; 