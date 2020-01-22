import React, { Component } from 'react'
import './App.css';

import Simple from './components/Simple'
import {
  Link
} from "react-router-dom";


class App extends Component {
  constructor(){
    super()
    this.state = {
      data:[],
      message: 'Unlike',
      inputDate: ''
    }

    this.changeMesage = this.changeMesage.bind(this)
    this.insertData = this.insertData.bind(this)
  }

  
  changeMesage(){
    this.setState({
      message: "Liked"
    })
  }

  insertData(){
    let data = this.state.data
    data.push("new data" + Date.now() )
    this.setState({
      data:data
    })
  }

  onChangeInput(event){
    this.setState({
      inputDate: event.target.value
    })
  }

  render() {
    const year = 2020
    const car = {name: "Ford", model: "Mustang"}
    const items = []
    for (const [index, value] of this.state.data.entries() ) {
      items.push(<li key={index}>{value}</li>)
    }

    return (
      <div className="App">
        <Simple title="Meaage Simple" year={year} car={car} />

        {/* EVENT */}
        <button type="button" onClick={this.changeMesage}> {this.state.message} </button>
        <button type="button" onClick={this.insertData}> Add Data </button>

        <h5>{this.state.data}</h5>        
        {items}

        {/* onChange Event */}
        <input type="text" onChange={this.onChangeInput.bind(this) } />
        <h4>type : {this.state.inputDate}</h4>

        {/* Route Link */}
        <Link to="/contact">Contact</Link><br/>
        <Link to="/clock">Clock</Link>

      </div>
    );
  }
}


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App

