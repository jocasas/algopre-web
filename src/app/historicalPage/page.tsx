import React from 'react'
import ProbableFallsCards from './components/ProbableFallsCards'
import LastFalls from './components/LastFalls'
import { authOptions } from '@/app/utils/authOptions'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import dynamic from 'next/dynamic'
import Loading from './loading';


//Lazy loading de componentes para que no se carguen todos al inicio
const HistoricFalls = dynamic(() => import('./components/HistoricFalls'), {
  loading: () =>
    <div className='w-full md:col-span-2 relative lg:h-[60vh] h-[50vh] m-auto border rounded-lg bg-white'>
      <div className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <Loading />
      </div>
    </div>
  ,
})
const Graficoej = dynamic(() => import('./components/Graficoej'), {
  loading: () =>
    <div className='w-full md:col-span-1 relative lg:h-[60vh] h-[50vh] m-auto border rounded-lg bg-white'>
      <div className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <Loading />
      </div>
    </div>
  ,
})
const Graficoej2 = dynamic(() => import('./components/Graficoej2'), {
  loading: () =>
    <div className='w-full md:col-span-1 relative lg:h-[60vh] h-[50vh] m-auto p-4 border rounded-lg bg-white flex justify-center'>
      <div className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <Loading />
      </div>
    </div>,
})

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