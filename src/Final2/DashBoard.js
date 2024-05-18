
import React, { useState } from 'react';
import Widgets1 from './Widgets1';
import Widgets2 from './Widgets2';
import LineChart1 from './LineChart1';
import LineChart2 from './LineChart2';

function DeviceOverview({ selectedDevice }) {
  return (
    <div>
      <h1 style={{ margin: '20px 0', marginLeft: '10px', fontSize: 31, fontFamily: 'Arial, sans-serif', 
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', color: '#2E4053', 
        backgroundImage: 'linear-gradient(to right, rgba(97, 97, 97), rgba(255, 255, 255, 1))', backgroundClip: 'text' }}>
        {selectedDevice ? `${selectedDevice.name} Overview` : 'Device Overview'}
      </h1>
    </div>
  );
}

function Dashboard() {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [devices, setDevices] = useState([
    { id: 'device1', name: 'Device 1' },
    { id: 'device2', name: 'Device 2' },
    // Add more dummy devices as needed
  ]);

  const handleDeviceSelect = (deviceId) => {
    const selected = devices.find(device => device.id === deviceId);
    setSelectedDevice(selected);
  };

  const handleAddDevice = (newDevice) => {
    setDevices(prevDevices => [...prevDevices, newDevice]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0f0f0', position: 'relative' }}>
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <div style={{ flex: 1, overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
          <DeviceOverview selectedDevice={selectedDevice} />
          <select onChange={(e) => handleDeviceSelect(e.target.value)} 
            style={{ 
            marginLeft: '20px', marginBottom: '20px', backgroundColor: '#34495E', borderRadius: '10px', height: '40px', 
            width: '134px', 
            textAlign: 'center', 
            color: "#fff", 
            boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)' 
            }}>
            <option value="">Select Device</option>
            {devices.map(device => (
              <option key={device.id} value={device.id}>
                {device.name}
              </option>
            ))}
          </select>
          {selectedDevice && selectedDevice.id === 'device1' && (
            <>
              <Widgets1 />
              <LineChart1 />
            </>
          )}
          {selectedDevice && selectedDevice.id === 'device2' && (
            <>
              <Widgets2 />
              <LineChart2 />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
