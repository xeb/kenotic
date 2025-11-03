import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import SermonDetail from './components/SermonDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-content">
            <Link to="/" className="site-title">
              <h1>kenotic.ai</h1>
            </Link>
            <p className="tagline">self-limitation and service</p>
          </div>
        </header>

        <main className="App-main">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sermon/:id" element={<SermonDetail />} />
          </Routes>
        </main>

        <footer className="App-footer">
          <p>"The Father empties all of himself into the Son. The Son receives and empties all of himself into the Spirit."</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
