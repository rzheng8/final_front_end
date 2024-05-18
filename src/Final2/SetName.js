// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { FaAngleLeft } from 'react-icons/fa'; // Import icons from react-icons

// function SetName() {
//     const navigate = useNavigate();
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');

//     const handleBackButtonClick = () => {
//         // Navigate back to the settings page
//         navigate('/settings');
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('/api/info', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     first_name: firstName,
//                     last_name: lastName
//                 })
//             });
//             if (response.ok) {
//                 // Redirect to the settings page
//                 console.log("sent ok")
//             } else {
//                 console.error('Failed to add name to database');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div style={{
//             display: 'flex',
//             justifyContent: 'center', // Horizontally center the content
//             alignItems: 'center', // Vertically center the content
//             minHeight: '100vh' // Set minimum height to occupy the entire viewport
//         }}>
//             <div style={{
//                 position: 'relative', // Set position to relative
//                 width: 500,
//                 padding: 40,
//                 backgroundColor: "white",
//                 borderRadius: '30px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
//             }}>
//                 {/* Back button */}
//                 <button
//                     onClick={handleBackButtonClick} // Call handleBackButtonClick when the button is clicked
//                     style={{
//                         position: 'absolute', // Position the button absolutely
//                         top: '25px',
//                         left: '10px',
//                         background: 'none',
//                         border: 'none',
//                         cursor: 'pointer',
//                         fontSize: '1rem',
//                         fontWeight: 'bold'
//                     }}
//                 >
//                     <FaAngleLeft />
//                 </button>
//                 <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>Set Name</h4>
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group className="mb-3">
//                         <Form.Label className="mb-0">First Name:</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Enter First Name"
//                             value={firstName}
//                             onChange={(e) => setFirstName(e.target.value)}
//                         />
//                     </Form.Group>
//                     <Form.Group className="mb-3">
//                         <Form.Label className="mb-0">Last Name:</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Enter Last Name"
//                             value={lastName}
//                             onChange={(e) => setLastName(e.target.value)}
//                         />
//                     </Form.Group>
//                     <Button
//                         variant="primary"
//                         type="submit"
//                         style={{
//                             width: '100%',
//                             background: 'linear-gradient(to right, #1A5276, #A9CCE3)',
//                             border: 'none',
//                             fontSize: '1.2rem',
//                             marginTop: '20px'
//                         }}
//                     >
//                         Apply
//                     </Button>
//                 </Form>
//             </div>
//         </div>
//     );
// }

// export default SetName;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa'; // Import icons from react-icons

function SetName() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleBackButtonClick = () => {
    // Navigate back to the settings page
    navigate('/settings');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      setError('Please enter both first name and last name.');
      setSuccess(false);
      return;
    }
    // Logic to apply the name change (not implemented in this example)
    // Assuming the name change was applied successfully
    setSuccess(true);
    setError('');
    setFirstName('');
    setLastName('');
    // Hide success message after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      setSuccess(false);
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
        <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>Set Name</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">First Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Last Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          {error && <div style={{ marginTop: '10px', textAlign: 'center', color: 'red' }}>{error}</div>}  
          <Button variant="primary" type="submit" style={{ width: '100%', background: 'linear-gradient(to right, #1A5276, #A9CCE3)', border: 'none', fontSize: '1.2rem', marginTop: '20px' }}>
            Apply
          </Button>
          {success && <div style={{ marginTop: '10px', textAlign: 'center', color: 'green' }}>Name change applied successfully!</div>}
        </Form>
      </div>
    </div>
  );
}

export default SetName;
