import "./alert.css";
import alerts from "./alerts.json";
import { MdSecurity } from "react-icons/md";
import { BiSolidBellRing } from "react-icons/bi";
import { RiAlertFill } from "react-icons/ri";
import { FaRegClock, FaCheckCircle } from "react-icons/fa";

function Dashboard({ setName }) {
  setName("Live Alert");

  return (
    <div className="maindash">
      <div className="fixposition">
        <div className="mainaleheader">
          <SecurityAlert />
        </div>
        <div>
          <Filteroptipn />
        </div>
      </div>
      <div>
        <Alertcomponent />
      </div>
    </div>
  );
}

export default Dashboard;

function Alertcomponent() {
  return (
    <div className="mainalertbox">
      {alerts.map((alertsitem, i) => {
        return (
          <div className="fullcont">
            <div>
              <img
                src={alertsitem.imag}
                alt={alertsitem.id}
                className="imagesclas"
              />
            </div>
            <div className="description">
              <div className="decriptitle">{alertsitem.title}</div>
              <div className="descripcamera">
                {alertsitem.camera} • {alertsitem.zone}
              </div>
              <div className="descripdate">{alertsitem.date}</div>
              <div className="descripcamera">{alertsitem.time}</div>
            </div>
            <div className="alertscore">
              <div>
                <div className="securityscore2">Priority</div>
                <div className="securityscore1">{alertsitem.severity}</div>
              </div>
              <div>
                <div className="securityscore3">Risk</div>
                <div className="securityscore1">{alertsitem.confidence}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Filteroptipn() {
  let priorictys = [
    {
      value: "All",
    },
    {
      value: "Criticul",
    },
    {
      value: "High",
    },
    {
      value: "Medium",
    },
    {
      value: "Low",
    },
  ];
  return (
    <div className="searchbox">
      <div>
        <input
          type="text"
          name="search"
          className="search"
          placeholder="Search"
        />
      </div>
      <div>
        <select name="" id="" className="prioricty">
          {priorictys.map((prioricty, i) => {
            return (
              <div>
                <option value={prioricty.value} key={i}>
                  {prioricty.value}
                </option>
              </div>
            );
          })}
        </select>
      </div>
      <div className="datetime">
        <input type="date" />
      </div>
    </div>
  );
}

function SecurityAlert() {
  let aleheaders = [
    {
      id: 0,
      headname: "Total Alert",
      headlogo: <BiSolidBellRing />,
      altnum: "26",
      feedback: "Today's Alert",
      logoclass: "clslable1logo1",
    },
    {
      id: 1,
      headname: "Critical",
      headlogo: <RiAlertFill />,
      altnum: "05",
      feedback: "Review First",
      logoclass: "clslable1logo2",
    },
    {
      id: 2,
      headname: "Under Review",
      headlogo: <FaRegClock />,
      altnum: "07",
      feedback: "Begin Verify",
      logoclass: "clslable1logo3",
    },
    {
      id: 3,
      headname: "Resolvd",
      headlogo: <FaCheckCircle />,
      altnum: "14",
      feedback: "Closed Today",
      logoclass: "clslable1logo4",
    },
  ];
  return (
    <div>
      <div className="title1">
        <div>
          <MdSecurity />
        </div>
        Security Alert
      </div>
      <div className="cls1aleheader">
        {aleheaders.map((aleheader, i) => {
          return (
            <div key={i} className="aleheader">
              <div className="clslable1">
                <div className={aleheader.logoclass}>{aleheader.headlogo}</div>
              </div>
              <div clslable2>
                <div className="clslablename1">{aleheader.headname}</div>
                <div className="clslablename2">{aleheader.altnum}</div>
                <div className="clslablename3">{aleheader.feedback}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
