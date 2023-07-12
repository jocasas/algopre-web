"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import connection from "../../../../lib/database/database";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Comparacion en el Tiempo",
    },
  },
};

/* const labels = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
}; */

const Graficoej = (taim: any) => {
  //const labels = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
  //console.log(taim.taim);
  //console.log(taimraw.taimraw);
  //const labels = taim.taim;
  console.log(taim[0].data1);
  console.log(taim[1].data2);
  const labels = taim[0].data1;
  const data = {
    labels,
    datasets: [
      {
        label: "Tiempo Raw",
        data: taim[1].data2,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="w-full md:col-span-1 relative lg:h-[60vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      <Line options={options} data={data} />
    </div>
  );
};

export default Graficoej;
