import { useState } from "react";
import "./monitoring.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { BiSolidCameraPlus } from "react-icons/bi";

function Monitor({ setName }) {
  setName("AI Monitoring");
  let [index, setIndex] = useState(0);
  let [cameras,setCamera]=useState([{
      id: 0,
      icon: <BiSolidCameraPlus />,
      classnum: "",
      title:"",
    },])

  let leftsidebar = (prev) => {
    return (prev - 1 + cameras.length) % cameras.length;
  };

  let rightsidebar = (prev) => {
    return (prev + 1) % cameras.length;
  };
  let newcamera=
    {
      id: index,
      icon: "",
      classnum: "cameratitle",
      title:"camera "+cameras.length,
    }

  let iconclick=()=>{
    return(
      setCamera((newcam)=>[...newcam,newcamera]),
      setIndex(cameras.length)
      
    );
  }

  let monifeature=[
    {
      id:1,
    },
    {
      id:2,
    },
    {
      id:3,
    },
    {
      id:4,
    },
    {
      id:5,
    },
    {
      id:6,
    }
  ]

  return (
    <div className="mainmoni">
      <div className="maincamera">
        {cameras
          .filter((item, i) => i === index)
          .map((camera, i) => {
            return (
              <div key={i}>
                <div className="cameraicon" onClick={iconclick}>{camera.icon}</div>
                <div className={camera.classnum}>{camera.title}</div>
              </div>
            );
          })}
      </div>
      <div className="sidebar">
        <div
          className="leftside"
          onClick={() => {
            return (setIndex(leftsidebar));
          }}
        >
          <GoChevronLeft />
        </div>
        <div
          className="rightside"
          onClick={() => {
            return (setIndex(rightsidebar));
          }}
        >
          <GoChevronRight />
        </div>
      </div>

      <div>
        {monifeature.map(()=>{
          return(
            <div className="monfeature">
              <div className="parentbox"></div>

            </div>
          );
        })}

      </div>


    </div>
  );
}

export default Monitor;
