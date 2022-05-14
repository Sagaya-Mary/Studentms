import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getStudentDetailsById } from '../action/EmployeeAction';
class ViewSingleStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {

            id: '',
            error: {},

           
        }
    }

    componentWillUnmount=()=>{

       
    }
    submitHandler = (e) => {
        const { error } = this.state;
        e.preventDefault();
        if (this.state.id<=0) {
            error.checkerror = "please type valid id number";
        }
        else {
        
            this.props.get(this.state.id);
           
           
        }
        this.error = {};
    }

    changeHandler = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    render() {
     
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" className="input-field" placeholder="type id" name="id" required onChange={this.changeHandler} /><br></br>
                    <button >View Student</button>

                    <div > Id : {this.props.student.id}</div>
                    <div >Student First Name : {this.props.student.firstName}</div>
                    <div >Student Last Name : {this.props.student.lastName}</div>
                    <div>Student DOB : {this.props.student.birthDate}</div>



                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        student: state.data.student
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        get: (data) => dispatch(getStudentDetailsById(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewSingleStudent);