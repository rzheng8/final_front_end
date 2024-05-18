import React from 'react';
import SidePanel from './SidePanel';
import LogoutDropdown from './LogOutDropdown';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex',  margin: 0, padding: 0, backgroundColor: '#f0f0f0'  }}>
      <SidePanel />
      <div style={{ flex: 1, margin: 0, padding: 0 }}>
        {children}
        <LogoutDropdown />
      </div>
    </div>
  );
};

export default Layout;
