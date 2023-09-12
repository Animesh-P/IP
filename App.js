
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to='/Home' className='nav-link'>Home</Link>
            </li>
            <li>
              <Link to='/About' className='nav-link'>About</Link>
            </li>
            <li>
              <Link to='/Contact' className='nav-link'>Contact</Link>
            </li>
          </ul>
        </nav>

        <hr />
	<Routes>

        <Route exact path="/Home" element={< Home />}></Route>
        <Route exact path="/About" element={< About />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
	</Routes>
      </div>
    </Router>
  );
}

export default App;
