import React from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    AreaSeries
  } from 'react-vis';


const GraphDemo01 = () => 

    <XYPlot width={450} height={600}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <AreaSeries
        className="area-series-example"
        curve="curveNatural"
        data={[{x: 1, y: 10}, {x: 2, y: -5}, {x: 3, y: 15}]}
      />
    </XYPlot>


export default GraphDemo01