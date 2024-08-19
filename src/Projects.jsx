// Projects.jsx
// import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
      <p>Check out the PitchPipe project:</p>
      <Link to="/pitchpipe">Go to PitchPipe</Link>
    </div>
  );
}

export default Projects;
