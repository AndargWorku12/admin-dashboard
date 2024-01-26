import React from 'react';

interface AnalyticsCardProps {
  title: string;
  saleData: SaleData[];
}

type SaleData = {
  date: string;
  amount: number;
};

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, saleData }) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex justify-center items-end h-20 mt-4">
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
    <div className="bg-blue-500 w-4 m-0.5" style={{ height: `${amount}px` }}></div>
  );
};

export default AnalyticsCard;
