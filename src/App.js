import "./App.css";
import { Route, Routes } from "react-router-dom"
import Container from "./components/Container";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Nav from "./components/NavBar";
import Plant from "./components/Plant";
import Login from "./pages/Login";
import PlantListPage from "./pages/PlantListPage";
import PlantShowPage from "./pages/PlantShowPage";
import Performance from "./pages/Performance";
import AirQuality from "./pages/AirQuality";
import Temperature from "./pages/Temperature";
import WaterTank from "./pages/WaterTank";
import Humidity from "./pages/Humidity";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Login URL={URL} />} />
        <Route path="/locations" element={<PlantLocationList URL={URL} />} />
        <Route path="/" element={<PlantListPage URL={URL} />} />
        <Route path="/plant" element={<PlantShowPage URL={URL} />} />
        <Route path="/performance" element={<Performance URL={URL} />} />
        <Route path="/airquality" element={<AirQuality URL={URL} />} />
        <Route path="/temperature" element={<Temperature URL={URL} />} />
        <Route path="/water" element={<WaterTank URL={URL} />} />
        <Route path="/humidity" element={<Humidity URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
