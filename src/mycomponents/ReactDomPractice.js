//ReactDOM render() and hydrate()
import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class ReactDom extends Component {

    pracDom(){
        
        var container = document.getElementById("myID");
        var element =<h1> Hi, I am Loki From Asgard</h1>
        var callback =function(){
            alert("DOM Returns From Callback function");
        }

        ReactDOM.hydrate(element,container,callback);
    }



    render() {
        return (
            <div>
                <button onClick={this.pracDom}>DOM Change</button>
                <h1 id="myID">Hi, I'm Rocket Man</h1>
            </div>
        );
    }
}

export default ReactDom;