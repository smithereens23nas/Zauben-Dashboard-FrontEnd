import React from 'react'
import DoughnutChart from '../components/DonutGraph'
import "../index.css"
import Line from "../components/LineGraph"

const performance = () => {
  return (
    <div className='chart-container'>
      <div className='donut-chart'>
      <DoughnutChart />
      </div>
      <div className='line-chart-size'>
      <Line />
      </div>
    </div>
  )
}

export default performance