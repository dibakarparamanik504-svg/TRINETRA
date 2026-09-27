
import { Link } from "react-router-dom";
import "./HomeStyle.css";
// import Detection from "./detection";

function HomePage({ setName }) {
  setName("Home");

  let cont = ["/home/detection","/home/tracking","/home/camerahealth"];

  return (
    <div>
      <div></div>
      <div className="imge">
        <div className="titlename">
          AI POWERED INTELLIGENT BOPRDER SURVEILLANCE PLATFROM
        </div>
      </div>

      <div className="maincontain">
        {cont.map((item,i)=>{
          return (
            <Link to={item}><div className="contener" key={i}></div></Link>
          );
        })}
      </div>
    </div>
  );
}
export default HomePage;
