import React from 'react'

const ProbableFallsCards = () => {
    return (
        <>
            <h1 className='font-bold text-xl'>Motivos cancelación de apertura:</h1>
            <div className='grid lg:grid-cols-3 gap-3 pt-2 mb-5'>
                <div className='col-span-1 bg-gray-100 flex justify-between w-full border p-4 rounded-lg'>
                    <div className='flex flex-col w-full pb-4 text-black'>
                        <p className='font-bold text-xl'>Motivo:</p>
                        <p className='text-gray-600'>Cambio de banco</p>
                    </div>
                    <p className='bg-red-400 flex justify-center items-center p-2 rounded-lg'>
                        <span className=' font-bold'>
                            32%
                        </span>
                    </p>
                </div>
                <div className='col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                    <div className='flex flex-col w-full pb-4 text-black'>
                        <p className='font-bold text-2xl'>Motivo:</p>
                        <p className='text-gray-600'>Tardanza en atención</p>
                    </div>
                    <p className='bg-red-400 flex justify-center items-center p-2 rounded-lg'>
                        <span className=' font-bold'>
                            17%
                        </span>
                    </p>
                </div>
                <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
                    <div className='flex flex-col w-full pb-4 text-black'>
                        <p className='font-bold text-2xl'>Motivo:</p>
                        <p className='text-gray-600'>Incumplimiento de requisitos</p>
                    </div>
                    <p className='bg-red-400 flex justify-center items-center p-2 rounded-lg'>
                        <span className=' font-bold'>
                            10%
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProbableFallsCards