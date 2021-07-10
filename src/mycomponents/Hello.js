import React from 'react'

//Practicing Functional Component   
function Hello(props){
    return(
        <h1> Hi I am {props.name} And I am  {props.age} Years Old</h1>// React Props for Functional component
    )
}
export default Hello;