import "./decision.css";
import Queues from "../Alert/alerts.json";
import {FiAlertTriangle} from "react-icons/fi";
import {IoPeopleSharp} from "react-icons/io5";
import {GoCheckCircle,GoCpu} from "react-icons/go";
import {AiFillOpenAI} from "react-icons/ai";



function Decision({ setName }) {
  setName("Decision");
  return (
    <div className="maindeci">
      <div>
        <Decisionhead />
      </div>
      <div>
        <DecisionQueue/>
      </div>
    </div>
  );
}

export default Decision;
function DecisionQueue(){
  return(
    <div className="mainqueue">
        {/* <div className="history">History</div>  */}
        <div className="parentque">
        {Queues.map(( queue,i)=>{
          return(
            <div className="childque">
              <div className="childlogo">
                <AiFillOpenAI/>
              </div>
              <div className="child1">
                <div className="que1">{queue.id}</div>
                <div className="que2">{queue.camera} • {queue.zone}</div>
                <div className="que3">{queue.title}</div>
              </div>
              <div className="child2">
                <div className="que4">{queue.severity}</div>
                <div className="que5">{queue.status}</div>
              </div>
            </div>
          );
        })}
        </div>
    </div>
  );
}
function Decisionhead() {
  let header = [
    {
      id: 0,
      headtitle: "Panding Decisions",
      headlogo:<GoCpu/>,
      headnum:"25",
    },
    {
      id: 1,
      headtitle: "High Priority",
      headlogo:<FiAlertTriangle/>,
      headnum:"8",
    },
    {
      id: 2,
      headtitle: "Assigned Cases",
      headlogo:<IoPeopleSharp/>,
      headnum:"10",
    },
    {
      id: 3,
      headtitle: "Resolved Today",
      headlogo:<GoCheckCircle/>,
      headnum:"15",
    },
  ];
  return (
    <div className="disiheadermain">
      {header.map((headitem, i) => {
        return (
          <div className="disiheader">
            <div className="headtitle">{headitem.headtitle}</div>
            <div className="logonum">
              <div className="headlogo">{headitem.headlogo}</div>
              <div className="headnum">{headitem.headnum}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
