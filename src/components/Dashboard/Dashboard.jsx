import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const studentMarks = [
        {
          id: 1,
          name: "John",
          math: 75,
          physics: 70,
          chemistry: 80
        },
        {
          id: 2,
          name: "Emily",
          math: 80,
          physics: 85,
          chemistry: 83
        },
        {
          id: 3,
          name: "David",
          math: 90,
          physics: 87,
          chemistry: 78
        },
        {
          id: 4,
          name: "Sarah",
          math: 85,
          physics: 82,
          chemistry: 85
        },
        {
          id: 5,
          name: "Michael",
          math: 92,
          physics: 90,
          chemistry: 89
        },
        {
          id: 6,
          name: "Amanda",
          math: 88,
          physics: 75,
          chemistry: 92
        },
        {
          id: 7,
          name: "Kevin",
          math: 83,
          physics: 81,
          chemistry: 81
        },
        {
          id: 8,
          name: "Emma",
          math: 79,
          physics: 76,
          chemistry: 77
        },
        {
          id: 9,
          name: "Olivia",
          math: 87,
          physics: 88,
          chemistry: 86
        },
        {
          id: 10,
          name: "William",
          math: 91,
          physics: 83,
          chemistry: 88
        }
      ];
      
    return (
        <div className='ml-12 mt-8'>
            <LineChart
            width={500}
            height={300}
            data={studentMarks}
            >
<Line dataKey="math"></Line>
<Line stroke='red' dataKey="physics"></Line>
<Line stroke='green' dataKey="chemistry"></Line>
<XAxis dataKey="name"></XAxis>
<YAxis></YAxis>
<Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;