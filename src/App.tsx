import React from 'react';


import Autor from './pages/Autor';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>            
            <Link to="/home">
              Home
            </Link>            
          </li>
          <li>            
            <Link to="/autor">
              Autores 
            </Link>            
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route 
          path="/autor" 
          element={<Autor />} 
        />
        <Route 
          path="/home" 
          element={<h1>Hello OOP Student</h1>} 
        />
      </Routes>
      
    </Router>
  );
}

export default App;
