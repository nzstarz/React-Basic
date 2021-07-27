import React, { Component } from 'react';

class Signup extends Component {

    constructor(){
        super();
        this.state={
            fname: " ",
            lname: " ",
            email: " ",
            mobile: " "
        }
    }

        onChangeHandler=(event)=>{
            var inputName=event.target.name;
            var inputValue=event.target.value;

            this.setState({[inputName]:inputValue});

        }

    render() {
        return (
            <div>
                <p>First Name: {this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Mobile No: {this.state.mobile}</p>
                <form>
                    <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First Name"></input><br></br>
                    <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Last Name"></input><br></br>
                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email"></input><br></br>
                    <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Mobile"></input><br></br>
                    <input name="submit" type="submit" value="Save Now"></input><br></br>
                </form>
                


            </div>
        );
    }
}

export default Signup;