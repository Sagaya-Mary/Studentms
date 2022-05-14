import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudentDemo from '../components/AddStudent';
import Header from '../components/Header';
import Home from '../components/Home';
import ViewSingleStudent from '../components/ViewSingleStudent';
import ViewAllStudent from '../components/ViewAllStudent';
import UpdateStudent from '../components/UpdateStudent';
import DeleteStudent from '../components/DeleteStudent';
class RouterPath extends Component {
    render() {
        return (
            <div>
                <Router>
                    

                    <Routes>


                        <Route path="/" element={<Home />} />
                        <Route path="/get" element={<ViewAllStudent />} />
                        <Route path="/add" element={<AddStudentDemo />} />
                        <Route path='/byid' element={<ViewSingleStudent/>}/>
                        <Route path='/update' element={<UpdateStudent/>}/>
                        <Route path='/delete' element={<DeleteStudent/>}/>
                    


                    </Routes>

                </Router>
            </div>
        );
    }
}

export default RouterPath;