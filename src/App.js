import React from 'react';
import './App.css';
import ManifestList from "./components/ManifestList"
import Navbar from "./components/Navbar"
import ThemeContextProvider from './contexts/ThemeContext';


function App() {
  return (
    <div className="app">
     <ThemeContextProvider>
        <Navbar />
        <ManifestList />
     </ThemeContextProvider>
    </div>
  );
}

export default App;
