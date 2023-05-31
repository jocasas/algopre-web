import './globals.css'
import Sidebar from './components/Sidebar';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
}

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={inter.className}>
      <body className='flex bg-[#111217]'>
        <Sidebar></Sidebar>
        <main className='w-full ml-24 mr-4 mt-5 text-white'>
          {children}
        </main>
      </body>
    </html>
  )
}
