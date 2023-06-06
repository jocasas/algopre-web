"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HistoricFalls = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [ChartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'],
            datasets: [{
                label: 'Clientes atendidos',
                data: [150, 188, 120, 100, 98, 109],
                borderColor: 'rgb(53,162,235)',
                backgroundColor: 'rgb(53,162,235,0.4)',
            },{
                label: 'Cuentas corrientes abiertas',
                data: [130, 180, 119, 70, 89, 100],
                borderColor: 'rgb(51,230,23)',
                backgroundColor: 'rgb(51,230,23,0.4)',
            },
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Clientes atendidos vs cuentas corrientes abiertas últimos 6 meses'
                }
            },
            maintainAspectRatio: false,
            responsive: true,
        })
    }, [])

    return (

        <div className='w-full md:col-span-2 relative lg:h-[60vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
            <Bar data={chartData} options={ChartOptions} />
        </div>

    )
}

export default HistoricFalls