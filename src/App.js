import React from 'react';
import './App.css';
import ManifestList from "./components/ManifestList"
import Navbar from "./components/Navbar"
import ThemeContexProvider from './contexts/ThemeContextProvider';


function App() {
  return (
    <div className="app">
     <ThemeContexProvider>
        <Navbar />
        <ManifestList />
     </ThemeContexProvider>
    </div>
  );
}

export default App;
