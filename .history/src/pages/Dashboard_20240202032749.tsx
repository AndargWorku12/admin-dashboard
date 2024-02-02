// Install dependencies:
// npm install react-chartjs-2 chart.js @types/react-chartjs-2 @types/chart.js

import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

const Dashboard: React.FC = () => {
  // Sample data
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [120, 150, 180, 130, 200, 170],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const revenueData = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    datasets: [
      {
        data: [30, 20, 15, 25, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9966FF'],
      },
    ],
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-white font-bold text-2xl mb-4">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Sales Chart */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Sales</h2>
          <Bar data={salesData} />
        </div>

        {/* Revenue Chart */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Revenue</h2>
          <Pie data={revenueData} />
        </div>

        {/* Total Metrics Cards */}
        <div className="col-span-3 md:col-span-2 lg:col-span-1 flex flex-wrap justify-between gap-4">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">Total Sales</h2>
            <p className="text-4xl font-bold">$12,345</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">Total Revenue</h2>
            <p className="text-4xl font-bold">$9,876</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">Total Orders</h2>
            <p className="text-4xl font-bold">98</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">Total Products</h2>
            <p className="text-4xl font-bold">310</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">Total Reviews</h2>
            <p className="text-4xl font-bold">135</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">Total Categories</h2>
            <p className="text-4xl font-bold">15</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;







// import React from 'react';
// import { Bar, Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import AnalyticsPage from './Analytics';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );
// // import Chart from 'chart.js/auto';
// // Assuming saleData and revenueData are custom types
// type SaleData = {
//   date: string;
//   amount: number;
// };

// type RevenueData = {
//   month: string;
//   revenue: number;
// };

// interface DashboardProps {
//   saleData: SaleData[];
//   revenueData: RevenueData[];
// }

// const Dashboard: React.FC<DashboardProps> = ({ saleData, revenueData }) => {
//   const barChartData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Sales',
//         data: saleData.map((data) => data.amount),
//         backgroundColor: 'rgba(34,192,192,0.2)',
        

        
//       },
//     ],
//   };

//   const lineChartData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Revenue',
//         data: revenueData.map((data) => data.revenue),
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 2,
//         //some thing
        
        
//       },
//     ],
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
// <div className="flex h-screen">
//       <div className="flex-1 max-w-screen-md p-4">
//         <h3 className="text-2xl">Sales Data</h3>
//         <div className="border p-4 bg-white rounded shadow">
//         <Bar data={barChartData} />
//       </div>
//       </div>

//       <div className="flex-1 max-w-screen-md p-4">
//         <h3 className="text-2xl">Revenue Data</h3>
//         <div className="border p-4 bg-white rounded shadow" >
//         <Line data={lineChartData} />
//         </div>
//       </div>
//       </div>
//       <div>
//       <AnalyticsPage/>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;











// import React from 'react';
// import { Bar, Line } from 'react-chartjs-2';

// interface DashboardProps {
//   saleData: saleData[];
//   revenueData: revenueData[];
// }

// const Dashboard: React.FC<DashboardProps> = ({ saleData, revenueData }) => {
//   const barChartData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Sales',
//         data: saleData,
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const lineChartData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Revenue',
//         data: revenueData,
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 2,
//       },
//     ],
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>

//       <div>
//         <h3>Sales Data</h3>
//         <Bar data={barChartData} />
//       </div>

//       <div>
//         <h3>Revenue Data</h3>
//         <Line data={lineChartData} />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
