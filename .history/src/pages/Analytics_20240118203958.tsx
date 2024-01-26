import React from 'react';

interface AnalyticsProps {
  salesData: number[];
}

const AnalyticsPage: React.FC<AnalyticsProps> = ({ salesData }) => {
  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '20px',
  };

  const barChartContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '300px',
    marginTop: '20px',
  };

  const barStyle: React.CSSProperties = {
    backgroundColor: 'blue',
    width: '40px',
    margin: '0 5px',
  };

  return (
    <div style={containerStyle}>
      <h2>Analytics Page</h2>
      <div style={barChartContainerStyle}>
        {salesData.map((value, index) => (
          <div key={index} style={{ ...barStyle, height: `${value}px` }}></div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsPage;
