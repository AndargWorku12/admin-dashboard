import React from 'react';


interface saleData {
  date:string;
  amount:number;
}
interface AnalyticsProps {
  saleData: saleData[];
}

const Analytics: React.FC<AnalyticsProps> = ({ saleData }) => {
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
        {saleData.map((value, index) => (
          <div key={index} style={{ ...barStyle, height: `${value}px` }}></div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
