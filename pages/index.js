import React from 'react';
import { letterFrequency } from '@visx/mock-data';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand, scaleOrdinal } from '@visx/scale';

import { schemeSet1 } from 'd3-scale-chromatic';

// We'll use some mock data from `@visx/mock-data` for this.
const data = letterFrequency;

// Define the graph dimensions and margins
const width = 1000;
const height = 1000;
const margin = { top: 50, bottom: 50, left: 50, right: 50 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// We'll make some helpers to get at the data we want
const x = (d) => d.letter;
const y = (d) => +d.frequency * 100;

// And then scale the graph by our data
const xScale = scaleBand({
  range: [0, xMax],
  round: true,
  domain: data.map(x),
  padding: 0.4,
});
const yScale = scaleLinear({
  range: [yMax, 0],
  round: true,
  domain: [0, Math.max(...data.map(y))],
});

const colorScale = scaleOrdinal({
  domain: data.map(x),
  range: schemeSet1,
});

console.log(colorScale(151));

// Compose together the scale and accessor functions to get point functions
const compose = (scale, accessor) => (data) => scale(accessor(data));
const xPoint = compose(xScale, x);
const yPoint = compose(yScale, y);

// Finally we'll embed it all in an SVG
const BarGraph = (props) => {
  return (
    <svg width={width} height={height}>
      {data.map((d, i) => {
        const barHeight = yMax - yPoint(d);
        return (
          <Group key={`bar-${i}`}>
            <Bar
              x={xPoint(d)}
              y={yMax - barHeight}
              height={barHeight}
              width={xScale.bandwidth()}
              fill={colorScale(d.letter)}
            />
          </Group>
        );
      })}
    </svg>
  );
};

export default BarGraph;
