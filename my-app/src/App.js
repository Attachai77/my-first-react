import React, { Component } from 'react'
import './App.css';

import Simple from './components/Simple'

function App() {
  const year = 2020
  const car = {name: "Ford", model: "Mustang"}

  return (
    <div className="App">
      <Simple title="Meaage Simple" year={year} car={car} />
    </div>
  );
}


export default App;

