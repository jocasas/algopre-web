import React from 'react'
import Link from 'next/link'
import { VscGraph, VscHistory } from 'react-icons/vsc';
import { SiSololearn } from 'react-icons/si'


const Sidebar = () => {
    return (
        //componente Sidebar que se mostrara en cada page

        <aside className='fixed w-auto h-screen p-4 bg-white flex flex-col shadow-xl '>
            <div className='flex flex-col items-center'>
                <Link href='/' className='mb-2'>
                    <div className='flex items-center space-x-2 bg-[#111217] text-white p-3 rounded-lg'>
                        <SiSololearn size={25} />
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2 mb-5'></span>
                <Link href='#' className='mb-2'>
                    <div className='flex items-center space-x-2 hover:bg-gray-300 bg-gray-200 text-black p-3 rounded-lg'>
                        <VscGraph size={25} />
                    </div>
                </Link>
                <Link href='#' className='mb-2'>
                    <div className='w-full hover:bg-gray-300 bg-gray-200 text-black p-3 rounded-lg inline-block'>
                        <VscHistory size={25} />
                    </div>
                </Link>
            </div>
        </aside>

    )
}

export default Sidebar