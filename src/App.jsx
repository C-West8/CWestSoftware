// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Cameron West <br/><br/> Software Devloper</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         {/* <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p> */}
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


/* 
Useful commands for pushing code to gh-pages branch for website:
  1. npm run build
  2. git add . 
    optional: git add -f dist/
  3. git commit -m "message"
  4. git push origin main
  5. git subtree push --prefix dist origin gh-pages
*/
// App.jsx
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

