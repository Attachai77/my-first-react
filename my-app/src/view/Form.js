import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            age: null,
            address: "",
            car: null
        }

        this.inputChange = this.inputChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    inputChange(event){
        // let name = event.target.name
        // let value = event.target.value
        let { name, value } = event.target
        // console.log(name, value)
        if(name=='age' && !Number(value)){
            alert("Age is invalid, Please input number only.")
            return false
        }

        this.setState({
            [name]: value
        })
    }

    submitForm(event){
        event.preventDefault()
        const data = {
            name: this.state.name,
            age: Number(this.state.age),
            address: this.state.address,
            car: this.state.car
        }
        console.log(data)
        alert("call API")
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <h3 >Form</h3>
                    Name: <input type="text" name="name" onChange={ this.inputChange } />
                    <br />
                    Age: <input type="text" name="age" onChange={this.inputChange} />
                    <br />
                    Address: <textarea name="address" onChange={this.inputChange} />
                    <br />
                    Car: <select name="car" onChange={this.inputChange}>
                            <option value="Ford">Ford</option>
                            <option value="Volvo">Volvo</option>
                            <option value="Fiat">Fiat</option>
                        </select>
                    <br />
                    <input type="submit" />

                    <h5>Your name is : {this.state.name} </h5>
                    <h5>Your age is : {this.state.age} </h5>
                </form>
            </div>
        )
    }
}

export default Form
