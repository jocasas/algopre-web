import React from 'react'
import { VscWarning } from 'react-icons/vsc'

const data = [
    {
        id: 1,
        fecha: '21/06/2023',
        hora: '15:00:00',
        tiempoCaido: '49m'
    },
    {
        id: 2,
        fecha: '18/06/2023',
        hora: '18:00:00',
        tiempoCaido: '1:30h'
    },
    {
        id: 3,
        fecha: '15/06/2023',
        hora: '13:00:00',
        tiempoCaido: '50m'
    },
    {
        id: 4,
        fecha: '10/06/2023',
        hora: '08:00:00',
        tiempoCaido: '3h'
    },
    {
        id: 5,
        fecha: '5/06/2023',
        hora: '23:00:00',
        tiempoCaido: '1h'
    },
    {
        id: 6,
        fecha: '01/06/2023',
        hora: '01:00:00',
        tiempoCaido: '1h'
    },
]

const LastFalls = () => {
    return (
        <div className='w-full col-span-1 relative lg:h-[60vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-y-scroll'>
            <h1 className='text-black font-bold'>Ultimas caídas</h1>
            <ul>
                {data.map((caida, id) => (
                    <li key={id} className='bg-gray-50 hover:bg-gray-100 flex rounded-lg my-3 p-2 items-center cursor-pointer'>
                        <div className='bg-red-200 rounded-lg p-3 w-11'>
                            <VscWarning size={20} className='text-red-900' />
                        </div>
                        <div className=' text-xs pl-4 text-black font-semibold'>
                            <p>fecha: {caida.fecha}</p>
                            <p>hora: {caida.hora}</p>
                        </div>
                        <div className='text-xs flex flex-col absolute right-6 text-black font-bold'>
                            <p>Tiempo:</p>
                            <p>{caida.tiempoCaido}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LastFalls