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
import Tracking from "./page/Home/home_feature/tracking";
import Camerahelth from "./page/Home/home_feature/camera_helth";
import Bordermemory from "./page/Home/home_feature/bordermemory";
import TotalAlert from "./page/Alert/alert_feature/sequrityalert/totalalert";
import Criticul from "./page/Alert/alert_feature/sequrityalert/criticul";
import Underreview from "./page/Alert/alert_feature/sequrityalert/underreview";
import Resolved from "./page/Alert/alert_feature/sequrityalert/resolved";
import Alertanalysis from "./page/Alert/alert_feature/sequrityalert/alertanalysis";
import Cameradetails from "./page/Monitoring/motitorfeature/cameradetails";
import Alertdicision from "./page/Decision/dicision_feature/alert_dicision";
import Makedicision from "./page/Decision/dicision_feature/make_dicision";
import Pandingdicision from "./page/Decision/dicision_feature/panding_dicision";
import Highpriority from "./page/Decision/dicision_feature/high_priority";
import Assignedcase from "./page/Decision/dicision_feature/assigned_case";
import Resolvedtoday from "./page/Decision/dicision_feature/resolved";
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
              path="/home/bordermanage"
              element={<Bordermemory setName={setName} />}
            />
            <Route
              path="/home/camerahealth"
              element={<Camerahelth setName={setName} />}
            />
            {/* sequrity alert start */}

            <Route
              path="/monitoring/totalalert"
              element={<TotalAlert setName={setName} />}
            />
            <Route
              path="/monitoring/critical"
              element={<Criticul setName={setName} />}
            />
            <Route
              path="/monitoring/underreview"
              element={<Underreview setName={setName} />}
            />
            <Route
              path="/monitoring/resolve"
              element={<Resolved setName={setName} />}
            />

            <Route
              path="/alert/alertanalysis"
              element={<Alertanalysis setName={setName} />}
            />

            {/* monitoring start */}

            <Route
              path="/monitoring/cameradetails"
              element={<Cameradetails setName={setName} />}
            />

            {/* Dicidion start */}

            <Route
              path="/decision/alert/dicision"
              element={<Alertdicision setName={setName} />}
            />
            <Route
              path="/dicision/create/dicision"
              element={<Makedicision setName={setName} />}
            />
            <Route
              path="/dicision/panding"
              element={<Pandingdicision setName={setName} />}
            />
            <Route
              path="/dicision/high"
              element={<Highpriority setName={setName} />}
            />
            <Route
              path="/dicision/assigned"
              element={<Assignedcase setName={setName} />}
            />
            <Route
              path="/dicision/resolved"
              element={<Resolvedtoday setName={setName} />}
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


            <Route path="/analysis/spatialintelligent" element={<SpatialIntelligent setName={setName} />}/>
            <Route path="/analysis/predictiveanalytics" element={<PredictiveAnalytics setName={setName} />}/>
            <Route path="/analysis/behaviouranalysis" element={<BehaviourAnalysis setName={setName} />}/>
            <Route path="/analysis/networktesting" element={<NetworkTesting setName={setName} />}/>
            <Route path="/analysis/environmentalanalysis" element={<EnvironmentalAnalysis setName={setName} />}/>
            <Route path="/analysis/evisenceintelligence" element={<EvisenceIntelligence setName={setName} />}/>
            <Route path="/analysis/modelperformance" element={<ModelPerformance setName={setName} />}/>
            <Route path="/analysis/infrastructurehealth" element={<InfrastructureHealth setName={setName} />}/>



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
