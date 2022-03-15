import { useState, useEffect } from "react";

function Locations(props) {
  // create state to hold projects
  const [locations, setLocations] = useState(null);

  //create function to make api call
  const getLocationsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "plants/");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setLocations(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getLocationsData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return locations.map((plants, index) => (
      <div key={index}>
        <p>{plants.locations}</p>

      </div>
    ));
  };

  return locations ? loaded() : <h1>Loading...</h1>;
}

export default Locations;