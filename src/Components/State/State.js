import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

 const State = () => {
  const quiz =useLoaderData()
 
  return (
    <div>
      <h1>Statistic</h1>
      
      
      <ResponsiveContainer width="100%" aspect={3}>
      <BarChart width={1700} height={700} data={quiz.data} margin={{   top: 5,   right: 30,   left: 20,   bottom: 5,}} >
      <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        
        <Bar dataKey="total" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default State;