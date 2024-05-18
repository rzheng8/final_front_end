import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function LineChart2() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://final-1-ten.vercel.app/api/v1/table2');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();

        const labels = responseData.data.map(item => new Date(item.timestamp).toLocaleDateString()).reverse();
        const humidityData = responseData.data.map(item => parseFloat(item.humidity)).reverse();
        const temperatureData = responseData.data.map(item => parseFloat(item.temperature)).reverse();
        const moistureData = responseData.data.map(item => parseFloat(item.moisture)).reverse();

        setChartData({
          labels,
          datasets: [
            {
              label: 'Humidity',
              data: humidityData,
              backgroundColor: 'transparent',
              borderColor: 'blue',
              pointBorderColor: 'blue',
              pointBorderWidth: 4,
              tension: 0.2
            },
            {
              label: 'Temperature',
              data: temperatureData,
              backgroundColor: 'transparent',
              borderColor: 'green',
              pointBorderColor: 'green',
              pointBorderWidth: 4,
              tension: 0.2
            },
            {
              label: 'Moisture',
              data: moistureData,
              backgroundColor: 'transparent',
              borderColor: 'red',
              pointBorderColor: 'red',
              pointBorderWidth: 4,
              tension: 0.2
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  const options = {
    plugins: {
      legend: {
        display: true
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';

            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        min: 0, // Adjust this based on your expected data range
        max: 100, // Adjust this based on your expected data range
        ticks: {
          stepSize: 10
        }
      }
    },
    maintainAspectRatio: false,
    animation: {
      duration: 1000, // Adjust the duration for smooth updates
      easing: 'linear' // Use linear easing for smooth updates
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
      <div style={{ width: '800px', height: '370px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', borderRadius: '8px' }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}

export default LineChart2;
