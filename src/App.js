import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://api.sampleapis.com/beers/ale")
      .then(response => setBeers(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Beer Cards</h1>
      <input
        type="text"
        placeholder="Search beers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="card-container">
        {filteredBeers.map(beer => (
          <div key={beer.id} className="card">
            <img src={beer.image} alt={beer.name} className="card-image" />
            <h2>{beer.name}</h2>
            <p>{beer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
