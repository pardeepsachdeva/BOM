import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Navbar } from '../Navbar';

 class AddProject extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            project_name : '',
            project_desc : ''
             
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


     handleSubmit(e) {
const url = process.env.REACT_APP_AXIOS_URL;

        e.preventDefault();
        var axios = require('axios');
        var qs = require('qs');
        var FormData = require('form-data');

        const {  project_name, project_desc} = this.state;
        if ( project_name && project_desc ){

          var data = new FormData();
          data.append('project_name', project_name);
          data.append('project_desc', project_desc);
          
          var config = {
            method: 'post',
            url: `${url}/api/projects/`,
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded', 

            },
            data : data
          };
          
          axios(config)
          .then((response ) => {
            console.log(JSON.stringify(response));
           this.props.history.push('/home');
           

          })
          .catch(function (error) {
            console.log(error);
          });
          
           }     
}

    handleChange(e) {
        console.log(e.target.name);
        const { name, value } = e.target;
        this.setState({ [name]: value });
        console.log(value);
    }

    render() {
        return (
            <div>
              <Navbar></Navbar>
              <div className="mt-5 d-flex justify-content-center">
                <form  noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <div><TextField id="standard-basic" onChange={this.handleChange} label="Project Name" name="project_name" /></div>
                    <div><TextField  id="outlined-multiline-static" onChange={this.handleChange} label="Project Description" name="project_desc" /></div>
                    {/* <input  className="submit btn btn-link d-flex justify-content-end" type="submit" value="submit" /> */}
                    {/* <button></button> */}
                    <button type="submit" class="btn btn-primary mt-4">Submit</button>
                </form>
                </div>
            </div>
        )
    }
}

export  default AddProject ;
