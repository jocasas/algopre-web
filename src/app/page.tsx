"use client"
import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import D3BarGraph from './components/D3BarGraph'

const DynamicD3Component = dynamic(
  () => import('./components/D3Component'),
  { ssr: false }
);

export default function Home() {
  useEffect(() => {
    // Código adicional del componente de servidor si es necesario
  }, []);
  return (
    <div>
      <h1>Gráfico de Barras</h1>
        <D3BarGraph />
    </div>
  );
}
