import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 

import { useNavigate } from 'react-router-dom';


function Settings() { 

  const navigate = useNavigate();

  const handleSetNameClick = () => {
    // Navigate to '/setName' when the button is clicked
    navigate('/setName');
  };

  const handleSetEmailClick = () => {
    // Navigate to '/setName' when the button is clicked
    navigate('/setEmail');
  };

  const handleChangePasswordClick = () => {
    // Navigate to '/setName' when the button is clicked
    navigate('/changePassword');
  };


  return ( 
    <div style={{ 
      display: 'flex',
      justifyContent: 'center', // Horizontally center the content
      alignItems: 'center', // Vertically center the content
      minHeight: '100vh' // Set minimum height to occupy the entire viewport
    }}> 
      <div style={{ 
        width: 500, 
        padding: 40,
        backgroundColor: "white",
        borderRadius: '30px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
      }}> 
        <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>Settings</h4>
        <Form> 
        <Button variant="primary" type="submit" style={{ width: '100%', background: 'linear-gradient(to right, #1A5276, #A9CCE3)', border: 'none', fontSize: '1.2rem', marginTop: '20px' }}
          onClick={handleSetNameClick} // Call handleSetNameClick when the button is clicked
        > 
            Set Name
        </Button> 
          <Button variant="primary" type="submit" style={{ width: '100%', background: 'linear-gradient(to right, #1A5276, #A9CCE3)', border: 'none', fontSize: '1.2rem', marginTop: '20px' }}
          onClick={handleSetEmailClick}
          > 
            Set Email
          </Button> 
          <Button variant="primary" type="submit" style={{ width: '100%', background: 'linear-gradient(to right, #1A5276, #A9CCE3)', border: 'none', fontSize: '1.2rem', marginTop: '20px' }}
          onClick = {handleChangePasswordClick}
          > 
            Change Password
          </Button> 
          {/* <Button variant="primary" type="submit" style={{ width: '100%', background: 'linear-gradient(to right, #1A5276, #A9CCE3)', border: 'none', fontSize: '1.2rem', marginTop: '20px' }}> 
            Apply
          </Button>  */}
        </Form> 
      </div> 
    </div> 
  ); 
}



export default Settings;
