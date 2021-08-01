//Http Request Get Data from server
import React, { Component } from 'react';
import axios from 'axios'

class CountryList extends Component {

// Use componentDidMount method from react lifecycle to get data through http request from server
    componentDidMount(){
        //Axios is a promise based HTTP client for the browser and Node. js
        axios({method: 'get', url:'https://restcountries.eu/rest/v2/all'})
        .then(response=>{
            console.log(response.data)

        })
        .catch(error=>{
            console.log(error)

        })

    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default CountryList;