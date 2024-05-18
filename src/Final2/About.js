import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa'; // Import icons from react-icons

// Import your image
import streamLineImage from './Streamline.png'; // Adjust the path to your image file

function About() {
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center', // Horizontally center the content
      alignItems: 'center', // Vertically center the content
      minHeight: '100vh' // Set minimum height to occupy the entire viewport,
    }}> 
      <div style={{ 
        position: 'relative', // Set position to relative
        width: 500, 
        padding: 40,
        backgroundColor: "white",
        borderRadius: '30px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
      }}> 
        <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>About</h4>
        <div>
          <img src={streamLineImage} alt="StreamLine Smart Sprinkler System" style={{ width: '50%', marginBottom: '20px', marginLeft: '100px', backgroundColor: '#FDFEFE', borderRadius: '40px'}} />
           <div>
           StreamLine is a smart sprinkler system that utilizes LoRa communication technology 
          to enable seamless interaction between an ESP32 microcontroller and a Raspberry Pi. 
          This system efficiently collects sensor data and controls the sprinkler valve based on the gathered information.
           </div>
          <div>
          This platform provides a comprehensive device overview, offering intuitive visualization of data streams originating from StreamLine devices.
          </div>

        </div>
      </div> 
    </div> 
  ); 
}

export default About;