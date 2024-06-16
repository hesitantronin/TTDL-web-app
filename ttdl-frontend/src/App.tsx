import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UserOverview from './Views/userOverview';
import UserDataOverview from './Views/UserDataOverview';
import HomePage from './Views/HomePage';
import Login from './Views/login';
import ForgotPassword from './Views/ForgotPassword';
import SetupPage from './Views/setupPage';
import UserAddScreen from './Views/userAddScreen';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/userOverview" element={<UserOverview />} />
          <Route path="/userDataOverview/:id/:name/:lastName" element={<UserDataOverview />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/SetupPage" element={<SetupPage />} />
          <Route path="/UserAdd" element={<UserAddScreen />} />
          <Route path="/chairDataOverview/:chairId/:currentPatientId" element={<SetupPage />} />
        </Routes>
    </Router>
  );
}

export default App;
