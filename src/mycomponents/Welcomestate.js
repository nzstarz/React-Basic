//React State where you store property values
import React, {Component} from 'react'

class Welcomesate extends Component{

    constructor(){
        super()

        this.state={
            job : "I'm Practicing React State ",
            salary : "32K",
            company : "b71",
            address : "MirpurDOHS"

        }
    }


    render(){
        return <div>
            <h1>Whats your Job = {this.state.job}</h1>
            <h1> How Much They Pay = {this.state.salary}</h1>
            <h1>Whats the Name of the company = {this.state.company}</h1>
            <h1>Where is it = {this.state.address}</h1>
            </div>
    }
}
export default Welcomesate