import React from 'react'
import ProbableFallsCards from './components/ProbableFallsCards'
import HistoricFalls from './components/HistoricFalls'
import LastFalls from './components/LastFalls'
import Graficoej from './components/Graficoej'
import Graficoej2 from './components/Graficoej2'
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
    <div className='pt-5'>
      <div className='flex w-full justify-end'>
        <div className='p-2 font-bold'>
          Bienvenido {session?.user?.name}
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='font-bold text-xl text-white'>
          Análisis histórico
        </div>
      </div>
      <ProbableFallsCards />
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
        <HistoricFalls />
        <LastFalls />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-5 ">
        <Graficoej />
        <Graficoej2 />
      </div>
    </div>
  )
}