
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt } from 'react-icons/fa'; // Import icons from react-icons

function LogoutDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const handleLogout = () => {
    console.log("User logged out");
    // Navigate to the login page
    navigate('/');
  };

  // Mock user data
  const userData = {
    name: "Amna Hayat",
    email: "amna@gmail.com"
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{ position: 'absolute', top: '20px', right: '10px', marginRight: "10px" }}>
      <DropdownToggle caret tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen} 
        style={{ 
          backgroundColor: '#AEB6BF', 
          borderRadius: '30%', padding: '10px', marginLeft: '-50px', 
          boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)' 
          }}
      >
        <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
          <FaUser style={{ fontSize: '32px', color: '#000' }} />
        </button>
      </DropdownToggle>
      <DropdownMenu right>
        <div style={{ padding: '10px' }}> {/* Container for user info */}
          <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>{userData.name}</p>
          <p style={{ marginBottom: '10px' }}>{userData.email}</p>
        </div>
        <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default LogoutDropdown;