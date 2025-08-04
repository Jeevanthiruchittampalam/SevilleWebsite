'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: 2021, rent: 2.1 },
  { year: 2022, rent: 3.4 },
  { year: 2023, rent: 5.2 },
  { year: 2024, rent: 6.1 },
  { year: 2025, rent: 4.7 },
];

export default function RentTrendChart() {
  return (
    <div className="w-full h-96 bg-white p-4 shadow rounded">
      <h3 className="text-xl font-semibold mb-2">Metro Vancouver Rent Increase (2021–2025)</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis unit="%" />
          <Tooltip />
          <Line type="monotone" dataKey="rent" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
