import React from 'react';
import { Line } from 'react-chartjs-2';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const RocketTest = () => {
  // Example data for the line chart
  const chartData = {
    labels: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18','19', '20'],
    display: true,
    datasets: [
      {
        label: 'Thrust (N)',
        data: [0, 30, 30, 30, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 9, 8, 7, 2, 1, 0, 0, 0, 0],
        borderColor: '#9999',
        backgroundColor: '#9999)',
        fill: true,
      },
    ],
  };

  return (
    <div style={{ backgroundColor: 'black', height: '80vh', width: '80vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="jumbotron-title" style={{ color: 'white', fontSize: '24px', margintop: '0px', marginBottom: '20px' }}>Thrust Test</h2>
      <div style={{ width: '100%', height: '50%', margin: '0', flexGrow: .5 }}>
        <Line data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
      <div>
    <Link to="/groundTestData" style={{ textDecoration: 'none' }}>
      <button style={{ outline: '2px solid white', backgroundColor: 'black', color: 'white', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', marginTop: '40px', marginBottom: '20px' }}>View Test Summary</button>
    </Link>
      </div>
    </div>
  );
};

export default RocketTest;
