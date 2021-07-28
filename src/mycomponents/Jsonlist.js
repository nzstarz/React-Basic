//React List From JSON Array
import React, { Component } from 'react';

class Jsonlist extends Component {


    render() {
        const mylist=[
            {
                city: "Dhaka",
                zip: "1213"
            },
            {
                city: "Comilla",
                zip: "3232" 
            },
            {
                city: "Feni",
                zip: "4529"
            }
        ]
        const dataItemsCity=mylist.map((dataCity)=>{
            return <option>{dataCity.city}</option>
        });

        const dataItemsZip=mylist.map((dataZip)=>{
            return <option>{dataZip.zip}</option>
        });

        return (
            <div>
                <select>
                    {dataItemsZip}
                </select>
                <select>
                    {dataItemsCity}
                </select>
            </div>
        );
    }
}

export default Jsonlist;