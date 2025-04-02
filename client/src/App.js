import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <nav style={{ background: 'black', padding: '10px' }}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
            <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Bienvenue dans le cauchemar</Link></li>
            <li><Link to="/blacklist" style={{ color: 'white', textDecoration: 'none' }}>Les flops à fuir</Link></li>
            <li><Link to="/map" style={{ color: 'white', textDecoration: 'none' }}>Carte des zones rouges</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blacklist" element={<Blacklist />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
  );
}

function Home() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/blacklist')
        .then(res => setPlaces(res.data.slice(0, 3)))
        .catch(err => console.log(err));
  }, []);

  return (
      <div style={{ background: 'black', color: 'white', padding: '20px' }}>
        <h1>Barcelonizer : Où ne pas aller à Barcelone</h1>
        {places.map(place => (
            <div key={place._id}>
              <h2 style={{ color: 'red' }}>{place.sarcasticTitle}</h2>
              <p>{place.reasonToAvoid}</p>
            </div>
        ))}
      </div>
  );
}

function Blacklist() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get('/api/blacklist')
        .then(res => setPlaces(res.data))
        .catch(err => console.log(err));
  }, []);

  return (
      <div style={{ background: 'black', color: 'white', padding: '20px' }}>
        <h1>Les flops à fuir</h1>
        {places.map(place => (
            <div key={place._id}>
              <h2 style={{ color: 'red' }}>{place.sarcasticTitle}</h2>
              <p>{place.reasonToAvoid}</p>
            </div>
        ))}
      </div>
  );
}

function Map() {
  return <div style={{ background: 'black', color: 'white', padding: '20px' }}>Carte à venir (Leaflet ici)</div>;
}

export default App;