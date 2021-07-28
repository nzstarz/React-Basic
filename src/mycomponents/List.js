//React Lists
import React, { Component } from 'react';

class List extends Component {


    Madness = (tesseract)=>{
    return <option>{tesseract}</option>
    }

    render() {

        const multiverse = ['Sakaar', 'TVA', 'Loki', 'Movius', 'Sylvie', 'Kang'];
        const marvel = multiverse.map(this.Madness)     

        return (
            <div>
                <select>
                   {marvel} 
                </select>
            </div>
        );
    }
}

export default List;