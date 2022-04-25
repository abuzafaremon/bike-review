import React from 'react';
import { BarChart, PieChart, Pie, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
  const data = [
    {
      "month": "Mar",
      "investment": 100000,
      "sell": 241,
      "revenue": 10401
    },
    {
      "month": "Apr",
      "investment": 200000,
      "sell": 423,
      "revenue": 24500
    },
    {
      "month": "May",
      "investment": 500000,
      "sell": 726,
      "revenue": 67010
    },
    {
      "month": "Jun",
      "investment": 500000,
      "sell": 529,
      "revenue": 40405
    },
    {
      "month": "Jul",
      "investment": 600000,
      "sell": 601,
      "revenue": 50900
    },
    {
      "month": "Aug",
      "investment": 700000,
      "sell": 670,
      "revenue": 61000
    }
  ]
  return (
    <div className='chart-container'>
      <BarChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
        <Bar dataKey='investment' fill="#8884d8"></Bar>
        <Bar dataKey='sell' fill="#82ca9d"></Bar>
        <Bar dataKey='revenue' fill="#12889d"></Bar>
      </BarChart>

      <PieChart width={730} height={250}>
        <Tooltip />
        <Pie data={data} dataKey='revenue' fill='#8884d8' outerRadius={50} cy='50%' cx='50%'></Pie>
        <Pie data={data} dataKey='revenue' fill='#82ca9d' innerRadius={60} cy='50%' cx='50%' outerRadius={80} label></Pie>
      </PieChart>
    </div>
  );
};

export default Dashboard;