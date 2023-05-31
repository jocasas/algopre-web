"use client";

import { useRef } from 'react';
import { useD3 } from '../utils/d3'

export default function D3Component() {
  const svgRef = useRef(null);

  const data = [10, 20, 30, 40, 50];

  useD3(svgRef, data);

  return <svg ref={svgRef}></svg>;
}
