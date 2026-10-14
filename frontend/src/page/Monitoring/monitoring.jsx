import { useState } from "react";
import "./monitoring.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { BiSolidCameraPlus } from "react-icons/bi";

function Monitor({ setName }) {
  setName("AI Monitoring");
  let [index, setIndex] = useState(0);
  let [cameras, setCamera] = useState([
    {
      id: 0,
      icon: <BiSolidCameraPlus />,
      title: "Connect Camera ...",
      dis: " ",
    },
  ]);

  let leftsidebar = (prev) => {
    return (prev - 1 + cameras.length) % cameras.length;
  };

  let rightsidebar = (prev) => {
    return (prev + 1) % cameras.length;
  };
  let newcamera = {
    id: index,
    icon: "",
    title: "Camera No " + cameras.length,
  };

  let iconclick = () => {
    return (
      setCamera((newcam) => [...newcam, newcamera]),
      setIndex(cameras.length)
    );
  };

  let monifeature = [
    {
      id: 1,
      name:" Camera details",
    },
    {
      id: 2,
      name:"Detection Feature",
    },
    {
      id: 3,
      name:"",
    },
    {
      id: 4,
      name:"",
    }
  ];

  return (
    <div className="mainmoni">
      {cameras
        .filter((item, i) => i === index)
        .map((camera, i) => {
          return (
            <div className="control">
              <div className="cameratitle">{camera.title}</div>
              <div className="maincamera">
                <div key={i}>
                  <div className="cameraicon" onClick={iconclick}>
                    {camera.icon}
                  </div>
                </div>
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

      <div className="contboxdesign">
        {monifeature.map((feature_item,i) => {
          return (
            <div className="monfeature">
              <div className="featurenane">{feature_item.name}</div>
              <div className="parentbox"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Monitor;
