// React setState change state value
import React, {Component} from 'react'

class ChangeStateValue extends Component{
    constructor(){
        super()

        this.state={
            salary : "32K"
        }

    }
        changeSalary(aa){
            this.setState({salary:aa})

        }

    render(){
        return <div>
                 <h1>{this.state.salary} </h1>
                 <button onClick={this.changeSalary.bind(this, "45K")}>Change State</button>
           
            </div>
    }
}
export default ChangeStateValue;