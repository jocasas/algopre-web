import ProbableFallsCards from './components/ProbableFallsCards'
import HistoricFalls from './components/HistoricFalls'
import LastFalls from './components/LastFalls'

export default function Home() {
  return (
    <>
      <ProbableFallsCards />
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
        <HistoricFalls />
        <LastFalls />
      </div>
    </>
  )
}
