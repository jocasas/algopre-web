import React from 'react'
import ProbableFallsCards from './components/ProbableFallsCards'
import HistoricFalls from './components/HistoricFalls'
import LastFalls from './components/LastFalls'

const page = () => {
  return (
    <div className='pt-5'>
      <ProbableFallsCards />
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
        <HistoricFalls />
        <LastFalls />
      </div>
    </div>
  )
}

export default page