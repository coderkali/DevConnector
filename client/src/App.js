import React, { Fragment } from 'react';
import './App.css';
import Navbar from './componenet/layout/Navbar';
import Landing from './componenet/layout/Landing';
import Register from './componenet/auth/Register';
import Login from './componenet/auth/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
           <Route path="/register" element={<Register />} />
           <Route path="/login" element={<Login />} />
      </Routes>
    </Fragment>  
  </Router>
)
export default App;
