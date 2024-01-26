import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

interface DashboardProps {
  saleData: saleData[];
  revenueData: revenueData[];
}

const Dashboard: React.FC<DashboardProps> = ({ saleData, revenueData }) => {
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: saleData,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        data: revenueData,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <div>
        <h3>Sales Data</h3>
        <Bar data={barChartData} />
      </div>

      <div>
        <h3>Revenue Data</h3>
        <Line data={lineChartData} />
      </div>
    </div>
  );
};

export default Dashboard;
