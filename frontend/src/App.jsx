import { useState } from "react";
import "./App.css";
import HomePage from "./page/HomePage";
import Header from "./page/header";
import Footer from "./page/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./page/dashboard";
import Monitor from "./page/monitoring";
import Decision from "./page/decision";
import Analysis from "./page/analysis";

function App() {
  let [name, setName] = useState("Home Page");
  return (
    <div className="App">
      <div>
        <Header name={name} />
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage setName={setName}/>} />
            <Route path="/dashboard" element={<Dashboard setName={setName}/>} />
            <Route path="/monitoring" element={<Monitor setName={setName}/>} />
            <Route path="/decision" element={<Decision setName={setName}/>} />
            <Route path="/analysis" element={<Analysis setName={setName}/>} />
          </Routes>
          <div>
            <Footer name={name}/>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
