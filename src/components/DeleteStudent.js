import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { deleteStudentDetailsById } from '../action/EmployeeAction';
class DeleteStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {

            id: '',
            errors: {},
            success: {}
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }
    formValidation = () => {
        const { id, success } = this.state;
        let isValid = true;
        const errors = {};

        if (id<=0) {
            errors.useCorrectEmail = "type valid id";
            isValid = false;
        }

      
        else {
            this.props.get(this.state.id);
            success.useSuccess = "successfully deleted";
        }
        this.setState({ errors });


        this.setState({ success });
        return isValid;

    }
    handleSubmitter = (e) => {

        e.preventDefault();
        const isValid = this.formValidation();
    }


    render() {
        const { id, errors, success } = this.state;
        return (
            <div>
                <form id="register"  name="form" onSubmit={this.handleSubmitter}>
                {Object.keys(errors).map((key) => {

return <div key={key}>{errors[key]}</div>
})}
{Object.keys(success).map((key) => {

return <div key={key}>{success[key]}</div>
})}
                    <input type="text" className="input-field" placeholder="type id" name="id" required onChange={this.handleChange} /><br></br>
                    <button >Delete Student</button>

                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        get: (data) => dispatch(deleteStudentDetailsById(data))
    }
}
export default connect(null, mapDispatchToProps)(DeleteStudent);