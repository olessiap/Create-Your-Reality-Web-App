import React from 'react';
import './App.css';
import ManifestList from "./components/ManifestList"
import Navbar from "./components/Navbar"
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleTheme from './components/ToggleTheme';


function App() {
  return (
    <div className="app">
     <ThemeContextProvider>
        <Navbar />
        <ManifestList />
        <ToggleTheme />
     </ThemeContextProvider>
    </div>
  );
}

export default App;
