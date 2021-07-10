import React from 'react'

//Practicing Functional Component   
function Hello(props){
    function DoThis(){
        alert ("You Just Hit on Button")
    }

    return(
        <div>
        <button onClick={DoThis}>Click Here</button>
        <h1> Hi I am {props.name} And I am  {props.age} Years Old</h1>
        </div>
    )
}
export default Hello;