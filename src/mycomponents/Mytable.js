//React table local data and server data
// Working with React Table is version Specified, such as "react-table.css" doesn't work with above react table-6
import React, { Component } from 'react';
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'

  
class Mytable extends Component {
    render() {
        const data = [{
          name: 'Tanner Linsley',
          age: "26"},
          
            {name: 'Jason Maurer',
            age: "23"},

            {name: 'Nazmul M',
            age: "34"} ]      
      
       
        const columns = [{
          Header: 'Name',
          accessor: 'name' // String-based value accessors!
        }, {
          Header: 'Age',
          accessor: 'age',
          Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        
        }]

        return (
            <div>
                <ReactTable
                    data={data}
                   // resolveData={data => data.map(row => row)}
                    columns={columns}
                   defaultPageSize={2}
                    pageSizeOptions={[5, 10, 15, 20, 30]}
                />
            </div>
        );
    }
}

export default Mytable;