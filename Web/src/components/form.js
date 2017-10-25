import React  from 'react';

var createReactClass = require('create-react-class');
const Form = createReactClass({
    getInitialState: function() {
        return {
            employeeId: this.props.employeeId,
            name: this.props.name || 'somename',
            surname: this.props.surname || 'somesurname',
            age: this.props.age || 0,
            gender: this.props.gender || 'somegender'
        }
    },

    componentWillReceiveProps: function(props) {
        this.setState(props);
    },

    handleNameChange: function(e) {
        this.setState({
            name: e.target.value
        });
    },

    handleSurnameChange: function(e) {
        this.setState({
            surname: e.target.value
        });
    },

    handleAgeChange: function(e) {
        this.setState({
            age: e.target.value
        });
    },

    handleGenderChange: function(e) {
        this.setState({
            gender: e.target.value
        });
    },

    handleSubmit: function(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
        
    },

    render: function() {
        return (
            <div>
                <h1>.</h1>
                <h1>Employee Form</h1>
                <h1></h1>
                <form name="employee_post" className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div id="employee_post">
                        <div className="form-group">
                            <label className="col-sm-2 control-label required" htmlFor="employee_post_name">Name</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       id="employee_post_name"
                                       required="required"
                                       className="form-control"
                                       value = {this.state.name}
                                       onChange={this.handleNameChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label required" htmlFor="employee_post_surname">Surname</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       id="employee_post_surname"
                                       required="required"
                                       className="form-control"
                                       value={this.state.surname}
                                       onChange={this.handleSurnameChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label required" htmlFor="employee_post_age">Age</label>
                            <div className="col-sm-10">
                                <input type="number"
                                       id="employee_post_age"
                                       required="required"
                                       className="form-control"
                                       value = {this.state.age}
                                       onChange={this.handleAgeChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label required" htmlFor="employee_post_gender">Gender</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       id="employee_post_gender"
                                       required="required"
                                       className="form-control"
                                       value={this.state.gender}
                                       onChange={this.handleGenderChange}/>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10">
                                <button type="submit"
                                        id="employee_post_submit"
                                        className="btn-default btn">
                                    Submit
                                    
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

export default Form;


  