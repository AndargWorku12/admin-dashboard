// src/App.tsx
import React, { useEffect, useRef } from 'react';
import Chart, { registerables } from 'chart.js';

interface CardProps {
  title: string;
  value: number;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-3xl font-semibold">{value}</p>
    </div>
  );
};

interface ChartProps {
  chartType: string;
  bgColor?: string;
}

const ChartComponent: React.FC<ChartProps> = ({ chartType, bgColor = 'gray-200' }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        Chart.register(...registerables);
        new Chart(ctx, {
          type: chartType as Chart.ChartType,
          data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
              label: 'Sample Data',
              data: [10, 25, 15, 30, 20],
              backgroundColor: chartType === 'bar' ? '#37305A' : '#F26A8D',
            }],
          },
        });
      }
    }
  }, [chartType]);

  return (
    <div className={`bg-${bgColor} p-4 rounded-md shadow-md mb-4`}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

const Analytics: React.FC = () => {
  const totalProducts = 100;
  const totalSales = 50000;
  const totalOrders = 200;
  const totalRevenue = 150000;

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Total Products" value={totalProducts} />
        <Card title="Total Sales" value={totalSales} />
        <Card title="Total Orders" value={totalOrders} />
        <Card title="Total Revenue" value={totalRevenue} />
      </div>
      <ChartComponent chartType="bar" bgColor="gray-300" />
    </div>
  );
};

export default Analytics;




// // src/App.tsx
// import React, { useEffect, useRef } from 'react';
// import { Chart as ChartJS, registerables } from 'chart.js/auto';

// interface CardProps {
//   title: string;
//   value: number;
// }

// const Card: React.FC<CardProps> = ({ title, value }) => {
//   return (
//     <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-4">
//       <h2 className="text-lg font-bold mb-2">{title}</h2>
//       <p className="text-3xl font-semibold">{value}</p>
//     </div>
//   );
// };

// interface ChartProps {
//   chartType: string;
//   bgColor?: string;
// }

// const ChartComponent: React.FC<ChartProps> = ({ chartType, bgColor = 'gray-200' }) => {
//   const chartRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext('2d');

//       if (ctx) {
//         ChartJS.register(...registerables);
//         new ChartJS(ctx, {
//           type: chartType as ChartJS.ChartType,
//           data: {
//             labels: ['January', 'February', 'March', 'April', 'May'],
//             datasets: [{
//               label: 'Sample Data',
//               data: [10, 25, 15, 30, 20],
//               backgroundColor: chartType === 'bar' ? '#37305A' : '#F26A8D',
//             }],
//           },
//         });
//       }
//     }
//   }, [chartType]);

//   return (
//     <div className={`bg-${bgColor} p-4 rounded-md shadow-md mb-4`}>
//       <canvas ref={chartRef}></canvas>
//     </div>
//   );
// };

// const Analytics: React.FC = () => {
//   const totalProducts = 100;
//   const totalSales = 50000;
//   const totalOrders = 200;
//   const totalRevenue = 150000;

//   return (
//     <div className="container mx-auto mt-8 p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <Card title="Total Products" value={totalProducts} />
//         <Card title="Total Sales" value={totalSales} />
//         <Card title="Total Orders" value={totalOrders} />
//         <Card title="Total Revenue" value={totalRevenue} />

//         <ChartComponent chartType="bar" />
//         <ChartComponent chartType="line" />
//         <ChartComponent chartType="bar" />
//         <ChartComponent chartType="bar" bgColor="37305A" />
//       </div>
//     </div>
//   );
// };

// export default Analytics;






// // Install dependencies:
// // npm install react-chartjs-2 chart.js

// import React from 'react';
// import { Bar, Line } from 'react-chartjs-2';

// const AnalyticsPage: React.FC = () => {
//   // Sample data
//   const customerReviewData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     datasets: [
//       {
//         label: 'Customer Reviews',
//         data: [5, 7, 10, 8, 12, 15],
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 2,
//         fill: false,
//       },
//     ],
//   };

//   const ordersData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     datasets: [
//       {
//         label: 'Orders',
//         data: [20, 25, 18, 30, 22, 28],
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 2,
//       },
//     ],
//   };

//   const productsData = {
//     labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
//     datasets: [
//       {
//         label: 'Products',
//         data: [50, 75, 60, 45, 80],
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 2,
//       },
//     ],
//   };

//   return (
//     <>
//     <h2 className='text-white font-bold text-2xl'>Analytics page</h2>
//     <div className="container mx-auto my-8 ">
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
//         {/* Customer Reviews Chart */}
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
//           <Line data={customerReviewData} />
//         </div>

//         {/* Orders Chart */}
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <h2 className="text-xl font-bold mb-4">Orders</h2>
//           <Bar data={ordersData} />
//         </div>

//         {/* Products Chart */}
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <h2 className="text-xl font-bold mb-4">Products</h2>
//           <Bar data={productsData} />
//         </div>

//         {/* Total Metrics Cards */}
//         <div className='col-span-3 md:col-span-2 lg:col-span-1 flex justify-between gap-10'>

        
//         <div className="col-span-3 md:col-span-2 lg:col-span-1 flex justify-between gap-8 w-48">
//           <div className="bg-white p-4 rounded-lg shadow-lg flex-1 mr-4">
//             <h2 className="text-xl font-bold mb-4">Total Reviews</h2>
//             <p className="text-4xl font-bold">135</p>
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-lg flex-1 mr-4">
//             <h2 className="text-xl font-bold mb-4">Total Products</h2>
//             <p className="text-4xl font-bold">310</p>
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-lg flex-1">
//             <h2 className="text-xl font-bold mb-4">Total Orders</h2>
//             <p className="text-4xl font-bold">98</p>
//           </div>
//         </div>

//         <div className="col-span-3 md:col-span-2 lg:col-span-1 flex justify-between gap-8 w-48">
//           <div className="bg-white p-4 rounded-lg shadow-lg flex-1 mr-4">
//             <h2 className="text-xl font-bold mb-4">Total Sales</h2>
//             <p className="text-4xl font-bold">$12,345</p>
//           </div>
// <div className='gap-8 col-span-3 md:col-span-2 lg:col-span-1 flex justify-between w-48'>
//           <div className="bg-white p-4 rounded-lg shadow-lg flex-1 mr-4">
//             <h2 className="text-xl font-bold mb-4">Total Revenue</h2>
//             <p className="text-4xl font-bold">$9,876</p>
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-lg flex-1">
//             <h2 className="text-xl font-bold mb-4">Total Categories</h2>
//             <p className="text-4xl font-bold">15</p>
//           </div>
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default AnalyticsPage;
