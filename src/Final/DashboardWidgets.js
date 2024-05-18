// // DashboardWidgets.js
// import React from 'react';

// const NumericalWidget = ({ label, value }) => {
//   return (
//     <div className="numerical-widget">
//       <h3>{label}</h3>
//       <p>{value}</p>
//     </div>
//   );
// };

// const ValveStatusWidget = ({ status }) => {
//   return (
//     <div className="valve-status-widget">
//       <h3>Valve Status</h3>
//       <p>{status ? 'On' : 'Off'}</p>
//     </div>
//   );
// };

// export { NumericalWidget, ValveStatusWidget };





// DashboardWidgets.js

import React from 'react';

const CircularWidget = ({ label, value }) => {
  // Calculate percentage
  const percentage = parseFloat(value);
  // Calculate arc length
  const arcLength = (percentage * 251.3274) / 100; // Circumference of radius 40

  return (
    <div className="circular-widget">
      <h3>{label}</h3>
      <svg viewBox="0 0 100 100" className="circle">
        {/* Background arc */}
       
        <path
          className="arc-background"
          d="M50 10
          a 40 40 0 0 1 0 80
          a 40 40 0 0 1 0 -80"
        ></path>
        {/* Filled arc */}
        
        <path
          className="arc"
          d={`M 50 10
          a 40 40 0 ${percentage > 50 ? 1 : 0} 1 ${ 50 + Math.cos((arcLength * Math.PI) / 180) * 40 } ${
            50+ Math.sin((arcLength * Math.PI) / 180) * 40 
          }`}
        ></path>
        
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
          {value}%
        </text>
      </svg>
    </div>
  );
};

export { CircularWidget };
