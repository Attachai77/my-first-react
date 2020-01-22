import React, { Component } from 'react'

class Gallery extends Component {
    
    render() {
        let logo = `${process.env.PUBLIC_URL}/logo192.png`
        return (
            <div>
                <img src={logo} alt="Logo" />
            </div>
        )
    }
}

export default Gallery
