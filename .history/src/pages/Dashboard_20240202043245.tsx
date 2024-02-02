



// Dashboard.tsx
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

interface SaleData {
  // Define your SaleData type structure here
  value: number;
  label: string;
}

interface RevenueData {
  // Define your RevenueData type structure here
  value: number;
  label: string;
}

interface DashboardProps {
  saleData: SaleData[];
  revenueData: RevenueData[];
}

const Dashboard: React.FC<DashboardProps> = ({ saleData, revenueData }) => {
  const salesChartData = {
    labels: saleData.map(item => item.label),
    datasets: [
      {
        label: 'Sales Data',
        data: saleData.map(item => item.value),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const revenueChartData = {
    labels: revenueData.map(item => item.label),
    datasets: [
      {
        data: revenueData.map(item => item.value),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Sales Chart Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Sales Chart</h2>
        <Bar data={salesChartData} />
      </div>

      {/* Revenue Chart Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Revenue Chart</h2>
        <Pie data={revenueChartData} />
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
