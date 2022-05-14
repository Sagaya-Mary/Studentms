import React, { Component } from 'react';
import { addStudentDetails } from '../action/EmployeeAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css'
class AddStudentDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            birthDate: '',
            error: {},
            success: {}
        }


    }
    changeHandler = (e) => {

        this.setState({ ...this.state, [e.target.name]: e.target.value });

    }
    submitHandler = (e) => {


        const { firstName, lastName, birthDate, error, success } = this.state;
        e.preventDefault();
        if (!firstName || !lastName || !birthDate) {
            // console.log("error");
            error.useCorr = "please type all the fields";
        } else {
            console.log("pass")

            this.props.add(this.state);

            success.getSucess = "your data is successfully added";

        }
        this.setState({ error });
        this.setState({ success });
    }

    render() {
        const { firstName, lastName, birthDate, error, success } = this.state;
        return (
            <div>
                <div className='form'>
                    <form className='input-group' onSubmit={this.submitHandler}>

                        <div>
                            {Object.keys(error).map((key) => {

                                return <div key={key}>{error[key]}</div>
                            })}
                            {Object.keys(success).map((key) => {

                                return <div key={key}>{success[key]}</div>
                            })}
                            <input type='text' placeholder='FirstName' className='input-field' name="firstName" value={firstName} onChange={this.changeHandler} />
                        </div>
                        <div>
                            <input type='text' placeholder='LastName' className='input-field' name="lastName" value={lastName} onChange={this.changeHandler} />
                        </div>
                        <div>
                            <input type='text' placeholder='DOB' className='input-field' name="birthDate" value={birthDate} onChange={this.changeHandler} />
                        </div>


                        <button className='btn1'>Save</button>

                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (data) => dispatch(addStudentDetails(data))
    }
}
export default connect(null, mapDispatchToProps)(AddStudentDemo);