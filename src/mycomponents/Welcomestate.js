//React State where you store property values, Nested React State And Array In Property
import React, {Component} from 'react'

class Welcomesate extends Component{

    constructor(){
        super()

        this.state={
            job : "I'm Practicing React State ",
            salary : ["32K", "25K", "35K", "40K"],
            address : "Mirpur DOHS" ,
            company : {
                        C1: ["b71", "Bkash", "Nagad" ],
                        C2: "Evaly", 
                        C3:  "Evercare"
                     }
            

        }
    }


    render(){
        return <div>
            <h1>Whats your Job = {this.state.job}</h1>
            <h1> How Much They Pay = {this.state.salary[3]}</h1>
            <h1>Whats the Name of the company = {this.state.company.C1[2]}</h1>
            <h1>Where is it = {this.state.address}</h1>
            </div>
    }
}
export default Welcomesate