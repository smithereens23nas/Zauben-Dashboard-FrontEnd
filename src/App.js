import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/react-toastify.css"
import Context from "./Context";
// import Container from "./components/Container";
// import Dashboard from "./components/Dashboard";
// import Footer from "./components/Footer";
import Nav from "./components/NavBar";
// import Plant from "./components/Plant";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PlantListPage from "./pages/PlantListPage";
import CreateLocationPage from "./pages/CreateLocation";
import LocationListPage from "./pages/LocationListPage";
import Performance from "./pages/PerformanceShowPage";
import PerformanceDashboard from "./pages/PerformanceDashboard";
import EditLocation from "./pages/editLocation"
// import DoughnutChart from "./components/DonutGraph"
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

function App() {
  const URL = "https://zauben.herokuapp.com/";
  // const URL = "http://localhost:5430/";
  Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
  );

  return (
    <div className="App">
      {/* <ToastContainer /> */}
      <Nav />
      {/* <Context.Provider value={{ userCredentials, setUserCredentials }}> */}

      <Routes>
        <Route exact path="/login" element={<Login URL={URL} />} />
        <Route path="/register" element={<Register URL={URL} />} />
        {/* <Route
            path="/locations"
            element={
              userCredentials ? <CreateLocationPage URL={URL} /> : <Login />
            }
          /> */}
        <Route path="/locations/create" element={<CreateLocationPage URL={URL} />} />
        <Route path="/locations" element={<LocationListPage URL={URL} />} />
        <Route path="/locations/edit/:id" element={<EditLocation URL={URL} />} />

        <Route path="/plants" element={<PlantListPage URL={URL} />} />
        <Route
          path="/performance"
          element={<PerformanceDashboard URL={URL} />}
        />
        <Route path="/performance/:id" element={<Performance URL={URL} />} />
      </Routes>
      {/* </Context.Provider> */}
    </div>
  );
}

export default App;
