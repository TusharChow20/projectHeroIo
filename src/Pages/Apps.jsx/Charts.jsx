import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Charts = ({ ratings }) => {
  const data = ratings;
  console.log(data);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical" // 👈 makes it horizontal
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 10,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* Notice we swap X and Y axes */}
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" reversed />
          <Tooltip />
          {/* <Legend /> */}
          <Bar
            dataKey="count"
            fill="#FF8811"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
