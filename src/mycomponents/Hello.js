import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

//Practicing Functional Component   
function Hello(props){
    function DoThis(a){
        alert (a)
    }

    return(
        <div>
        <button className="btn btn-primary m-3 float-right" onClick={DoThis.bind(this,"Passing Arguments..")}>Click Here</button>
        <h1> Hi I am {props.name} And I am  {props.age} Years Old</h1>
        </div>
    )
}
export default Hello;