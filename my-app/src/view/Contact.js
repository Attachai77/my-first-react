import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Contact extends Component {

    render() {
        return (
            <div>
                <h1>Contact Page</h1>

                {/* Route Link */}
                <Link to="/">Home</Link><br/>
                <Link to="/clock">Clock</Link>
            </div>
        );
    }
}

export default Contact
