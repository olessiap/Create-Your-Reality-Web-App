import React from 'react';
import './App.css';
import ManifestList from "./components/ManifestList"
import Navbar from "./components/Navbar"
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleTheme from './components/ToggleTheme';
import AuthContextProvider from './contexts/AuthContext';
import ManifestContextProvider from './contexts/ManifestContext';


function App() {
  return (
    <div className="app">
    <ThemeContextProvider>
      <AuthContextProvider>
        <Navbar />
        <ManifestContextProvider>
          <ManifestList />
        </ManifestContextProvider>
        <ToggleTheme />
      </AuthContextProvider>
     </ThemeContextProvider>
    </div>
  )
}

export default App;
