import "./decision.css";
import Queues from "../Alert/alert_feature/alerts.json";
import { FiAlertTriangle } from "react-icons/fi";
import { IoPeopleSharp } from "react-icons/io5";
import { GoCheckCircle, GoCpu } from "react-icons/go";
import { AiFillOpenAI } from "react-icons/ai";
import { IoMdCreate } from "react-icons/io";
import { Link } from "react-router-dom";

function Decision({ setName }) {
  setName("Decision");
  return (
    <div className="maindeci">
      <div>
        <Decisionhead />
      </div>
      <div>
        <DecisionQueue />
      </div>
      <div>
        <Makedici />
      </div>
    </div>
  );
}

export default Decision;
function Makedici() {
  return (
    <Link to="/dicision/create/dicision">
      <div className="makedici">
        <div className="makedicilogo">
          <IoMdCreate />
        </div>
        <div className="makediciname">Make a dicission</div>
      </div>
    </Link>
  );
}
function DecisionQueue() {
  return (
    <div className="mainqueue">
      {/* <div className="history">History</div>  */}
      <div className="parentque">
        {Queues.map((queue, i) => {
          return (
            <Link to="/decision/alert/dicision">
              <div className="childque">
                <div className="childlogo">
                  <AiFillOpenAI />
                </div>
                <div className="child1">
                  <div className="que1">{queue.id}</div>
                  <div className="que2">
                    {queue.camera} • {queue.zone}
                  </div>
                  <div className="que3">{queue.title}</div>
                </div>
                <div className="child2">
                  <div className="que4">{queue.severity}</div>
                  <div className="que5">{queue.status}</div>
                </div>
              </div>
            </Link>
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
      headlogo: <GoCpu />,
      headnum: "25",
      link:"/dicision/panding",
    },
    {
      id: 1,
      headtitle: "High Priority",
      headlogo: <FiAlertTriangle />,
      link:"/dicision/high",
      headnum: "8",
    },
    {
      id: 2,
      headtitle: "Assigned Cases",
      headlogo: <IoPeopleSharp />,
      link:"/dicision/assigned",
      headnum: "10",
    },
    {
      id: 3,
      headtitle: "Resolved Today",
      headlogo: <GoCheckCircle />,
      link:"/dicision/resolved",
      headnum: "15",
    },
  ];
  return (
    <div className="disiheadermain">
      {header.map((headitem, i) => {
        return (
          <Link to={headitem.link}>
          <div className="disiheader">
            <div className="headtitle">{headitem.headtitle}</div>
            <div className="logonum">
              <div className="headlogo">{headitem.headlogo}</div>
              <div className="headnum">{headitem.headnum}</div>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );
}
