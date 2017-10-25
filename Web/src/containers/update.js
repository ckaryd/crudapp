import React from 'react';
import Form from '../components/form';
import {fetchEmployee, updateEmployee} from '../actions/employeeActions';

var createReactClass = require('create-react-class');
const Update =createReactClass({
    getInitialState: function(){
        return {
            employee: {}
        }
    },
    
    componentDidMount: function() {
        fetchEmployee(this.props.params.employeeId)
            .then((data) => {
                this.setState(state => {
                    state.employee = data;
                    console.log(data);
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
    },

    handleSubmit: function(data) {
        console.log(data);
        
        updateEmployee(this.state.employee.employeeId, data);
        this.props.router.push('/');
    },

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}
                        employeeId = {this.state.employee.employeeId}
                      name = {this.state.employee.name}
                      surname = {this.state.employee.surname}
                      age = {this.state.employee.age}
                      gender = {this.state.employee.gender}></Form>
            </div>
        );
    }
});

export default Update;