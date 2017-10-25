import React, { Component } from 'react';
import Form from '../components/form';
import {createEmployee} from '../actions/employeeActions';



var createReactClass = require('create-react-class');
const Create =createReactClass({
    handleSubmit(data) {
        createEmployee(data);
        this.props.router.push('/');
    },

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}></Form>
            </div>
        );
    }
});

export default Create;