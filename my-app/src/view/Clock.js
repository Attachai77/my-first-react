import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            increment: 0
        };

        this.AutoIncrement = this.AutoIncrement.bind(this)
    }

    //After Render
    componentDidMount() {
        this.TimeID = setInterval(
            () => this.tick(),
            1000
        )
    }

    // before Leave component
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <FormattedDate date={this.state.date} />
            
                {/* Route Link */}
                <Link to="/">Home</Link><br/>
                <Link to="/contact">Contact</Link>

                <br/><br/><br/>
                <button type="button" onClick={this.AutoIncrement}>Click AutoIncrement</button>
                <h3>{this.state.increment}</h3>
            </div>
        );
    }

    AutoIncrement(){
        setInterval(
            () => {

                // Wrong
                // this.setState({
                //     increment: this.state.increment + 1
                // });

                // Correct
                this.setState((state, props) => ({
                    increment: state.increment + 1
                }));
            },  
            1000
        )
    }
}

function FormattedDate(props) {
    return <h2> >>> It is {props.date.toLocaleTimeString()}. >>>>> </h2>;
}

export default Clock
