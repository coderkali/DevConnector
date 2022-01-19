import React, { Fragment } from 'react';
import './App.css';
import Navbar from './componenet/layout/Navbar';
import Landing from './componenet/layout/Landing';
import Register from './componenet/auth/Register';
import Login from './componenet/auth/Login';
//Redux
import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <Provider store={store}>
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
  </Provider>
)
export default App;
