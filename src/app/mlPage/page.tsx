import React from 'react'
import { authOptions } from '@/utils/authOptions'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



export default async function page() {

    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/")
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div>
                aquí van los gráficos de ML ༼ つ ◕_◕ ༽つ
            </div>
        </div>
    )
}