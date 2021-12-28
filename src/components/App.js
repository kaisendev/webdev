import './App.css';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Components
import Navbar from './Navbar'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import NotFound from './NotFound';

function App() {
  return (
    <main className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
