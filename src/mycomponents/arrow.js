import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const AlertMe=(a)=>{

    alert(a);

}

const Arrow=()=>{
    return(
        <button onClick={AlertMe.bind(this,"Haleluyiah")} className= "btn btn-inverse"> My Butt</button>
    );
}
export default Arrow;