import "./App.css";
import { Route, Routes } from "react-router-dom"
import Container from "./components/Container";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Nav from "./components/NavBar";
import Plant from "./components/Plant";
import Register from "./pages/Register"
import Login from "./pages/Login";
import PlantListPage from "./pages/PlantListPage";
import PlantLocationList from "./pages/LocationListPage";
import Performance from "./pages/Performance";
import Pressure from "./pages/Pressure";
import Soil1 from "./pages/Soil1";
import Soil2 from "./pages/Soil2";
import Soil3 from "./pages/Soil3";

function App() {
  const URL = "http://localhost:8080/";
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route exact path='/login' element={< Login URL={URL} />}></Route>
        <Route path="/register" element={<Register URL={URL} />} />
        <Route path="/locations" element={<PlantLocationList URL={URL} />} />
        <Route path="/plants" element={<PlantListPage URL={URL} />} />
        <Route path="/performance" element={<Performance URL={URL} />} />
        <Route path="/pressure" element={<Pressure URL={URL} />} />
        <Route path="/soil-1" element={<Soil1 URL={URL} />} />
        <Route path="/soil-2" element={<Soil2 URL={URL} />} />
        <Route path="/soil-3" element={<Soil3 URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
