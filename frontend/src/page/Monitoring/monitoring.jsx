import { useState } from "react";
import "./monitoring.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { BiSolidCameraPlus } from "react-icons/bi";
import {MdCancel} from "react-icons/md"

function Monitor({ setName }) {
  setName("AI Monitoring");
  let [cameralength,setcameralength] = useState(0);
  let [index, setIndex] = useState(0);
  let [cameras, setCamera] = useState([
    {
      id: 0,
      icon: <BiSolidCameraPlus />,
      title: "Connect Camera ...",
      dis: " ",
      class1:" "
    },
  ]);

  let leftsidebar = (prev) => {
    return(
       setIndex(prev > 0 ? prev-1:cameralength)
    );
  };

  let rightsidebar = (prev) => {
    return (
      setIndex(prev < cameralength ? prev + 1 :0)
    );
  };
  let newcamera = {
    id: index,
    icon: "",
    title: "Camera No " + (cameralength +1),
    dis:<MdCancel/>,
    class1:"cancle",
  };

  let iconclick = () => {
    return (
      setCamera((newcam) => [...newcam, newcamera]),
      setcameralength(cameralength +1),
      setIndex(cameralength+1)
    );
  };

  let monifeature = [
    {
      id: 1,
      name: " Camera details",
    },
    {
      id: 2,
      name: "Detection Feature",
    },
    {
      id: 3,
      name: "",
    },
    {
      id: 4,
      name: "",
    },
  ];

  let removecamegra=(id)=>{
    return(
      setCamera((revio)=>{
        return(
        [...revio.slice(0,id),
          ...revio.slice(id+1)
        ]
        // 
        // 
        );

      }),
      setIndex(cameralength-1),
      setcameralength(cameralength-1)

    );
  }

  return (
    <div className="mainmoni">
      {cameras
        .filter((item, i) => i === index)
        .map((camera, i) => {
          return (
            <div className="control">
              <div>
              <div className="cameratitle" key={i}>{camera.title}</div>
              <div className={camera.class1} onClick={()=>removecamegra(index)}>{camera.dis}</div>
              </div>
              <div className="maincamera">
                <div key={i}>
                  <div className="cameraicon" onClick={()=>iconclick()}>
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

      <div>
        {monifeature.map((feature_item, i) => {
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
