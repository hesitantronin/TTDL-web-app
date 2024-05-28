import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UserOverview from './Views/userOverview';
import UserDataOverview from './Views/UserDataOverview';
import HomePage from './Views/HomePage';
import Login from './Views/login';
import ForgotPassword from './Views/ForgotPassword';
import SetupPage from './Views/setupPage';
import UserAddScreen from './Views/userAddScreen';
//import your screens here first tee hee

function App() {
  //u can add your own route like I did, needs to start with a capital letter or it will kill u
  // to test if it works you can do localhost:3000(yourpathname) ex. localhost:3000/userOverview
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/userOverview" element={<UserOverview />} />
          <Route path="/userDataOverview" element={<UserDataOverview />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/SetupPage" element={<SetupPage />} />
          <Route path="/UserAdd" element={<UserAddScreen />} />
        </Routes>
    </Router>
  );
}

export default App;
