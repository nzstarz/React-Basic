//Http Request Get Data from server
import React, { Component } from 'react';
import axios from 'axios'

class CountryList extends Component {
    constructor(){
        super();
        this.state={
            mydata: []
        }
    }

// Use componentDidMount method from react lifecycle to get data through http request from server
    componentDidMount(){
        //Axios is a promise based HTTP client for the browser and Node. js
        axios({method: 'get', url:'https://restcountries.eu/rest/v2/all'})
        .then(response=>{
            this.setState({mydata:response.data})
        })
        .catch(error=>{
            console.log(error)

        })

    }
    render() {
        const mylist=this.state.mydata
        const CountryName = mylist.map((mylist)=>{
            return <li>{mylist.name}</li>

        })

        return (
            <div>
                <ol>{CountryName}</ol>
            </div>
        );
    }
}

export default CountryList;