
// charts.js
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const Charts = ({ temperatureData, humidityData, moistureData, labels }) => {
  const [tempChart, setTempChart] = useState(null);
  const [humidityChart, setHumidityChart] = useState(null);
  const [moistureChart, setMoistureChart] = useState(null);

  useEffect(() => {
    if (temperatureData.length > 0 && humidityData.length > 0 && moistureData.length > 0 && labels.length > 0) {
      const tempCtx = document.getElementById('tempChart');
      const humidityCtx = document.getElementById('humidityChart');
      const moistureCtx = document.getElementById('moistureChart');

      if (tempCtx && humidityCtx && moistureCtx) {


        const newTempChart = new Chart(tempCtx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Temperature (°C)',
              data: temperatureData,
              fill: false,
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              tension: 0.1
            }]
          }
        });


        const newHumidityChart = new Chart(humidityCtx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Humidity (%)',
              data: humidityData,
              fill: false,
              borderColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              tension: 0.1
            }]
          }
        });


        const newMoistureChart = new Chart(moistureCtx, {
            type: 'line',
            data: {
              labels: labels,
              datasets: [{
                label: 'Moisture (%)',
                data: humidityData,
                fill: false,
                borderColor: 'rgb(128, 0, 128)',
                pointBackgroundColor: 'rgb(128, 0, 128)',
                tension: 0.1
              }]
            }
          });
        


        setTempChart(newTempChart);
        setHumidityChart(newHumidityChart);
        setMoistureChart(newMoistureChart);

      }
    }
  }, [temperatureData, humidityData, moistureData, labels]);

  return (
    <>
      <div className="col-md-6">
        <h4>Temperature</h4>
        <canvas id="tempChart" style={{ width: '100%', height: '220px' }} ></canvas>
      </div>
      <div className="col-md-6">
        <h4>Humidity</h4>
        <canvas id="humidityChart" style={{ width: '100%', height: '220px' }}></canvas>
      </div>
      <div className="col-md-6">
        <h4>Moisture</h4>
        <canvas id="moistureChart" style={{ width: '100%', height: '220px' }}></canvas>
      </div>
    </>
  );

};

export default Charts;


 