import { useEffect, useRef } from 'react';
import { select, axisBottom, scaleLinear } from 'd3';

export function useD3(elementRef, data) {
  useEffect(() => {
    const svg = select(elementRef.current);

    // Código de D3.js
    // Aquí puedes utilizar todas las funciones de D3.js que necesites

    // Ejemplo: Crear una escala lineal y un eje de abajo
    const xScale = scaleLinear()
      .domain([0, data.length])
      .range([0, 400]);

    const xAxis = axisBottom(xScale);

    svg.append('g').call(xAxis);
  }, [elementRef, data]);
}
