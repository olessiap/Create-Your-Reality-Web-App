import React from 'react';
import './App.css';
import ManifestList from "./components/ManifestList"
import Navbar from "./components/Navbar"
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleTheme from './components/ToggleTheme';
import AuthContextProvider from './contexts/AuthContext';


function App() {
  return (
    <div className="app">
    <ThemeContextProvider>
      <AuthContextProvider>
        <Navbar />
        <ManifestList />
        <ToggleTheme />
      </AuthContextProvider>
     </ThemeContextProvider>
    </div>
  )
}

export default App;
