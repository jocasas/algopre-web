import React from 'react'
import { authOptions } from '@/app/utils/authOptions'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



export default async function page() {

    const session = await getServerSession(authOptions)
    //valida si es que el usuario esta logeado sino se le redirege al login
    if (!session) {
        redirect("/")
    }

    return (
        <div>
            <div className='flex w-full justify-end'>
                <div className='p-2 font-bold'>
                    Bienvenido {session?.user?.name}
                </div>
            </div>
            <div className='w-full h-screen flex justify-center items-center'>
                <div>
                    aquí van los gráficos de ML ༼ つ ◕_◕ ༽つ
                </div>
            </div>
        </div>
    )
}