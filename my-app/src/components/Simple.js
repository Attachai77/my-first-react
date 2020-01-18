import React, { Component } from 'react'

class Simple extends Component {
    
    render() {
        let myStyle = {
            fontSize: 100,
            color: '#ff0000'
        }
        return (
            <div>
                <h2 style={myStyle} >Simple</h2>
                <p>{this.props.title}</p>
                <p>{this.props.year}</p>
                <p>{this.props.car.name} / {this.props.car.model}</p>
            </div>
        )
    }
}

export default Simple
