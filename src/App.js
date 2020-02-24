import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleTheme from './components/ToggleTheme';
import AuthContextProvider from './contexts/AuthContext';
import ThankYouContextProvider from './contexts/ThankYouContext';
import ThankYouList from './components/ThankYouList';
import ThankYouForm from './components/ThankYouForm';


function App() {
  return (
    <div className="app">
    <ThemeContextProvider>
      <AuthContextProvider>
        <ThankYouContextProvider>
          <ToggleTheme />
          <Navbar /> 
          <ThankYouList />
          <ThankYouForm />
        </ThankYouContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
    </div>
  )
}

export default App;
