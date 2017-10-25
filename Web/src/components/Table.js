import React, { Component } from 'react';
import {fetchEmployee} from '../actions/employeeActions';
import {Link} from 'react-router';

export default class Table extends Component {

    constructor(props) {
        super(props);

    };

    deleteHandler(i, e) {
        if(e)
        e.preventDefault();
        this.props.onDelete(this.props.employeePosts[i].employeeId);
        window.location.href='/';
    };


    render() {
        return (
            <div>
                <h1>------------------------</h1>

                <table className="table table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.employeePosts && this.props.employeePosts.map((employee, i)=> {
                            return (
                                <tr key={employee.employeeId}>
                                    <td>{employee.employeeId}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.surname}</td>
                                    <td>{employee.age}</td>
                                    <td>{employee.gender}</td>
                                    <td>
                                        <Link to={`/update/${employee.employeeId}`} className="btn btn-default btn-sm">Edit</Link>
                                        <button onClick={() => this.deleteHandler(i)} className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}