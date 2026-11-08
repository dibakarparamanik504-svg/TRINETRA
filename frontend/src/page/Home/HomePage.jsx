import { Link } from "react-router-dom";
import "./HomeStyle.css";
import { MdPersonSearch, MdMemory } from "react-icons/md";
import { LuScanSearch } from "react-icons/lu";
import { TbVirusSearch } from "react-icons/tb";
import { LuActivity } from "react-icons/lu";
import detectiondata from "./home_feature/data/detection page.json";
import trackingdata from "./home_feature/data/tracking page.json";
import bordermemorydata from "./home_feature/data/border memory .json";
import eventdata from "./home_feature/data/events management .json";
import otherdata from "./home_feature/data/other page .json"

function HomePage({ setName, setRoutedata,setHeadroute,setTitle1 }) {
  setName("Home");

  return (
    <div>
      <div>
        <Images />
      </div>
      <div>
        <Mostfeature setRoutedata={setRoutedata} setHeadroute={setHeadroute} setTitle1={setTitle1}/>
      </div>
    </div>
  );
}
export default HomePage;

function Mostfeature({ setRoutedata ,setHeadroute ,setTitle1}) {
  // setRoutedata("hello")
  let conts = [
    {
      headdes:detectiondata.detectionModules,
      bodydes:detectiondata.categories,
      icon: <MdPersonSearch />,
      title: "Detection",
      subtitle: "AI-POWERED THREAT DETECTION",
      description:
        "Detect humans, vehicles, and suspicious activities in real time using AI-powered CCTV analytics.",
    },
    {
      headdes: trackingdata.features,
      bodydes:trackingdata.overview,
      icon: <LuScanSearch />,
      title: "Tracking",
      subtitle: "MOVEMENT & TRAJECTORY ANALYSIS",
      description:
        "Track people and vehicles across video frames to understand movement, direction & trajectories.",
    },
    {
      headdes:bordermemorydata.navigation,
      bodydes:bordermemorydata.filters,
      icon: <MdMemory />,
      title: "Border Memory",
      subtitle: "PREVIOUS MEMORY SERVILENCE ",
      description:
        "Manage, prioritize and track surveillance events,evidence records in real time.",
    },
    {
      headdes:eventdata.features,
      bodydes:eventdata.categories,
      icon: <LuActivity />,
      title: "Event Management",
      subtitle: "INTELLIGENT EVENT ANALYSIS ",
      description:
        "Manage, prioritize and track surveillance events,evidence records in real time.",
    },
    {
      headdes:otherdata.categories,
      bodydes:otherdata.filters,
      icon: <TbVirusSearch />,
      title: "Other Service",
      subtitle: "BEYOND TRADITIONAL SURVEILLANCE",
      description:
        "Explore a smarter surveillance ecosystem with secure event logs, environmental monitoring.",
    },
  ];

  return (
    <div className="maincontain">
      {conts.map((cont, i) => {
        return (
          <Link
            to="/home/detection"
            onClick={() => {
              return (
                setRoutedata(cont.headdes),
                setHeadroute(cont.bodydes),
                console.log("sucessfull")
              );
            }}
            key={i}
          >
            <div className="contener">
              <div className="conticon">{cont.icon}</div>
              <div className="firstcont">
                <div className="secondcont">
                  <div className="conttitle">{cont.title}</div>
                  <div className="contsubtitle">{cont.subtitle}</div>
                </div>
                <div className="contdescribe">{cont.description}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function Images() {
  return (
    <div className="imge">
      <div className="titlename">
        AI POWERED INTELLIGENT BOPRDER SURVEILLANCE PLATFROM
      </div>
    </div>
  );
}
