import { useState } from "react";
import cameras_info from "./motitorfeature/camera_info.json";
import "./monitoring.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { BiSolidCameraPlus } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import monitorfeaturelist from "./motitorfeature/detection_feature.json";

function Monitor({ setName ,cameradetails,setcameradetails}) {
  setName("AI Monitoring");

  return (
    <div className="mainmoni">
      <div>
        <CameraBox />
      </div>
      <div>
        <MonitoringObject cameradetails={cameradetails} setcameradetails={setcameradetails}/>
      </div>
    </div>
  );
}

export default Monitor;

// camera function create hare

function CameraBox() {
  let [cameralength, setcameralength] = useState(0);
  let [index, setIndex] = useState(0);
  let [cameras, setCamera] = useState([
    {
      id: 0,
      icon: <BiSolidCameraPlus />,
      title: "Connect Camera ...",
      dis: " ",
      class1: " ",
    },
  ]);
  // console.log(index);
  // <Monitoringcont indexs={index}/>

  let leftsidebar = (prev) => {
    return setIndex(prev > 0 ? prev - 1 : cameralength);
  };

  let rightsidebar = (prev) => {
    return setIndex(prev < cameralength ? prev + 1 : 0);
  };
  let newcamera = {
    id: index,
    icon: "",
    title: "Camera No " + (cameralength + 1),
    dis: <MdCancel />,
    class1: "cancle",
  };

  let iconclick = () => {
    // console.log(2)
    return (
      setCamera((newcam) => [...newcam, newcamera]),
      setcameralength(cameralength + 1),
      setIndex(cameralength + 1)
    );
  };
  let removecamegra = (id) => {
    return (
      setCamera((revio) => {
        return [...revio.slice(0, id), ...revio.slice(id + 1)];
      }),
      setIndex(cameralength - 1),
      setcameralength(cameralength - 1)
    );
  };
  return (
    <div>
      {cameras
        .filter((item, i) => i === index)
        .map((camera, i) => {
          return (
            <div className="control" key={i}>
              <div>
                <div className="cameratitle" key={i}>
                  {camera.title}
                </div>
                <div
                  className={camera.class1}
                  onClick={() => removecamegra(index)}
                >
                  {camera.dis}
                </div>
              </div>
              <div className="maincamera">
                <Link to="/monitoring/cameradetails">
                  <div key={i}>
                    <div className="cameraicon" onClick={() => iconclick()}>
                      {camera.icon}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}

      <div className="sidebar">
        <div
          className="leftside"
          onClick={() => {
            return setIndex(leftsidebar);
          }}
        >
          <GoChevronLeft />
        </div>
        <div
          className="rightside"
          onClick={() => {
            return setIndex(rightsidebar);
          }}
        >
          <GoChevronRight />
        </div>
      </div>
    </div>
  );
}

// Monitoring all feature box hare ...

function MonitoringObject() {
  let monifeature = [
    {
      id: 1,
      name: "Camera details",
    },
    {
      id: 2,
      name: "Detection Feature",
    },
    {
      id: 3,
      name: "Core Inovation",
    },
  ];

  return (
    <div>
      {monifeature.map((feature_item, i) => {
        return (
          <div className="monfeature" key={i}>
            <div className="featurenane">{feature_item.name}</div>
            <div className="parentbox">
              {feature_item.name === "Camera details" ? (
                <Monitoringcont />
              ) : feature_item.name === "Detection Feature" ? (
                <DetectionFeature />
              ) : feature_item.name === "Core Inovation" ? (
                <Coreinovation />
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DetectionFeature() {
  return (
    <div className="featurelist">
      {monitorfeaturelist.map((feature, i) => {
        return <div className="parentfeaturelist" key={i}></div>;
      })}
    </div>
  );
}

function Monitoringcont({ indexs }) {
  return (
    <div>
      {/* {console.log(indexs)} */}
      {cameras_info
        .filter((information, num) => num === indexs)
        .map(() => {
          return (
            <div>
              <div></div>
            </div>
          );
        })}
    </div>
  );
}

function Coreinovation() {
  let innovations = [
    {
      id: 1,
      name: "Bandwidth-Aware AI",
      details: "Process fewer frames on weak networks",
    },
    {
      id: 2,
      name: "False-Alert Reduction",
      details: "Combine confidence checks with duplicate filtering",
    },
    {
      id: 3,
      name: "Unified Object Tracking",
      details: "Link object IDs across detection events",
    },
    {
      id: 4,
      name: "Tamper-Evident Audit",
      details: "Use cryptographic hashes to verify records",
    },
  ];
  return (
    <div className="inovation">
      {innovations.map(() => {
        return (
        <div className="childinovation">
          <div></div>
          <div></div>
          <div></div>

        </div>
        );
      })}
    </div>
  );
}
