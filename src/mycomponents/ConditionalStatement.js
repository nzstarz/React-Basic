//Conditional Return if else
import React, {Component} from 'react'

class ConditionalStatement extends Component{

    constructor(){
        super()
        this.state={
            login:false
        }
    }

    render(){
        if(this.state.login==true){
            return(<button>LOGOUT</button>)
        }
        else{
            return(<button>LOGIN</button>)
        }

    }
}
export default ConditionalStatement;