import React from 'react'
import Link from 'next/link'
import { VscGraph } from 'react-icons/vsc';
import { BsQuestionLg } from 'react-icons/bs'

const Sidebar = () => {
    return (
        <>
            <div className='fixed w-auto h-screen p-4 bg-white border-r-[1px] flex flex-col'>
                <div className='flex flex-col items-center'>
                    <Link href='/'>
                        <div className='flex items-center space-x-2 bg-blue-900 text-white p-3 rounded-lg'>
                            <VscGraph size={20} />
                            <div>Graficos</div>
                        </div>
                    </Link>
                    <span className='border-b-[1px] border-gray-200 w-full p-2 mb-5'></span>
                    <Link href='/'>
                        <div className='bg-blue-900 text-white p-3 rounded-lg inline-block'>
                            <BsQuestionLg />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar