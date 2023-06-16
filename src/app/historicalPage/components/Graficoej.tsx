'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

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
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Revisión de créditos hipotecarios',
    },
  },
};

const labels = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Créditos a revisar',
      data: labels.map(() => faker.number.int({ min: 100, max: 300 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Créditos revisados',
      data: labels.map(() => faker.number.int({ min: 0, max: 300 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Graficoej = () => {
  return (
    <div className='w-full md:col-span-1 relative lg:h-[50vh] h-[50vh] m-auto p-5 border rounded-lg bg-white'>
      <Line options={options} data={data} />
    </div>

  )
}

export default Graficoej