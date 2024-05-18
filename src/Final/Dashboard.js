// import React from 'react';
// import Charts from './charts'; // Import the Charts component
// import { NumericalWidget, ValveStatusWidget } from './DashboardWidgets'; // Import the widgets

// function Dashboard() {
//   // Dummy data for temperature, humidity, and moisture
//   const temperatureData = [25, 26, 27, 28, 29];
//   const humidityData = [50, 55, 60, 65, 70];
//   const moistureData = [50, 55, 60, 65, 70];
//   const labels = ['1', '2', '3', '4', '5']; // Dummy labels (timestamps or intervals)

//   const deviceControlChanged = () => {
//     // Device control logic...
//   };

//   return (
//     <div className="container-fluid p-3">
//       <h2 className="dashboard-title mb-3">IoT Device Dashboard</h2>

//       <div className="device-control mb-3">
//         <label htmlFor="deviceControl">Device Control:</label>
//         <select className="form-select" id="deviceControl" onChange={deviceControlChanged}>
//           <option value="">Select Action</option>
//           <option value="">Home</option>
//           <option value="add">Add Device</option>
//           <option value="delete">Delete Device</option>
//           <option value="delete">Settings</option>
//           <option value="delete">About</option> 
//         </select>
//       </div>

//       <div className="row chart-container">
//         <Charts temperatureData={temperatureData} humidityData={humidityData} moistureData={moistureData} labels={labels} />
//       </div>


//       <div className="row mt-3 widget-row">
//         <div className="col-md-4">
//           <NumericalWidget label="Temperature" value="25°C" />
//         </div>
//         <div className="col-md-4">
//           <NumericalWidget label="Humidity" value="50%" />
//         </div>
//         <div className="col-md-4">
//           <NumericalWidget label="Moisture" value="75%" />
//         </div>
//       </div>

//       <div className="row mt-3 widget-row">
//         <div className="col-md-4">
//             <ValveStatusWidget status={true} />
//         </div> 
//       </div>

//       <div className="row mt-3 device-status">
//         <div className="col-12">
//           <h4 className = "status-title"> Device Status</h4>
//           <p id="deviceStatus" className="status-message">Connecting...</p>
//         </div>
//       </div> 

//     </div>
//   );
// }

// export default Dashboard;


// Dashboard.js




import React from 'react';
import Charts from './charts'; // Import the Charts component
import SVGauge from './SVGauge'; // Import the SVGauge component

function Dashboard() {
  // Dummy data for temperature, humidity, and moisture
  const temperatureData = [25, 26, 27, 28, 29];
  const humidityData = [50, 55, 60, 65, 70];
  const moistureData = [50, 55, 60, 65, 70];
  const labels = ['1', '2', '3', '4', '5']; // Dummy labels (timestamps or intervals)

  const deviceControlChanged = () => {
    // Device control logic...
  };

  return (
    <div className="container-fluid p-3">
      <h2 className="dashboard-title mb-3">IoT Device Dashboard</h2>

      <div className="device-control mb-3">
        <label htmlFor="deviceControl">Menu:</label>
        <select className="form-select" id="deviceControl" onChange={deviceControlChanged}>
          <option value="">Select Action</option>
          <option value="">Home</option>
          <option value="add">Add Device</option>
          <option value="delete">Delete Device</option>
          <option value="setting">Settings</option>
          <option value="about">About</option> 
        </select>
      </div>

      <div className="row chart-container">
        <Charts temperatureData={temperatureData} humidityData={humidityData} moistureData={moistureData} labels={labels} />
      </div>

      <div className="row mt-3 widget-row">
        <div className="col-md-4">
          <SVGauge value={temperatureData[temperatureData.length - 1]} />
          <h3>Temperature</h3>
        </div>
        <div className="col-md-4">
          <SVGauge value={humidityData[humidityData.length - 1]} />
          <h3>Humidity</h3>
        </div>
        <div className="col-md-4">
          <SVGauge value={moistureData[moistureData.length - 1]} />
          <h3>Moisture</h3>
        </div>
      </div>

      <div className="row mt-3 device-status">
        <div className="col-12">
          <h4 className="status-title"> Device Status</h4>
          <p id="deviceStatus" className="status-message">Connecting...</p>
        </div>
      </div> 
    </div>
  );
}

export default Dashboard;

