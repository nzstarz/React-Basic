import React, {Component} from 'react'

//Practicing Class Component
class Welcome extends Component{
    render(){
        return <h1> Hi, My Name is {this.props.name}</h1>// React Props for class component
    }
}
export default Welcome;