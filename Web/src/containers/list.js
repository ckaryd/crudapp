import React, { Component } from 'react';
import { fetchEmployees, deleteEmployee, fetchEmployee } from '../actions/employeeActions';
import Table from '../components/Table';
import {Link}   from    'react-router';

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeePosts: []
        };

    };
    componentDidMount() {
        fetchEmployees()
            .then((data) => {
                this.setState(state => {
                    state.employeePosts = data;
                    return state;
                })
            })
            .catch((err) => {
                console.error('err', err);
            });
    };
    
    onDelete(id) {
        deleteEmployee(id)
            .then((data) => {
                let employeePosts = this.state.employeePosts.filter((employee) => {
                    return id !== employee.id;
                });

                this.setState(state => {
                    state.employeePosts = employeePosts;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
    }

    render() {
        return (
            <div>
            <Table employeePosts={this.state.employeePosts}
                    onDelete={this.onDelete.bind(this)}
            />
            <Link to={`/create`} className="btn btn-success btn-sm">Add</Link>
            </div>
        );
    }
}    