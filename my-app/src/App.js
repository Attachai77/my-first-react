import React, { Component } from 'react'
import './App.css';

import Simple from './components/Simple'


class App extends Component {
  constructor(){
    super()
    this.state = {
      data:[],
      message: 'Unlike',
      type: false
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
    alert('jjjj')
    let data = this.state.data
    data.push("new data" + Date.now() )
    this.setState({
      data:data
    })
  }

  render() {
    const year = 2020
    const car = {name: "Ford", model: "Mustang"}
    
    const items = []
    for (const [index, value] of this.state.data.entries()) {
      items.push(<li key={index}>{value}</li>)
    }

    return (
      <div className="App">
        <Simple title="Meaage Simple" year={year} car={car} />

        {/* EVENT */}
        <button type="button" onClick={this.changeMesage}> {this.state.message} </button>
        <button type="button" onClick={this.insertData}> Add Data </button>

        
        {items}
      </div>
    );
  }
}

export default App

