import { useRef, useEffect } from 'react';
import { select, scaleBand, scaleLinear, max, axisBottom, axisLeft } from 'd3';

export default function D3BarGraph() {
  const svgRef = useRef(null);

  useEffect(() => {
    const data = generateRandomData(10); // Generar datos aleatorios

    const svg = select(svgRef.current);

    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const x = scaleBand()
      .domain(data.map((_, i) => i))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = scaleLinear()
      .domain([0, max(data)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = axisBottom(x).tickFormat((_, i) => `Barra ${i + 1}`);
    const yAxis = axisLeft(y);

    svg.selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', (_, i) => x(i))
      .attr('y', d => y(d))
      .attr('width', x.bandwidth())
      .attr('height', d => y(0) - y(d))
      .attr('fill', 'steelblue');

    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(xAxis);

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(yAxis);
  }, []);

  return <svg ref={svgRef}></svg>;
}

function generateRandomData(length) {
  const data = [];
  for (let i = 0; i < length; i++) {
    const age = Math.floor(Math.random() * 100) + 1;
    data.push(age);
  }
  return data;
}