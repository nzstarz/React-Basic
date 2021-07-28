//working with select option drop down list
import React, { Component } from 'react';

class Select extends Component {


    constructor(){
        super();
        this.state={
            planet1: "Midgard",
            planet2: "Vanaheim",
            planet3: "Jotunheim",
            planet4: "Vormir",
            planet5: "Asgard",
            planet6: "Morag",
            show : "",
            auto: "Midgard"

        }
    }
        onChangeHandler=(event)=>{
            var SelectedValue = event.target.value;
            this.setState({show:SelectedValue, auto:SelectedValue})
        }


    render() {
        return (
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHandler} value={this.state.auto}>
                    <option>{this.state.planet1}</option>
                    <option>{this.state.planet2}</option>
                    <option>{this.state.planet3}</option>
                    <option>{this.state.planet4}</option>
                    <option>{this.state.planet5}</option>
                    <option>{this.state.planet6}</option>
                </select>
            </div>
        );
    }
}

export default Select;