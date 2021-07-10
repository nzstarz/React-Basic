import React, {Component} from 'react'

//Practicing Class Component
class Welcome extends Component{

    doThisFromClass(){
        alert("Button is clicked from Class")
    }
    render(){
        return <div>
              
            <button onClick={this.doThisFromClass}>Which Class</button>
            <h1> Hi, I read in Class {this.props.name}</h1>
        </div>// React Props for class component
    }
}
export default Welcome;