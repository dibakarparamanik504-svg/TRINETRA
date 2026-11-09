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
import Detection from "./page/Home/home_feature/detection";
import Alertanalysis from "./page/Alert/alert_feature/alertanalysis";
// import Cameradetails from "./page/Monitoring/motitorfeature/cameradetails";
import Loading from "./page/FuncationBox/Loading";
import Eventanalysis from "./page/Analysis/analysis_feature/event_analysis";
import Flagged from "./page/Analysis/analysis_feature/flagged";
import Cameraavailblity from "./page/Analysis/analysis_feature/camera_availblity";
import Simpleprecision from "./page/Analysis/analysis_feature/simple_precision";
import SpatialIntelligent from "./page/Analysis/analysis_feature/Spatial_Intelligent";
import PredictiveAnalytics from "./page/Analysis/analysis_feature/Predictive_Analytics";
import BehaviourAnalysis from "./page/Analysis/analysis_feature/Behaviour_Analysis";
import NetworkTesting from "./page/Analysis/analysis_feature/Network_Testing";
import EnvironmentalAnalysis from "./page/Analysis/analysis_feature/Environmental_Analysis";
import EvisenceIntelligence from "./page/Analysis/analysis_feature/Evisence_Intelligence";
import ModelPerformance from "./page/Analysis/analysis_feature/Model_Performance";
import InfrastructureHealth from "./page/Analysis/analysis_feature/Infrastructure_Health";

function App() {
  let [name, setName] = useState("Home Page");
  let [headroute, setHeadroute] = useState([]);
  let [routedata, setRoutedata] = useState([]);
  // let[title,setTitle]=useState("");
  // let[body,setBody]=useState("");
  // let[check,setCheck] = useState(false);
  let[loadingpath, setLoadingpath] = useState("");
  let [title1, setTitle1] = useState();
  // let [cameradetails,setcameradetails]=useState();
  let[alertsdata,setAlertsdata]=useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header name={name} />
        </div>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  setName={setName}
                  setRoutedata={setRoutedata}
                  setHeadroute={setHeadroute}
                  setTitle1={setTitle1}
                />
              }
            />
            <Route path="/alert" element={<Dashboard setName={setName} setAlertsdata={setAlertsdata}/>} />
            <Route path="/monitoring" element={<Monitor setName={setName} setLoadingpath={setLoadingpath}/>} />
            <Route path="/decision" element={<Decision setName={setName} setLoadingpath={setLoadingpath}/>}/>
            <Route path="/analysis" element={<Analysis setName={setName} setLoadingpath={setLoadingpath}/>} />
            <Route
              path="/home/detection"
              element={
                <Detection
                  setName={setName}
                  routedata={routedata}
                  headroute={headroute}
                  title1={title1}
                />
              }
            />
            {/* sequrity alert start */}

            <Route
              path="/alert/alertanalysis"
              element={<Alertanalysis setName={setName} alertsdata={alertsdata}/>}
            />

            {/* monitoring start */}

            {/* <Route
              path="/monitoring/cameradetails"
              element={<Cameradetails setName={setName} />}
            /> */}

            {/* Dicidion start */}

            <Route
              path="/decision/alert/dicision"
              element={<Loading setName={setName} loadingpath={loadingpath}/>}
            />


            {/* Analysis start */}

            <Route
              path="/analysis/event"
              element={<Eventanalysis setName={setName} />}
            />
            <Route
              path="/analysis/flagged"
              element={<Flagged setName={setName} />}
            />
            <Route
              path="/analysis/cameraavailablity"
              element={<Cameraavailblity setName={setName} />}
            />
            <Route
              path="/analysis/sampleprecision"
              element={<Simpleprecision setName={setName} />}
            />

            <Route
              path="/analysis/spatialintelligent"
              element={<SpatialIntelligent setName={setName} />}
            />
            <Route
              path="/analysis/predictiveanalytics"
              element={<PredictiveAnalytics setName={setName} />}
            />
            <Route
              path="/analysis/behaviouranalysis"
              element={<BehaviourAnalysis setName={setName} />}
            />
            <Route
              path="/analysis/networktesting"
              element={<NetworkTesting setName={setName} />}
            />
            <Route
              path="/analysis/environmentalanalysis"
              element={<EnvironmentalAnalysis setName={setName} />}
            />
            <Route
              path="/analysis/evisenceintelligence"
              element={<EvisenceIntelligence setName={setName} />}
            />
            <Route
              path="/analysis/modelperformance"
              element={<ModelPerformance setName={setName} />}
            />
            <Route
              path="/analysis/infrastructurehealth"
              element={<InfrastructureHealth setName={setName} />}
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
