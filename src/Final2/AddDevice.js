// import React from 'react'; 
// import 'bootstrap/dist/css/bootstrap.css'; 
// import Form from 'react-bootstrap/Form'; 
// import Button from 'react-bootstrap/Button'; 

// function AddDevice() { 
//   return ( 
//     <div style={{ 
//       display: 'flex',
//       justifyContent: 'center', // Horizontally center the content
//       alignItems: 'center', // Vertically center the content
//       minHeight: '100vh' // Set minimum height to occupy the entire viewport
//     }}> 
//       <div style={{ 
//         width: 500, 
//         padding: 40,
//         backgroundColor: "white",
//         borderRadius: '30px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
//       }}> 
//         <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>Add Device</h4>
//         <Form> 
//           <Form.Group className="mb-3"> 
//             <Form.Label className="mb-0">Device Name:</Form.Label> 
//             <Form.Control type="text" placeholder="Enter Device Name" /> 
//           </Form.Group> 
//           <Form.Group className="mb-3"> 
//             <Form.Label className="mb-0">Device Connection String:</Form.Label> 
//             <Form.Control type="email" placeholder="Enter Device Connection String" /> 
//           </Form.Group> 
//           <Button variant="primary" type="submit" style={{ width: '100%', background: 'linear-gradient(to right, #1A5276, #A9CCE3)', border: 'none', fontSize: '1.2rem', marginTop: '20px' }}> 
//             Add
//           </Button> 
//         </Form> 
//       </div> 
//     </div> 
//   ); 
// }

// export default AddDevice;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddDevice() {
  const [deviceName, setDeviceName] = useState('');
  const [connectionString, setConnectionString] = useState('');
  const [deviceAdded, setDeviceAdded] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!deviceName.trim() || !connectionString.trim()) { //true if either is an empty string. trim removes spaces
      setError('Please enter both device name and connection string.');
      return;
    }
    // Logic to add the device (not implemented in this example)
    // Assuming device was added successfully
    setDeviceAdded(true);
    setDeviceName('');
    setConnectionString('');
    setError('');
    // Hide success message after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      setDeviceAdded(false);
    }, 3000);
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
        <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>Add Device</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Device Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Device Name"
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Device Connection String:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Device Connection String"
              value={connectionString}
              onChange={(e) => setConnectionString(e.target.value)}
            />
          </Form.Group>
          {error && <div style={{ marginTop: '10px', textAlign: 'center', color: 'red' }}>{error}</div>}
          <Button variant="primary" type="submit" style={{ width: '100%', background: 'linear-gradient(to right, #1A5276, #A9CCE3)', border: 'none', fontSize: '1.2rem', marginTop: '20px' }}>
            Add
          </Button>
          {deviceAdded && (
            <div style={{ marginTop: '20px', textAlign: 'center', color: 'green' }}>
              Device was added successfully!
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default AddDevice;