import { Inter } from 'next/font/google';
import Sidebar from '../components/Sidebar';
import { Suspense } from 'react';
import Loading from './loading'


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Sidebar></Sidebar>
      <Suspense fallback={< Loading />}>
        <div className='ml-24 mr-4 text-white'>
          {children}
        </div>
      </Suspense>
    </div>
  )
}