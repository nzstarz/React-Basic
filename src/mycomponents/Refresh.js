//forceUpdate to update react component
import React, {Component} from 'react'

class Refresh extends Component{
    constructor(){
        super()
        this.refreshNow=this.refreshNow.bind(this);
    }

    refreshNow(){
         this.forceUpdate();
         }

    render(){
        return(
            <div>
                <button onClick={this.refreshNow} class="btn btn-default">Refresh Now</button>
                <h1>{Math.random()}</h1>
            </div>
        )
    }
}export default Refresh;