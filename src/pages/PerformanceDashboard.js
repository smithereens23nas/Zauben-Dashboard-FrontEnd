import React from 'react'
import DoughnutChart from '../components/DonutGraph'
import "../index.css"
import Line from "../components/LineGraph"
import { useState, useEffect } from "react";

function Performance(props) {
  // create state to hold projects
  const [graphs, setGraphs] = useState(null);

  //create function to make api call
  const getPerformanceData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "performance/all");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    console.log(data);
    setGraphs(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getPerformanceData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return graphs.map((data, index) => (
      <div className='donut-charts' key={index}>
          <DoughnutChart />
        <p>{data.Relative_inHg}</p>
        <DoughnutChart />
        <p>{data.Absolute_inHg}</p>
        <DoughnutChart />
        <p>{data.Soilmoisture_CH1}</p>
        <DoughnutChart />
        <p>{data.Soilmoisture_CH2}</p>
        <DoughnutChart />
        <p>{data.Soilmoisture_CH3}</p>
        <DoughnutChart />
        <p>{data.Soilmoisture_CH4}</p>
        <Line />
        <div>
           {/* <Line />  */}
        </div>
        
      </div>
    ));
  };

  return graphs ? loaded() : <h1>Loading...</h1>;
}

export default Performance;