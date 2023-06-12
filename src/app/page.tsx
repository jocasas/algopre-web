"use client"
import { useEffect } from 'react';
import D3BarGraph from './components/D3BarGraph'



export default function Home() {
  useEffect(() => {
    // Código adicional del componente de servidor si es necesario
  }, []);
  return (
    <html className='h-screen'>
      <header></header>
      <main>
        <div>
          <h1>Gráfico de Barras</h1>
          <D3BarGraph />
        </div>
      </main>
      

    </html>
  );
}
