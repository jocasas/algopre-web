"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AgeHistogram = ({ data }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [ChartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Menor o igual 10 años", "Superior a 10 años"],
      datasets: [
        {
          label: "Cangrejos",
          data: [data[0], data[1]],
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgb(53,162,235,0.4)",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Edad de los cangrejos",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <div className="w-full md:col-span-2 relative lg:h-[60vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      <Bar data={chartData} options={ChartOptions} />
    </div>
  );
};

export default AgeHistogram;
