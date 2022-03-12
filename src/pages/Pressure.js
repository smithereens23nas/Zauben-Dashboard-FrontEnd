import { useState, useEffect } from "react";

function Pressure(props) {
  // create state to hold about data
  const [pressure, setPressure] = useState(null);

  // create function to make api call
  const getPressureData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "pressure");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setPressure(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getPressureData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      <h2>{pressure.Relative_inHg}</h2>
      <h3>{pressure.Absolute_inHg}</h3>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return pressure ? loaded() : <h1>Loading...</h1>;
}

export default Pressure;