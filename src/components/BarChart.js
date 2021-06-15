import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chart, label }) => {
  const data = {
    labels: chart.map((item) => item.name),
    datasets: [
      {
        label: label,
        data: chart.map((item) => item.count),
        backgroundColor: "#4577FF",
        borderColor: "#2d2d2d",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div style={{ backgroundColor: "white", padding: 20 }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
