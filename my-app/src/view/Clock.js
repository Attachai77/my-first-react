import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            
                {/* Route Link */}
                <Link to="/">Home</Link><br/>
                <Link to="/contact">Contact</Link>
            </div>
        );
    }
}

export default Clock
