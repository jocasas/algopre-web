import React from 'react'
import ProbableFallsCards from './components/ProbableFallsCards'
import HistoricFalls from './components/HistoricFalls'
import LastFalls from './components/LastFalls'
import Graficoej from './components/Graficoej'
import Graficoej2 from './components/Graficoej2'

const page = () => {
  return (
    <div className='pt-5'>
      <div className='flex justify-center'>
        <div className='font-bold text-xl text-white'>
          Dashboard de todos los KPI
        </div>
      </div>
      {/* <ProbableFallsCards /> */}
      <div className='grid md:grid-cols-3 grid-cols-1 pt-3 gap-4'>
        <HistoricFalls />
        <LastFalls />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-3 ">
        <Graficoej />
        <Graficoej2 />
      </div>
    </div>
  )
}

export default page