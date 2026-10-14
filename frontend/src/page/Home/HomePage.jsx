import { Link } from "react-router-dom";
import "./HomeStyle.css";
import { MdPersonSearch } from "react-icons/md";
import { LuScanSearch } from "react-icons/lu";
import { TbVirusSearch } from "react-icons/tb";
// import Detection from "./detection";

function HomePage({ setName }) {
  setName("Home");

  let conts = [
    {
      link: "/home/detection",
      icon: <MdPersonSearch />,
      title: "Detection : ",
      subtitle: "AI-POWERED THREAT DETECTION",
      description:
        "Detect humans, vehicles, and suspicious activities in real time using AI-powered CCTV analytics.",
    },
    {
      link: "/home/tracking",
      icon: <LuScanSearch />,
      title: "Tracking : ",
      subtitle: "MOVEMENT & TRAJECTORY ANALYSIS",
      description:
        "Track people and vehicles across video frames to understand movement, direction & trajectories.",
    },
    {
      link: "/home/camerahealth",
      icon: <TbVirusSearch />,
      title: "Other : ",
      subtitle: "BEYOND TRADITIONAL SURVEILLANCE",
      description:
        "Explore a smarter surveillance ecosystem with secure event logs, environmental monitoring.",
    },
  ];

  return (
    <div>
      <div></div>
      <div className="imge">
        <div className="titlename">
          AI POWERED INTELLIGENT BOPRDER SURVEILLANCE PLATFROM
        </div>
      </div>

      <div className="maincontain">
        {conts.map((cont, i) => {
          return (
            <Link to={cont.link}>
              <div className="contener" key={i}>
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
    </div>
  );
}
export default HomePage;
