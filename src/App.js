import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Final2/LoginForm';
import Dashboard from './Final2/DashBoard';
import AddDevice from './Final2/AddDevice';
import DeleteDevice from './Final2/DeleteDevice';
import Settings from './Final2/Settings';
import About from './Final2/About';
import Layout from './Final2/Layout'; 
import SetName from './Final2/SetName'; 
import SetEmail from './Final2/SetEmail';
import ChangePassword from './Final2/ChangePassword';

function App() {
  return (

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard2" element={<Layout><Dashboard /></Layout>} />
        <Route path="/addDevice" element={<Layout><AddDevice /></Layout>} />
        <Route path="/deleteDevice" element={<Layout><DeleteDevice /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
        <Route path="/setName" element={<Layout><SetName /></Layout>} />
        <Route path="/setEmail" element={<Layout><SetEmail /></Layout>} />
        <Route path="/changePassword" element={<Layout><ChangePassword /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
      </Routes>

  );
}

export default App;