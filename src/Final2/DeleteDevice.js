// import React from 'react'; 
// import 'bootstrap/dist/css/bootstrap.css'; 
// import Form from 'react-bootstrap/Form'; 
// import Button from 'react-bootstrap/Button'; 

// function DeleteDevice() { 
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
//         <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>Delete Device</h4>
//         <Form> 
//           <Form.Group className="mb-3"> 
//             <Form.Label className="mb-0">Device:</Form.Label> 
//             <Form.Select>
//               <option>Select Device</option>
//               <option value="metric1">Device 1</option>
//               <option value="metric2">Device 2</option>
//               {/* Add more options as needed */}
//             </Form.Select>
//           </Form.Group> 
//           <Button variant="primary" type="submit" style={{ width: '100%', background: 'linear-gradient(to right, #1A5276, #A9CCE3)', border: 'none', fontSize: '1.2rem', marginTop: '20px' }}> 
//             Delete
//           </Button> 
//         </Form> 
//       </div> 
//     </div> 
//   ); 
// }

// export default DeleteDevice;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function DeleteDevice() {
  const [showMessage, setShowMessage] = useState(false);

  const handleDelete = () => {
    // Logic to delete the device (not implemented in this example)
    // Assuming device was deleted successfully
    setShowMessage(true);

    // Hide the message after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      setShowMessage(false);
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
        <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>Delete Device</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Device:</Form.Label>
            <Form.Select>
              <option>Select Device</option>
              <option value="device1">Device 1</option>
              <option value="device2">Device 2</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" onClick={handleDelete} style={{ width: '100%', background: 'linear-gradient(to right, #1A5276, #A9CCE3)', border: 'none', fontSize: '1.2rem', marginTop: '20px' }}>
            Delete
          </Button>
          {showMessage && (
            <div style={{ marginTop: '20px', textAlign: 'center', color: 'green' }}>
              Device was deleted successfully!
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default DeleteDevice;