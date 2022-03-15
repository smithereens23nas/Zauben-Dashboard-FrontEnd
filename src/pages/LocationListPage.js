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
    console.log(data);
    setLocations(data);
  };
  const createBook = async (locations) => {
    await fetch(props.URL + "locations", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify(locations),
    });
    getLocationsData();
};
  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getLocationsData(), []);
 // state to hold formData
 const [newLocation, setNewLocation] = useState({
  StreetAddress: "",
  City: "",
  State: "",
  ZipCode: ""
});
// handleChange function for form
const handleChange = (event) => {
  setNewLocation({ ...newLocation, [event.target.name]: event.target.value });
};
// handle submit function for Create locations
const handleSubmit = (event) => {
  event.preventDefault();
  createBook(newLocation);
  setNewLocation({
      StreetAddress: "",
      City: "",
      State: "",
      ZipCode: ""
  });
};
    // loaded function
    const loaded = () => {
      return locations.map((locations) => (
          <div key={locations.id} className="">
              <Link to={`/locations/${locations.id}`}><h1>{locations.StreetAddress}</h1></Link>
              <h3>{locations.City} </h3>
              <h3>{locations.State}</h3>
              <h3>{locations.ZipCode}</h3>
          </div>
      ));
  };
  const loading = () => {
      return <h1>Loading...</h1>;
  };
  return (
      <section>
          <form className="forms" onSubmit={handleSubmit}>
              <input
                  type="text"
                  value={newLocation.name}
                  name="StreetAddress"
                  placeholder="Street Address"
                  onChange={handleChange}
              />
              <input
                  type="text"
                  value={newLocation.date}
                  name="City"
                  placeholder="City"
                  onChange={handleChange}
              />
              <input
                  type="text"
                  value={newLocation.Email}
                  name="State"
                  placeholder="State"
                  onChange={handleChange}
              />
              <input
                  type="text"
                  value={newLocation.Email}
                  name="ZipCode"
                  placeholder="ZipCode"
                  onChange={handleChange}
              />

              <input className="forms-btn" type="submit" value="Create Location" />
          </form>
          {locations ? loaded() : loading()}
      </section>
  );
}

  // define a function that will return the JSX needed once we get the data
  // const loaded = () => {
  //   return locations.map((location, index) => (
  //     <div key={index} className="container">
  //       <p>{location.StreetAddress}</p>
  //       <p>{location.City}</p>
  //       <p>{location.State}</p>
  //       <p>{location.ZipCode}</p>
  //     </div>
  //   ));
  // };

  // return locations ? loaded() : <h1>Loading...</h1>;
// }

export default Locations;
