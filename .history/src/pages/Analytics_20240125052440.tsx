import React from 'react';

interface AnalyticsProps {
  saleData: SaleData[];
}

type SaleData = {
  date: string;
  amount: number;
};

const Analytics: React.FC<AnalyticsProps> = ({ saleData }) => {
  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-3xl font-bold mb-4">Analytics Page</h2>
      <div className="flex justify-center items-end h-300 mt-6 gap-12 border-3 border-red-500">
        {saleData.map((data, index) => (
          <Line key={index} amount={data.amount} />
        ))}
      </div>
    </div>
  );
};

interface LineProps {
  amount: number;
}

const Line: React.FC<LineProps> = ({ amount }) => {
  return (
    <div className="bg-black w-4 m-0.5 border-3 border-blue-500" style={{ height: `${amount}px` }}></div>
  );
};

export default Analytics;







// import React from 'react';


// // interface saleData {
// //   date:string;
// //   amount:number;
// // }
// interface AnalyticsProps {
//   saleData: saleData[];
// }

// type saleData = {
//   date: string;
//   amount: number;
// };

// const Analytics: React.FC<AnalyticsProps> = ({ saleData }) => {
//   const containerStyle: React.CSSProperties = {
//     textAlign: 'center',
//     padding: '20px',
//   };

//   const barChartContainerStyle: React.CSSProperties = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//     height: '300px',
//     marginTop: '20px',
//   };

//   const barStyle: React.CSSProperties = {
//     backgroundColor: 'blue',
//     width: '40px',
//     margin: '0 5px',
//   };

//   return (
//     <div style={containerStyle}>
//       <h2>Analytics Page</h2>
//       <div style={barChartContainerStyle}>
//         {saleData.map((value, index) => (
//           <div key={index} style={{ ...barStyle, height: `${value}px` }}></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Analytics;
