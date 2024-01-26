import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// import Chart from 'chart.js/auto';
// Assuming saleData and revenueData are custom types
type SaleData = {
  date: string;
  amount: number;
};

type RevenueData = {
  month: string;
  revenue: number;
};

interface DashboardProps {
  saleData: SaleData[];
  revenueData: RevenueData[];
}

const Dashboard: React.FC<DashboardProps> = ({ saleData, revenueData }) => {
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: saleData.map((data) => data.amount),
        backgroundColor: 'rgba(34,192,192,0.2)',
        

        
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        data: revenueData.map((data) => data.revenue),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        //some thing
        
        
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard</h2>
<div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 flex justify-between">
      <div className=''>
        <h3>Sales Data</h3>
        <Bar data={barChartData} />
      </div>

      <div className=''>
        <h3>Revenue Data</h3>
        <Line data={lineChartData} />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;











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
