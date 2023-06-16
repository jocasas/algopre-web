'use client';
import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Créditos hipotecarios Junio',
        },
    },
};

export const data = {
    labels: ['revisados', 'no revisados'],
    datasets: [
        {
            label: 'cantidad',
            data: [100, 120],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',

            ],
            borderWidth: 1,
        },
    ],
};

const Graficoej2 = () => {
    return (
        <div className='w-full md:col-span-1 relative lg:h-[50vh] h-[50vh] m-auto border rounded-lg bg-white flex justify-center'>
            <Pie options={options} data={data} />
        </div>
    )
}

export default Graficoej2