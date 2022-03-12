import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Context from "./Context";
import Container from "./components/Container";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Nav from "./components/NavBar";
import Plant from "./components/Plant";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PlantListPage from "./pages/PlantListPage";
import PlantLocationList from "./pages/LocationListPage";
import Performance from "./pages/Performance";
import Pressure from "./pages/Pressure";
import Soil1 from "./pages/Soil1";
import Soil2 from "./pages/Soil2";
import Soil3 from "./pages/Soil3";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const URL = "http://localhost:8080/";

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["model x", "sage", "top-competitor"],
      datasets: [
        {
          label: "Top air quality plant walls",
          data: [100, 25, 40],
          borderColor: "rgb(53, 162, 235, 0.4)",
          backgroundColor: "rgba(53, 162, 235, 0.4)",

        },
      ],
    });
    setChartOptions({
      responsive: true, 
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Living Plant Wall Air Quality"
        }
      }
    })
  }, []);

  const [error, setError] = useState();
  const [userCredentials, setUserCredentials] = useState({
    token: null,
    user: null,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");

      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenResponse = await axios
        .post("http://localhost:8080/auth/users/tokenIsValid", null, {
          headers: {
            "x-auth-token": token,
          },
        })
        .catch((error) => {
          console.log(error.toJSON());
        });

      if (tokenResponse) {
        const res = await axios
          .get("http://localhost:8080/auth/users/tokenIsValid", {
            headers: {
              "x-auth-token": token,
            },
          })
          .catch((error) => {
            setError(error);
          });

        setUserCredentials({
          token,
          user: res,
        });
      }
    };

    checkLoggedIn();
  }, []);
  return (
    <div className="App">
      <Nav />
      <Context.Provider value={{ userCredentials, setUserCredentials }}>
        
        <Routes>
          <Route exact path="/login" element={<Login URL={URL} />}></Route>
          <Route path="/performance" element={<Bar options={chartOptions} data={chartData} />} />
          <Route path="/register" element={<Register URL={URL} />} />
          <Route
            path="/locations"
            element={
              userCredentials ? <PlantLocationList URL={URL} /> : <Login />
            }
          />
          <Route path="/plants" element={<PlantListPage URL={URL} />} />
          <Route path="/performance"  element={<Performance URL={URL} options={chartOptions} data={chartData} />} />
          <Route path="/pressure" element={<Pressure URL={URL} />} />
          <Route path="/soil-1" element={<Soil1 URL={URL} />} />
          <Route path="/soil-2" element={<Soil2 URL={URL} />} />
          <Route path="/soil-3" element={<Soil3 URL={URL} />} />
        </Routes>
      </Context.Provider>
      <Footer />
    </div>
  );
}

export default App;
