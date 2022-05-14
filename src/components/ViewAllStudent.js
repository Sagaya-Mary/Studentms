import React, { Component } from 'react';
import { fetchStudentDetails } from '../action/EmployeeAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './ViewStudent.css'

function ViewStudent(props) {
    const { students } = useSelector((state) => state.data);
    console.log("details", students);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStudentDetails());
    }, []);

    return (
        <div className='form'>
            <h1>Student Details{students.id}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>DateOfBirth</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((list, key) => {
                            return (
                                <tr key={key}>
                                    <td>{list.id}</td>
                                    <td>{list.firstName}</td>
                                    <td>{list.lastName}</td>
                                    <td>{list.birthDate}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    );
}


export default ViewStudent