import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Chart = ({ songs }) => {
  const data = songs.map((song) => ({
    name: song.name.length > 12 ? song.name.substring(0, 12) + "..." : song.name,
    popularity: song.popularity,
  }));

  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "20px", background: "#1b8460", padding: "10px" }}>
      <div>
        <h2 style={{ color: "#ffff66", textShadow: "2px 2px 4px black" }}>Song Popularity</h2>
        <BarChart width={500} height={300} data={data} margin={{ bottom: 50 }}>
          <XAxis 
            dataKey="name" 
            stroke="#ffff66"
            tick={{ fontSize: 10 }} 
            angle={-30} 
            textAnchor="end"
            interval={0}
          />
          <YAxis stroke="#ffff66" />
          <Tooltip 
            contentStyle={{ backgroundColor: "#1b8460", border: "2px solid #ffff66", color: "#ffff66" }}
            itemStyle={{ color: "#ffff66" }}
          />
          <Bar dataKey="popularity" fill="#94DEA5" />
        </BarChart>
      </div>
      <div style={{ marginLeft: "20px", color: "#ffff66", fontSize: "14px" }}>
        <p><strong>Popularity Score:</strong> The score ranges from 0 (low) to 100 (high) and indicates how popular a song is on Spotify.</p>
      </div>
    </div>
  );
};

export default Chart;
