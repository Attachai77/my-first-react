import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import Simple from './components/Simple'

function App() {
  const year = 2020
  const car = {name: "Ford", model: "Mustang"}

  return (
    <div className="App">
      <Header/>
      <Simple title="Meaage Simple" year={year} car={car} />
    </div>
  );
}


export default App;



export class Header extends Component {
  render() {
    return (
      <div>
        <h2>Header</h2>
      </div>
    )
  }
}

