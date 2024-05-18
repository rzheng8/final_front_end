import React, { useEffect, useState } from 'react';
import { CRow, CCol, CWidgetStatsC } from '@coreui/react';

function Widgets2() {
  const [data, setData] = useState({
    temperature: 'N/A',
    humidity: 'N/A',
    moisture: 'N/A',
    valveState: 'N/A'
  });

  const [progress, setProgress] = useState({
    temperature: 0,
    humidity: 0,
    moisture: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://final-1-ten.vercel.app/api/v1/table2');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        const latestData = responseData.data[0]; // Assuming the latest data is the first item

        setData({
          temperature: latestData.temperature,
          humidity: latestData.humidity,
          moisture: latestData.moisture,
          valveState: latestData.valve_state
        });

        setProgress({
          temperature: (latestData.temperature / 100) * 100,
          humidity: (latestData.humidity / 100) * 100,
          moisture: (latestData.moisture / 100) * 100
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <CRow>
      <CCol xs={3}>
        <CWidgetStatsC
          className="mb-3"
          progress={{ color: 'success', value: progress.temperature }}
          text="Widget helper text"
          title="Temperature"
          value={`${data.temperature}°F`}
          style={{ fontSize: '0.8rem', padding: '10px', borderRadius: '20px', marginTop: '10px', marginLeft: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' }}
        />
      </CCol>
      <CCol xs={3}>
        <CWidgetStatsC
          className="mb-3"
          progress={{ color: 'primary', value: progress.humidity }}
          text="Widget helper text"
          title="Humidity"
          value={`${data.humidity}%`}
          style={{ fontSize: '0.8rem', padding: '10px', borderRadius: '20px', marginTop: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' }}
        />
      </CCol>
      <CCol xs={3}>
        <CWidgetStatsC
          className="mb-3"
          progress={{ color: 'danger', value: progress.moisture }}
          text="Widget helper text"
          title="Moisture"
          value={`${data.moisture}%`}
          style={{ fontSize: '0.8rem', padding: '10px', borderRadius: '20px', marginTop: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' }}
        />
      </CCol>
      <CCol xs={3}>
        <CWidgetStatsC
          className="mb-3"
          progress={{ color: 'secondary', value: data.valveState === 'open' ? 100 : 0 }}
          text="Widget helper text"
          title="Valve State"
          value={data.valveState.toUpperCase()}
          style={{ fontSize: '0.8rem', padding: '10px', borderRadius: '20px', marginTop: '10px', marginRight: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' }}
        />
      </CCol>
    </CRow>
  );
}

export default Widgets2;