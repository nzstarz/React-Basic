//Conditional Return variable elements
import React, {Component} from 'react'

class ConditionVarElements  extends Component{
    constructor(){
        super()
        this.state={
            login:true
        }
    }
    render(){
        return(
            this.state.login? <h1>Now you See Me</h1> : <h1>Now you Don't</h1>
        )
    }
}
export default ConditionVarElements;