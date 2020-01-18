import React, { Component } from 'react'

class Simple extends Component {
    constructor(){
        super()
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
            count: 1
        }
    }
    
    
    render() {
        setTimeout(() => {
            this.setState({
                brand: "Toyota",
                model: "Fortuner"
            })
        }, 5000);

        setInterval(() => {
            this.setState({
                count: this.state.count+1
            })
        }, 10000);
        
        let myStyle = {
            fontSize: 100,
            color: '#ff0000'
        }
        return (
            <div>
                {/* Stylesheet */}
                <h2 style={myStyle} >Simple</h2>

                {/* Props */}
                <p>{this.props.title}</p>
                <p>{this.props.year}</p>
                <p>{this.props.car.name} / {this.props.car.model}</p>

                {/* State */}
                <p>{this.state.brand}</p>
                <p>{this.state.model}</p>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default Simple
