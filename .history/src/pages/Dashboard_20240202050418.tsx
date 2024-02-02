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
import Analytics from './Analytics'

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
      
      <Analytics/>
<div className="flex h-screen">
      <div className="flex-1 max-w-screen-md p-4">
        <h3 className="text-2xl">Sales Data</h3>
        <div className="border p-4 bg-white rounded shadow">
        <Bar data={barChartData} />
      </div>
      </div>

      <div className="flex-1 max-w-screen-md p-4">
        <h3 className="text-2xl">Revenue Data</h3>
        <div className="border p-4 bg-white rounded shadow" >
        <Line data={lineChartData} />
        </div>
      </div>
      </div>
      <div>
     
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
