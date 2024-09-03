/* 
Useful commands for pushing code to gh-pages branch for website:
  1. npm run build
  2. git add . 
  3. git commit -m "message"
  4. git push origin main
  5. git subtree push --prefix dist origin gh-pages
*/

// import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import your page components
import Experience from './Experience'; 
import Projects from './Projects';
import Hobbies from './Hobbies';
import PitchPipe from './PitchPipe'; // Import the new PitchPipe component

import './App.css'; // Make sure to include your CSS

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/hobbies">Hobbies</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/pitchpipe" element={<PitchPipe />} /> {/* Add the new route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

