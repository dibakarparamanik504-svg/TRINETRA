import { useState } from "react";
import "./App.css";
import HomePage from "./page/Home/HomePage";
import Header from "./page/header";
import Footer from "./page/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./page/Alert/alert";
import Monitor from "./page/Monitoring/monitoring";
import Decision from "./page/Decision/decision";
import Analysis from "./page/Analysis/analysis";
import Detection from "./page/Home/detection";
import Tracking from "./page/Home/tracking";
import Camerahelth from "./page/Home/camera_helth";

function App() {
  let [name, setName] = useState("Home Page");
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header name={name} />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage setName={setName} />} />
            <Route path="/alert" element={<Dashboard setName={setName} />} />
            <Route path="/monitoring" element={<Monitor setName={setName} />} />
            <Route path="/decision" element={<Decision setName={setName} />} />
            <Route path="/analysis" element={<Analysis setName={setName} />} />
            <Route
              path="/home/detection"
              element={<Detection setName={setName} />}
            />
            <Route
              path="/home/tracking"
              element={<Tracking setName={setName} />}
            />
            <Route
              path="/home/camerahealth"
              element={<Camerahelth setName={setName} />}
            />
          </Routes>
          <div>
            <Footer name={name} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
