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
            </div>
        )
    }
}

export default Simple
