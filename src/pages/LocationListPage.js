import { useState, useEffect } from "react";

function Locations(props) {
  // create state to hold projects
  const [locations, setLocations] = useState(null);

  //create function to make api call
  const getLocationsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "api/locations/all");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    console.log(data);
    setLocations(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getLocationsData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return locations.map((location, index) => (
      <div key={index}>
        <p>{location.StreetAddress}</p>
        <p>{location.City}</p>
        <p>{location.State}</p>
        <p>{location.ZipCode}</p>
      </div>
    ));
  };

  return locations ? loaded() : <h1>Loading...</h1>;
}

export default Locations;
