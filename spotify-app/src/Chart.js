import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Chart = ({ songs }) => {
  const data = songs.map(song => ({
    name: song.name,
    popularity: song.popularity,
  }));

  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="popularity" fill="#8884d8" />
    </BarChart>
  );
};

export default Chart;
