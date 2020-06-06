import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import NameForm from './components/NameForm'

function App() {
  return (
    <div className="App">
      <Navbar />
      <NameForm />
    </div>
  );
}

export default App;
