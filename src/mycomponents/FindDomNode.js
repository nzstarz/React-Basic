//findDOMNode( ) from React Dom
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class FindDomNode extends Component {

        ChangeImg(){
            var imgID =  document.getElementById("imgID");
            ReactDOM.findDOMNode(imgID).src="https://officialpsds.com/imageview/70/91/7091jm_large.png?1529342088"
        }

    render() {
        return (
            <div>
                <button onClick={this.ChangeImg}>Change Image</button><br></br>
                <br></br>
                <img id="imgID" src="https://officialpsds.com/imageview/7j/63/7j63y9_large.png?1521316487"></img>
            </div>
        );
    }
}

export default FindDomNode;