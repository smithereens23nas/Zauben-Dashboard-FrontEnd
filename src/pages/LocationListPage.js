import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Locations(props) {
  // create state to hold projects
  const [locations, setLocations] = useState(null);

  //create function to make api call
  const getLocationsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "locations/all");

    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setLocations(data);
  };



// const  deletePost = async post  => {
//     await fetch(`${props.URL}/locations/${id}`, {
//       method: "delete",
//   })
//   navigate('/locations')
// }

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getLocationsData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return locations.map((location, index) => (
      <div className="locations-grid" key={index}>
          <Link to="/plants"><img src="https://cdn-icons-png.flaticon.com/128/888/888063.png" alt="building" /></Link>
        <Link to="/plants"><p>{location.StreetAddress}</p></Link>
        <p>{location.City}</p>
        <p>{location.State}</p>
        <p>{location.ZipCode}</p>
        
<button className="locations-btn btn-spacing">Update</button>
<button className="locations-btn btn-spacing">Delete</button>
      </div>
    ));
  };

  return locations ? loaded() : <h1>Loading...</h1>;
}


export default Locations;