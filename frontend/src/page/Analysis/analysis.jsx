import "./analysis.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { LuScanSearch, LuBrainCircuit } from "react-icons/lu";
import { MdEventAvailable, MdLinkedCamera } from "react-icons/md";

import {GiBrain } from "react-icons/gi";
import {RiGlobalLine } from "react-icons/ri";
import {IoIosPeople } from "react-icons/io";
import {MdNetworkCheck,MdHealthAndSafety } from "react-icons/md";
import {GrAction } from "react-icons/gr";
import {GoCodeSquare,GoDatabase } from "react-icons/go";



function Analysis({ setName }) {
  setName("Analysis");
  return (
    <div className="mainanal">
      <div>
        <Anahead />
      </div>
      <div>
        <Contbox />
      </div>
      <div>
    <Module/>
      </div>
    </div>
  );
}

export default Analysis;
function Module(){
  let modules=[
    {
      modulname:"Spatial Intelligent",
      modullogo:<RiGlobalLine/>,
      modulsub:"3D terrain,camera coverage& movement analysis",
    },
    {
      modulname:"Predictive Analytics",
      modullogo:<GiBrain />,
      modulsub:" AI trends, anomaly detection & forecasting",
    },
    {
      modulname:"Behaviour Analysis",
      modullogo:<IoIosPeople/>,
      modulsub:"Object tracking, event patterns & correlation",
    },
    {
      modulname:"Network Testing",
      modullogo:<MdNetworkCheck/>,
      modulsub:"Analysis real time network issue",
    },
    {
      modulname:"Environmental Analysis",
      modullogo:<GrAction/>,
      modulsub:"Low light, visibility & video quality",
    },
    {
      modulname:"Evisence Intelligence",
      modullogo:<GoCodeSquare/>,
      modulsub:"Explainable findings hashes & audit history",
    },
    {
      modulname:"Model Performance",
      modullogo:<GoDatabase/>,
      modulsub:"Precision,recall,confidence & model drift",
    },
    {
      modulname:"Infrastructure Health",
      modullogo:<MdHealthAndSafety/>,
      modulsub:"Camera availability,latency,&frame drops",
    }
  ]
  return(
    <div className="mainmodule">
      {modules.map((module)=>{
        return(
          <div className="parentmodul">
            <div>{module.modullogo}</div>
            <div>
              <div>{module.modulname}</div>
              <div>{module.modulsub}</div>
            </div>
          </div>

        );
      })}
    </div>

  );
}
function Contbox() {
  let headoptions = [
    {
      number: 1284,
      logoopt: <MdEventAvailable />,
      nameopt: "Event Analysed",
      subnam: "Selected Period",
    },
    {
      number: 32,
      logoopt: <LuScanSearch />,
      nameopt: "Flagged",
      subnam: "Human verification",
    },
    {
      number: "24/26",
      logoopt: <MdLinkedCamera />,
      nameopt: "Camera Availablity",
      subnam: "2 Unavailable",
    },
    {
      number: "94.2%",
      logoopt: <LuBrainCircuit />,
      nameopt: "Sample Precision",
      subnam: "Illustrative Evaluation",
    },
  ];
  return (
    <div className="headcont">
      {headoptions.map((headoption, i) => {
        return (
          <div className="boxheadcont">
            <div className="headname">{headoption.nameopt}</div>
            <div className="controlhead">
              <div className="headlogo1">{headoption.logoopt}</div>
              <div className="headnum1">{headoption.number}</div>
            </div>
            <div>{headoption.subnam}</div>
          </div>
        );
      })}
      <div className="ananame">Analysis Overview</div>
      <div className="overview"></div>
    </div>
  );
}

function Anahead() {
  let dateopt = [
    {
      dates: "Last 6 Hours",
    },
    {
      dates: "Last 24 Hours",
    },
    {
      dates: "Last 7 days",
    },
    {
      dates: "Last 30 days",
    },
    {
      dates: "Last 6 Month",
    },
    {
      dates: "Last 1 year",
    },
  ];
  return (
    <div className="anacls1">
      <div className="anacls2">
        <div className="anacls4">
          <div className="ananame">SuperVision Center</div>
          <div className="anasubname">
            Turn surveillance data into actionable insight
          </div>
        </div>
        <div className="analogo">
          <FaMapMarkedAlt />
        </div>
      </div>
      <div className="anacls3">
        <div>
          <input
            type="text"
            className="anasearch"
            placeholder=" Search Camera ID ,"
          />
        </div>
        <div>
          <select className="anadate">
            {dateopt.map((dateitm, i) => {
              return (
                <div>
                  <option value={dateitm.dates} key={i}>
                    {dateitm.dates}
                  </option>
                </div>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
