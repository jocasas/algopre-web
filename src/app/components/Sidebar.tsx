import React from 'react'
import Link from 'next/link'
import { VscGraph, VscHistory, VscAccount } from 'react-icons/vsc';
import { SiSololearn } from 'react-icons/si'


const Sidebar = () => {
    return (
        //componente Sidebar que se mostrara en cada page
        <aside className='fixed w-auto h-screen p-4 bg-white flex flex-col shadow-xl justify-between '>
            {/* contenedor botones de navegacion */}
            <div className='flex flex-col items-center'>
                {/* boton para ir a pagina principal */}
                <Link href='/mlPage' className='mb-2'>
                    <div className='flex items-center space-x-2 bg-[#111217] text-white p-3 rounded-lg'>
                        <SiSololearn size={25} />
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2 mb-5'></span>
                {/* boton para ir a pagina de predicciones */}
                <Link href='/mlPage' className='mb-2'>
                    <div className='flex items-center space-x-2 hover:bg-gray-300 bg-gray-200 text-black p-3 rounded-lg'>
                        <VscGraph size={25} />
                    </div>
                </Link>
                {/* boton para ir a pagina de historial */}
                <Link href='/historicalPage' className='mb-2'>
                    <div className='w-full hover:bg-gray-300 bg-gray-200 text-black p-3 rounded-lg inline-block'>
                        <VscHistory size={25} />
                    </div>
                </Link>
            </div>
            {/* boton para ir a login */}
            <div>
                <Link href='/' className='mb-2'>
                    <div className='flex items-center space-x-2 bg-[#111217] text-white p-3 rounded-lg'>
                        <VscAccount size={25} />
                    </div>
                </Link>
            </div>

        </aside>

    )
}

export default Sidebar