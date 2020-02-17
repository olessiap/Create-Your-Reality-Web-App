import React from 'react';
import './App.css';
import ManifestList from "./components/ManifestList"
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="app">
      <Navbar />
      <ManifestList />
    </div>
  );
}

export default App;
