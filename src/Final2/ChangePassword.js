import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import { useNavigate } from 'react-router-dom';
import {FaAngleLeft} from 'react-icons/fa'; // Import icons from react-icons

function ChangePassword() {
    const navigate = useNavigate();
  
    const handleBackButtonClick = () => {
      // Navigate back to the settings page
      navigate('/settings');
    };
  
    return (
      <div style={{ 
        display: 'flex',
        justifyContent: 'center', // Horizontally center the content
        alignItems: 'center', // Vertically center the content
        minHeight: '100vh' // Set minimum height to occupy the entire viewport
      }}> 
        <div style={{ 
          position: 'relative', // Set position to relative
          width: 500, 
          padding: 40,
          backgroundColor: "white",
          borderRadius: '30px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
        }}> 
          {/* Back button */}
          <button 
            onClick={handleBackButtonClick} // Call handleBackButtonClick when the button is clicked
            style={{ 
              position: 'absolute', // Position the button absolutely
              top: '25px', 
              left: '10px', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
          >
            <FaAngleLeft />
          </button>
          <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>Change Password</h4>
          <Form> 
            <Form.Group className="mb-3"> 
              <Form.Label className="mb-0">Old Password:</Form.Label> 
              <Form.Control type="text" placeholder="Enter Old Password" /> 
            </Form.Group> 
            <Form.Group className="mb-3"> 
              <Form.Label className="mb-0">New Password:</Form.Label> 
              <Form.Control type="text" placeholder="Enter New Password" /> 
            </Form.Group> 
            <Form.Group className="mb-3"> 
              <Form.Label className="mb-0">Confirm Password:</Form.Label> 
              <Form.Control type="text" placeholder="Confirm Password" /> 
            </Form.Group> 
            <Button variant="primary" type="submit" style={{ width: '100%', background: 'linear-gradient(to right, #1A5276, #A9CCE3)', border: 'none', fontSize: '1.2rem', marginTop: '20px' }}> 
                Apply
            </Button> 
          </Form> 

        </div> 
      </div> 
    ); 
  }

export default ChangePassword;







